const extname = require("path").extname;
const uuid = require("uuid").v4;

module.exports = uploadPhotoRoute = async (file) => {
  const fileExtension = extname(file.name);
  const newFileName = uuid() + fileExtension;
  await file.mv("src/images/" + newFileName, (err) => {
    return "Error in Uploading Image!";
  });
  return "/" + newFileName;
};
