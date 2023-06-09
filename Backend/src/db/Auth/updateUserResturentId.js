const getDb = require("../db").getDb;

module.exports = async function updateUserResturentId(id, ResturentId) {
  try {
    const connection = await getDb();
    const collection = connection.collection("users");
    const user = await collection.findOne({ id: id });
    const filter = { _id: user._id };
    const update = { $set: { ResturentId: ResturentId } };
    const result = await collection.updateOne(filter, update);
    const userUpdate = await collection.findOne({ id: id });
    return userUpdate;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
