const getDb = require("../db").getDb;

module.exports = updateRestaurantOffers = async (offerId, offer) => {
  try {
    const connection = await getDb();
    const { modifiedCount } = await connection
      .collection("restaurantOffers")
      .updateOne(
        {
          "offers.offerId": offerId,
        },
        {
          $set: {
            "offers.$.percentage": offer.percentage,
            "offers.$.above": offer.above,
            "offers.$.image": offer.image,
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
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
