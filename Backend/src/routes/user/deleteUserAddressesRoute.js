const deleteUserAddresses = require("../../db/user/deleteUserAddresses");

module.exports = deleteUserAddressesRoute = {
  path: "/useraddresses/:id",
  method: "delete",
  handler: async (req, res) => {
    try {
      const id = req.params.id;
      const { address } = req.body;
      const response = await deleteUserAddresses(address, id);
      res.status(200).json({
        response: response,
        message: "Address deleted Successfully!",
      });
    } catch (error) {
      res.status(400).json({
        response: [],
        message: `Address delete failed!`,
      });
    }
  },
};
