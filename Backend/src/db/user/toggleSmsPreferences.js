const getDb = require("../db").getDb;

module.exports = async function toggleSmsPreferences(id) {
  try {
    var prev = "";
    const connection = await getDb();
    const collection = connection.collection("users");
    const user = await collection.findOne({ id: id });
    if (user.SmsPreferences == "true") {
      prev = "false";
    } else {
      prev = "true";
    }
    const filter = { _id: user._id };
    const update = { $set: { SmsPreferences: prev } };
    const result = await collection.updateOne(filter, update);
    return prev;
  } catch (err) {
    console.log(err.message);
    throw "";
  }
};
