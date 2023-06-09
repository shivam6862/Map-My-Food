const getDb = require("../db").getDb;

module.exports = getPaymentOffers = async (pincode) => {
  try {
    const connection = await getDb();
    const offers = await connection
      .collection("PaymentOffers")
      .find({ pincode: pincode })
      .toArray();
    return offers;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
