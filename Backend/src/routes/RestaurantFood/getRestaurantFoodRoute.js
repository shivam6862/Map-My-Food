const getRestaurantFood = require("../../db/RestaurantFood/getRestaurantFood");

module.exports = getRestaurantFoodRoute = {
  path: "/restaurantfood/:id",
  method: "get",
  handler: async (req, res) => {
    const id = req.params.id;
    const response = await getRestaurantFood(id);
    res.status(200).json(response);
  },
};
