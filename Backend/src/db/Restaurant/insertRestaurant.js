const getDb = require("../db").getDb;
const updateUserResturentId = require("../Auth/updateUserResturentId");
module.exports = insertRestaurant = async (userId, Restaurant) => {
  const connection = await getDb();
  const { insertedId } = await connection.collection("restaurant").insertOne({
    ...Restaurant,
  });
  const response = await updateUserResturentId(userId, Restaurant.RestaurantId);
  return response;
};
