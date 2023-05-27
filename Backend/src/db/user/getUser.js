const getDb = require("../db").getDb;

module.exports = getUser = async (id) => {
  const connection = await getDb();
  const user = await connection.collection("users").findOne({ _id: id });
  return user;
};
