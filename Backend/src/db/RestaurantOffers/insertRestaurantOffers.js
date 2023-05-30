const getDb = require("../db").getDb;

module.exports = insertRestaurantOffers = async (RestaurantId, offers) => {
  const connection = await getDb();
  const { insertedId } = await connection
    .collection("restaurantOffers")
    .insertOne({ RestaurantId, offers });
  return insertedId;
};
