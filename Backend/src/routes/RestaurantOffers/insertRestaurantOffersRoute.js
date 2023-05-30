const insertRestaurantOffers = require("../../db/RestaurantOffers/insertRestaurantOffers");

module.exports = insertRestaurantOffersRoute = {
  path: "/restaurantoffer",
  method: "post",
  handler: async (req, res) => {
    const { RestaurantId, offers } = req.body;
    const response = await insertRestaurantOffers(RestaurantId, offers);
    res.status(200).json(response);
  },
};
