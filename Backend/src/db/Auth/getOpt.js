const getDb = require("../db").getDb;

module.exports = getOpt = async (number) => {
  const connection = await getDb();
  const response = await connection
    .collection("otps")
    .find({ number: number })
    .toArray();
  return response;
};
