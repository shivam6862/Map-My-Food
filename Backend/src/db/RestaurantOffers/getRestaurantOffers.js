const getDb = require("../db").getDb;

module.exports = getRestaurantOffers = async (id) => {
  const connection = await getDb();
  const offersData = await connection
    .collection("restaurantOffers")
    .find({ RestaurantId: id })
    .toArray();
  const offers = offersData.flatMap((obj) => obj.offers);
  const uniqueoffers = [
    ...new Map(offers.map((obj) => [JSON.stringify(obj), obj])).values(),
  ];
  return uniqueoffers;
};
