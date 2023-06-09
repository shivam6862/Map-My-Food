const getDb = require("../db").getDb;

module.exports = getSearch = async (search) => {
  try {
    const connection = await getDb();
    const data = await connection.collection("smallSearch").find().toArray();
    const newSearchItemData = data.filter((obj) =>
      Object.keys(obj).some((key) =>
        key.trim().toLowerCase().includes(search.trim().toLowerCase())
      )
    );
    return newSearchItemData;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
