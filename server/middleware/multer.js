const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
     destination: function (req,file,callback){
        callback(null, path.join( __dirname, "../public"));
     },
    filename: function (req,file,callback) {
        callback(null, file.originalname);
    }
})

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

const uploadMulter = multer({
  storage: storage,
  /* limits: {
    fileSize: 1024 * 1024,
  }, */
  // fileFilter: fileFilter,
});

module.exports = uploadMulter;
