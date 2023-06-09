const getRestaurantFood = require("../../db/RestaurantFood/getRestaurantFood");
const getRestaurantOffers = require("../../db/RestaurantOffers/getRestaurantOffers");

module.exports = getRestaurantFoodRoute = {
  path: "/restaurantfood/:id",
  method: "get",
  handler: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await getRestaurantFood(id);
      const offers = await getRestaurantOffers(id);
      const newResponse = { ...response, offers: offers };
      res.status(200).json(newResponse);
    } catch (err) {
      const newResponse = { veg: [], nonveg: [], offers: [] };
      res.status(400).json(newResponse);
    }
  },
};
