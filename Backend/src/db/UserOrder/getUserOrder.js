const getDb = require("../db").getDb;

module.exports = getUserOrder = async (userId) => {
  const connection = await getDb();
  const order = await connection
    .collection("orders")
    .find({ userId })
    .toArray();
  return order;
};
