const getDb = require("../db").getDb;
const getRestaurant = require("../Restaurant/getRestaurant");

module.exports = getRestaurantFood = async (id) => {
  try {
    const connection = await getDb();
    const response = await connection
      .collection("restaurantFood")
      .find({ RestaurantId: id })
      .toArray();
    const Restaurant = await getRestaurant(id);
    const vegFood = response[0].food.filter((item) => item.veg === "true");
    const nonVegFood = response[0].food.filter((item) => item.veg === "false");
    const combinedData = {
      ...Restaurant,
      veg: vegFood,
      nonveg: nonVegFood,
    };
    return combinedData;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
