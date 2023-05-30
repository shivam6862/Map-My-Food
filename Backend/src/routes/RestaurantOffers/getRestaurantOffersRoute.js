const getRestaurantOffers = require("../../db/RestaurantOffers/getRestaurantOffers");

module.exports = getRestaurantOffersRoute = {
  path: "/restaurantoffer/:id",
  method: "get",
  handler: async (req, res) => {
    const id = req.params.id;
    const response = await getRestaurantOffers(id);
    res.status(200).json(response);
  },
};
