const getDb = require("../db").getDb;

module.exports = getUsers = async (number) => {
  const connection = await getDb();
  const response = await connection
    .collection("users")
    .findOne({ number: number });
  return response;
};
