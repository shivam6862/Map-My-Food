const getDb = require("../db").getDb;

module.exports = async function updateUser(number, token) {
  try {
    const connection = await getDb();
    const collection = connection.collection("users");
    const user = await collection.findOne({ number: number });
    const filter = { _id: user._id };
    const update = { $set: { token: token } };
    const result = await collection.updateOne(filter, update);
    return user;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
