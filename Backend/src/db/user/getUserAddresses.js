const getDb = require("../db").getDb;

module.exports = getUserAddresses = async (id) => {
  try {
    const connection = await getDb();
    const user = await connection.collection("users").findOne({ id });
    return user.addresses;
  } catch (err) {
    console.log(err.message);
    throw err.message;
  }
};
