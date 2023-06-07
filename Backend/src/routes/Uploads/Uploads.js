const extname = require("path").extname;
const uuid = require("uuid").v4;

module.exports = uploadPhotoRoute = (file) => {
  const fileExtension = extname(file.name);
  const newFileName = uuid() + fileExtension;
  file.mv("src/images/" + newFileName, (err) => {
    res.status(200).json({ message: "Upload Successful !" });
  });
  return "/" + newFileName;
};
