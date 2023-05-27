const getDb = require("../db").getDb;

module.exports = insertUser = async (email, name, number) => {
  const connection = await getDb();
  const { insertedId } = await connection
    .collection("users")
    .insertOne({ email: email, name: name, number: number });
  return insertedId;
};
