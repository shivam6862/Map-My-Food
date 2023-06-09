const getDb = require("../db").getDb;

module.exports = deleteRestaurantOffers = async (offerId) => {
  try {
    const connection = await getDb();
    const { modifiedCount } = await connection
      .collection("restaurantOffers")
      .updateOne(
        {
          "offers.offerId": offerId,
        },
        {
          $pull: {
            offers: { offerId: offerId },
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
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
