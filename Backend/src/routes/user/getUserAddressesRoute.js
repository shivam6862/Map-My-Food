const getUserAddresses = require("../../db/user/getUserAddresses");

module.exports = getUserAddressesRoute = {
  path: "/useraddresses/:id",
  method: "get",
  handler: async (req, res) => {
    const id = req.params.id;
    const response = await getUserAddresses(id);
    return res.status(200).send({
      message: "All Addresses of User!",
      response: response,
    });
  },
};
