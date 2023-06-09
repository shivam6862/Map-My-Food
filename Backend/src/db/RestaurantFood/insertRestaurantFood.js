const getDb = require("../db").getDb;

module.exports = insertRestaurantFood = async (RestaurantId, foodWithId) => {
  try {
    const connection = await getDb();
    const restaurant = await connection
      .collection("restaurantFood")
      .findOne({ RestaurantId });

    if (restaurant) {
      const { insertedId } = await connection
        .collection("restaurantFood")
        .updateOne(
          { RestaurantId },
          { $push: { food: { $each: foodWithId } } }
        );
      return insertedId;
    } else {
      const { insertedId } = await connection
        .collection("restaurantFood")
        .insertOne({ RestaurantId: RestaurantId, food: foodWithId });
      return insertedId;
    }
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
