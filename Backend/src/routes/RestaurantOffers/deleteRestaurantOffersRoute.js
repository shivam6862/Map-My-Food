const deleteRestaurantOffers = require("../../db/RestaurantOffers/deleteRestaurantOffers");

module.exports = deleteRestaurantOffersRoute = {
  path: "/restaurantoffer",
  method: "delete",
  handler: async (req, res) => {
    const { offerId } = req.body;
    const response = await deleteRestaurantOffers(offerId);
    res.status(200).json({
      response: response,
      message: "Restaurant offers deleted Successfully!",
    });
  },
};
