const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", require("./routes/postRoutes"));

//database and server

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL, () => {
  console.log("Database connected");
});
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
