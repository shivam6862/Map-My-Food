const insertUserOrder = require("../../db/UserOrder/insertUserOrder");

module.exports = insertUserOrderRoute = {
  path: "/userorder/:userid",
  method: "post",
  handler: async (req, res) => {
    try {
      const userid = req.params.userid;
      const order = req.body;
      const response = await insertUserOrder(userid, order);
      return res.status(200).send({
        message: "Food Ordered successfully!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Food Ordered Failed!",
        response: "",
      });
    }
  },
};
