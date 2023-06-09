const getDb = require("../db").getDb;

module.exports = updateProfile = async (id, place, newdata) => {
  try {
    const connection = await getDb();
    var result = "";
    if (place == "number") {
      result = await connection.collection("users").updateOne(
        {
          id: id,
        },
        {
          $set: {
            number: newdata,
          },
        },
        (err, result) => {
          if (err) {
            console.log("Error updating offer:", err);
          } else {
            console.log("Offer updated successfully");
          }
        }
      );
    } else if (place == "email") {
      result = await connection.collection("users").updateOne(
        {
          id: id,
        },
        {
          $set: {
            email: newdata,
          },
        },
        (err, result) => {
          if (err) {
            console.log("Error updating offer:", err);
          } else {
            console.log("Offer updated successfully");
          }
        }
      );
    }
    return result.modifiedCount;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
