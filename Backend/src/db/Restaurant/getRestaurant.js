const getDb = require("../db").getDb;
const ObjectId = require("mongodb").ObjectId;

module.exports = getRestaurant = async (id) => {
  try {
    const connection = await getDb();
    const restaurant = await connection
      .collection("restaurant")
      .findOne({ RestaurantId: id });
    return restaurant;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
