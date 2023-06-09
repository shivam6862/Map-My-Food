const getUserAddresses = require("../../db/user/getUserAddresses");

module.exports = getUserAddressesRoute = {
  path: "/useraddresses/:id",
  method: "get",
  handler: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await getUserAddresses(id);
      return res.status(200).send({
        message: "All Addresses of User!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Addresses NOt Foud of User!",
        response: [],
      });
    }
  },
};
