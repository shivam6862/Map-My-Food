const getDb = require("../db").getDb;

module.exports = deleteOtp = async (number) => {
  const connection = await getDb();
  const response = await connection
    .collection("otps")
    .deleteMany({ number: number });
  return response;
};
