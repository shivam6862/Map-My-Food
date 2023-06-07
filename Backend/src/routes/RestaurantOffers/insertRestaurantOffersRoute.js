const insertRestaurantOffers = require("../../db/RestaurantOffers/insertRestaurantOffers");
const v4 = require("uuid").v4;

module.exports = insertRestaurantOffersRoute = {
  path: "/restaurantoffer",
  method: "post",
  handler: async (req, res) => {
    const { RestaurantId, offers } = req.body;
    const offersWithId = offers.map((offer, index) => ({
      offerId: v4(),
      ...offer,
    }));
    const response = await insertRestaurantOffers(RestaurantId, offersWithId);
    res.status(200).json({
      response: response,
      message: "Restaurant offers Saved Successfully!",
    });
  },
};
