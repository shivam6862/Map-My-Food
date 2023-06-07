const getRestaurantAllFood = require("../../db/RestaurantFood/getRestaurantAllFood");

module.exports = getRestaurantAllFoodRoute = {
  path: "/restaurantallfood/:id",
  method: "get",
  handler: async (req, res) => {
    const id = req.params.id;
    const response = await getRestaurantAllFood(id);
    res.status(200).json(response);
  },
};
