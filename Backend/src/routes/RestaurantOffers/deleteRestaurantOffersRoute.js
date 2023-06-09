const deleteRestaurantOffers = require("../../db/RestaurantOffers/deleteRestaurantOffers");

module.exports = deleteRestaurantOffersRoute = {
  path: "/restaurantoffer",
  method: "delete",
  handler: async (req, res) => {
    try {
      const { offerId } = req.body;
      const response = await deleteRestaurantOffers(offerId);
      res.status(200).json({
        response: response,
        message: "Restaurant offer deleted Successfully!",
      });
    } catch (err) {
      res.status(400).json({
        response: "",
        message: "Restaurant offer delete Failed!",
      });
    }
  },
};
