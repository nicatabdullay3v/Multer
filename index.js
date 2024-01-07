const express = require("express");
const app = express();
const multer = require("multer")
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const router = require("./src/routers/roots")
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  },
});
const arr = []
const upload = multer({ storage: storage });
app.post('/upload', upload.single("file"), (req, res) => {
  res.send('File uploaded successfully');
  console.log(req.file)
  const newUser = {
    title: "sasads",
    profilePicture: req.file.path
  }
  arr.push(newUser)
});
require("dotenv").config();
app.use("/", router)
const dbConnect = require("./src/config/db");
dbConnect();
app.use("/uploads", express.static("uploads"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
