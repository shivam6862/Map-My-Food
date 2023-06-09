const getDb = require("../db").getDb;

module.exports = updateRestaurant = async (RestaurantId, Restaurant) => {
  try {
    const connection = await getDb();
    const result = await connection.collection("restaurant").updateOne(
      {
        RestaurantId: RestaurantId,
      },
      {
        $set: {
          address: Restaurant.address,
          Restaurant: Restaurant.Restaurant,
          Restaurant_dish: Restaurant.Restaurant_dish,
          location: Restaurant.location,
          FreeDeliveryonOrderDistance: Restaurant.FreeDeliveryonOrderDistance,
          FreeDeliveryonOrderAbove: Restaurant.FreeDeliveryonOrderAbove,
          rating: Restaurant.rating,
          ratingCount: Restaurant.ratingCount,
          time: Restaurant.time,
          phone_number: Restaurant.phone_number,
          opening_hours: Restaurant.opening_hours,
          price: Restaurant.price,
          pincode: Restaurant.pincode,
          image: Restaurant.image,
        },
      },
      (err, result) => {
        if (err) {
          console.log("Error updating offer:", err);
        } else {
          console.log("Offer updated successfully");
        }
      }
    );
    return result.modifiedCount;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
