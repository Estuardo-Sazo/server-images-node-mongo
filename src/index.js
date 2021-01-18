const express = require("express");
const uuid = require("uuid");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");
const {format} = require('timeago.js');


// Inicializaciones
const app = express();
require('./database');


// Setting
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
//Conf img como se sube en donde y nombre
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/images/alerts/"),
  filename: (req, file, cb, filename) => {
    cb(null, uuid.v4() + path.extname(file.originalname));
  },
});
app.use(
  multer({
    storage: storage,
  }).single("image")
);

// Global Variables
app.use((req, res, next) =>{
  app.locals.format= format;
  next();
});

// Routes
app.use(require("./routes/index"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Start Server

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
