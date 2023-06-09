const getDb = require("../db").getDb;
const getUserAddresses = require("./getUserAddresses");

module.exports = insertUserAddresses = async (id, address) => {
  try {
    const connection = await getDb();
    const addresses = Array.isArray(address) ? address : [address];
    const result = await connection
      .collection("users")
      .updateOne({ id }, { $push: { addresses: { $each: addresses } } });
    const Alladdress = await getUserAddresses(id);
    return Alladdress;
  } catch (err) {
    console.log(err.message);
    throw err.message;
  }
};
