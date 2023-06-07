const getDb = require("../db").getDb;

module.exports = insertRestaurantOffers = async (RestaurantId, offers) => {
  const connection = await getDb();
  const restaurant = await connection
    .collection("restaurantOffers")
    .findOne({ RestaurantId });
  if (restaurant) {
    const { insertedId } = await connection
      .collection("restaurantOffers")
      .updateOne({ RestaurantId }, { $push: { offers: { $each: offers } } });
    return insertedId;
  } else {
    const { insertedId } = await connection
      .collection("restaurantOffers")
      .insertOne({ RestaurantId, offers });
    return insertedId;
  }
};
