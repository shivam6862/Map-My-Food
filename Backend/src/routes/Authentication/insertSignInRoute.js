const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const insertOtp = require("../../db/Auth/insertOtp");
const getUsers = require("../../db/Auth/getUsers");

module.exports = insertSignInRoute = {
  path: "/signin",
  method: "post",
  handler: async (req, res) => {
    try {
      const { number } = req.body;
      const user = await getUsers(number);
      if (!user)
        return res
          .status(400)
          .send({ message: "User not found registered", navigate: "false" });
      var OTP = otpGenerator.generate(6, {
        digits: true,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      console.log(OTP);
      const salt = await bcrypt.genSalt(10);
      OTP = await bcrypt.hash(OTP, salt);
      const response = await insertOtp(number, OTP);
      return res.status(200).send({
        message: "OTP Send successfully!",
        navigate: "true",
        number: number,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Server Error!",
        navigate: "false",
        number: number,
      });
    }
  },
};
