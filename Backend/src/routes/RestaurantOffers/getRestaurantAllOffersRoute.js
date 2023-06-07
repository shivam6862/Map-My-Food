const getRestaurantAllOffers = require("../../db/RestaurantOffers/getRestaurantOffers");

module.exports = getRestaurantAllOffersRoute = {
  path: "/restaurantalloffers/:id",
  method: "get",
  handler: async (req, res) => {
    const id = req.params.id;
    const response = await getRestaurantAllOffers(id);
    res.status(200).json(response);
  },
};
