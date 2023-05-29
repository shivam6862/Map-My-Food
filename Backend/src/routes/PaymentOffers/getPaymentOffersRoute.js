const getPaymentOffers = require("../../db/PaymentOffers/getPaymentOffers");

module.exports = getPaymentOffersRoute = {
  path: "/offers/:pincode",
  method: "get",
  handler: async (req, res) => {
    const pincode = req.params.pincode;
    const response = await getPaymentOffers(pincode);
    res.status(200).json(response);
  },
};
