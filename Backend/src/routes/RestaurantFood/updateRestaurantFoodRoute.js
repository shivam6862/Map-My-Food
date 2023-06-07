const updateRestaurantFood = require("../../db/RestaurantFood/updateRestaurantFood");

module.exports = updateRestaurantFoodRoute = {
  path: "/restaurantfood",
  method: "put",
  handler: async (req, res) => {
    const { itemId, food } = req.body;
    const response = await updateRestaurantFood(itemId, food[0]);
    res.status(200).json({
      response: response,
      message: "Restaurant offers updated Successfully!",
    });
  },
};
