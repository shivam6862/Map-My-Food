const getDb = require("../db").getDb;

module.exports = insertRestaurantFood = async (RestaurantId, foodWithId) => {
  const connection = await getDb();
  const { insertedId } = await connection
    .collection("restaurantFood")
    .insertOne({ RestaurantId: RestaurantId, food: foodWithId });
  return insertedId;
};
