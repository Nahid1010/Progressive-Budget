// dotenv for DB connection
require('dotenv').config();

//  express and mongoose
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// app definition
const PORT = process.env.PORT || 3000;
const app = express();

// middleware
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// DB connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// api routes
app.use(require("./routes/api.js"));

// start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});