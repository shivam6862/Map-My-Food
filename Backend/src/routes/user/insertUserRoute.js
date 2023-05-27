const insertUser = require("../../db/user/insertUser");

module.exports = insertUserRoute = {
  path: "/user",
  method: "post",
  handler: async (req, res) => {
    const { email, name, number } = req.body;
    const response = await insertUser(email, name, number);
    res.status(200).json(response);
  },
};
