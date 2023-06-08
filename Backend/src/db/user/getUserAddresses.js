const getDb = require("../db").getDb;

module.exports = getUserAddresses = async (id) => {
  const connection = await getDb();
  const user = await connection.collection("users").findOne({ id });
  return user.addresses;
};
