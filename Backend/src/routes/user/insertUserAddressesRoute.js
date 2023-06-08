const insertUserAddresses = require("../../db/user/insertUserAddresses");

module.exports = insertUserAddressesRoute = {
  path: "/useraddresses/:id",
  method: "post",
  handler: async (req, res) => {
    const id = req.params.id;
    const { address } = req.body;
    const response = await insertUserAddresses(id, address);
    return res.status(200).send({
      message: "Addresses Saved successfully!",
      response: response,
    });
  },
};
