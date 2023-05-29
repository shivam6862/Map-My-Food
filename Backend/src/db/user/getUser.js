const getDb = require("../db").getDb;
const ObjectId = require("mongodb").ObjectId;

module.exports = getUser = async (id) => {
  const connection = await getDb();
  const user = await connection
    .collection("users")
    .findOne({ _id: new ObjectId(id) });
  return user;
};
