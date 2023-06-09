const getDb = require("../db").getDb;

module.exports = getUserOrder = async (userId) => {
  try {
    const connection = await getDb();
    const order = await connection
      .collection("orders")
      .find({ userId })
      .toArray();
    return order;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
