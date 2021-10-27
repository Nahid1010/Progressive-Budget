//  express and mongoose
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;
const app = express();





app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });