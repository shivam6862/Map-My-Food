const getDb = require("../db").getDb;

module.exports = updateRestaurantFood = async (itemId, food) => {
  const connection = await getDb();
  const { modifiedCount } = await connection
    .collection("restaurantFood")
    .updateOne(
      {
        "food.itemId": itemId,
      },
      {
        $set: {
          "food.$.star": food.star,
          "food.$.name": food.name,
          "food.$.price": food.price,
          "food.$.description": food.description,
          "food.$.Dtime": food.Dtime,
          "food.$.veg": food.veg,
          "food.$.category": food.category,
          "food.$.timeRequired": food.timeRequired,
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
  return modifiedCount;
};
