const updateRestaurantOffers = require("../../db/RestaurantOffers/updateRestaurantOffers");

module.exports = updateRestaurantOffersRoute = {
  path: "/restaurantoffer",
  method: "put",
  handler: async (req, res) => {
    const { offerId, offers } = req.body;
    const response = await updateRestaurantOffers(offerId, offers[0]);
    res.status(200).json({
      response: response,
      message: "Restaurant offers updated Successfully!",
    });
  },
};
