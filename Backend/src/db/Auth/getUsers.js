const getDb = require("../db").getDb;

module.exports = getUsers = async (number) => {
  try {
    const connection = await getDb();
    const response = await connection
      .collection("users")
      .findOne({ number: number });
    return response;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
