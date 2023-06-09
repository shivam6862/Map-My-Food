const getDb = require("../db").getDb;

module.exports = getRestaurantAllFood = async (id) => {
  try {
    const connection = await getDb();
    const response = await connection
      .collection("restaurantFood")
      .find({ RestaurantId: id })
      .toArray();
    if (response.length == 0) return response;
    return response[0].food;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
