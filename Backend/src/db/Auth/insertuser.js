const getDb = require("../db").getDb;
const v4 = require("uuid").v4;

module.exports = insertsignup = async (number, name, email) => {
  try {
    const connection = await getDb();
    const id = v4();
    const { insertedId } = await connection.collection("users").insertOne({
      number,
      name,
      email,
      id,
      token: "",
      SmsPreferences: "true",
      addresses: [],
    });
    return id;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
