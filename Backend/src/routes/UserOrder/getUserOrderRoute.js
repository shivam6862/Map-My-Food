const getUserOrder = require("../../db/UserOrder/getUserOrder");

module.exports = getUserOrderRoute = {
  path: "/userorder/:userid",
  method: "get",
  handler: async (req, res) => {
    try {
      const userid = req.params.userid;
      const response = await getUserOrder(userid);
      return res.status(200).send({
        message: "All Order of User!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Failed to fetch user order!",
        response: [],
      });
    }
  },
};
