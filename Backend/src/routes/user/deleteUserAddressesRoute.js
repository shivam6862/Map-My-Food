const deleteUserAddresses = require("../../db/user/deleteUserAddresses");

module.exports = deleteUserAddressesRoute = {
  path: "/useraddresses/:id",
  method: "delete",
  handler: async (req, res) => {
    const id = req.params.id;
    const { address } = req.body;
    const response = await deleteUserAddresses(address, id);
    res.status(200).json({
      response: response,
      message: "Address deleted Successfully!",
    });
  },
};
