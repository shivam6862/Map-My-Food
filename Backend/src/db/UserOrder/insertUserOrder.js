const getDb = require("../db").getDb;
const v4 = require("uuid").v4;

module.exports = insertUserOrder = async (userId, order) => {
  const connection = await getDb();
  const orderId = v4();
  const { insertId } = await connection
    .collection("orders")
    .insertOne({ userId, order, orderId });
  return orderId;
};
