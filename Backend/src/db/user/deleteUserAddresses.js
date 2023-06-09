const getDb = require("../db").getDb;
const getUserAddresses = require("./getUserAddresses");

module.exports = deleteUserAddresses = async (address, id) => {
  try {
    const connection = await getDb();
    const { modifiedCount } = await connection.collection("users").updateOne(
      {
        id: id,
      },
      {
        $pull: {
          addresses: address,
        },
      },
      (err, result) => {
        if (err) {
          console.log("Error deleting offer:", err);
        } else {
          console.log("Offer deleted successfully");
        }
      }
    );
    const newAddresses = await getUserAddresses(id);
    return newAddresses;
  } catch (error) {
    console.log(error.message);
    throw error.message;
  }
};
