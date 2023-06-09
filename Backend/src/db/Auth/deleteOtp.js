const getDb = require("../db").getDb;

module.exports = deleteOtp = async (number) => {
  try {
    const connection = await getDb();
    const response = await connection
      .collection("otps")
      .deleteMany({ number: number });
    return response;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
