const getDb = require("../db").getDb;

module.exports = deleteRestaurantFood = async (itemId) => {
  const connection = await getDb();
  const { modifiedCount } = await connection
    .collection("restaurantFood")
    .updateOne(
      {
        "food.itemId": itemId,
      },
      {
        $pull: {
          food: { itemId: itemId },
        },
      },
      (err, result) => {
        if (err) {
          console.log("Error deleting offer:", err);
        } else {
          console.log("Offer deleted successfully");
        }
      }
    );
  return modifiedCount;
};
