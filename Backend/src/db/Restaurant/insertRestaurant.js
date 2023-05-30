const getDb = require("../db").getDb;

module.exports = insertRestaurant = async (
  address,
  Restaurant,
  RestaurantId,
  Restaurant_dish,
  location,
  FreeDeliveryonOrderDistance,
  FreeDeliveryonOrderAbove,
  rating,
  ratingCount,
  time,
  phone_number,
  opening_hours
) => {
  const connection = await getDb();
  const { insertedId } = await connection.collection("restaurant").insertOne({
    address,
    Restaurant,
    RestaurantId,
    Restaurant_dish,
    location,
    FreeDeliveryonOrderDistance,
    FreeDeliveryonOrderAbove,
    rating,
    ratingCount,
    time,
    phone_number,
    opening_hours,
  });
  return RestaurantId;
};
