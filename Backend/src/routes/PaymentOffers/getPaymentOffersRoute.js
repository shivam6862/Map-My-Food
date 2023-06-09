const getPaymentOffers = require("../../db/PaymentOffers/getPaymentOffers");

module.exports = getPaymentOffersRoute = {
  path: "/offers/:pincode",
  method: "get",
  handler: async (req, res) => {
    try {
      const pincode = req.params.pincode;
      const response = await getPaymentOffers(pincode);
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json([]);
    }
  },
};
