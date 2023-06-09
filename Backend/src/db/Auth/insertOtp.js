const getDb = require("../db").getDb;

module.exports = insertOtp = async (number, otp) => {
  try {
    const connection = await getDb();
    const { insertedId } = await connection.collection("otps").insertOne(
      {
        number: number,
        otp: otp,
        createdAt: {
          type: Date,
          default: Date.now,
          index: { expires: "300s" },
        },
      },
      { timestamps: true }
    );
    return insertedId;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
