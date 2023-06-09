const extname = require("path").extname;
const uuid = require("uuid").v4;

module.exports = uploadPhotoRoute = async (file) => {
  try {
    const fileExtension = extname(file.name);
    const newFileName = uuid() + fileExtension;
    await file.mv("src/images/" + newFileName, (err) => {
      return "Error in Uploading Image!";
    });
    return "/" + newFileName;
  } catch (err) {
    console.log(err.message);
    return "Error in Uploading Image!";
  }
};
