const insertUserAddresses = require("../../db/user/insertUserAddresses");

module.exports = insertUserAddressesRoute = {
  path: "/useraddresses/:id",
  method: "post",
  handler: async (req, res) => {
    try {
      const id = req.params.id;
      const { address } = req.body;
      const response = await insertUserAddresses(id, address);
      return res.status(200).send({
        message: "Addresses Saved successfully!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Addresses Save Failed!",
        response: [],
      });
    }
  },
};
