require("dotenv").config();
const express = require("express");
const router = express.Router();

const request = require("request");
const mongoose = require("mongoose");
const passport = require("passport");
const axios = require("axios");

const app = express();

app.use(express.urlencoded({ extended: true }));
const config = require("./config/config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
const mongoDbConnection = require("./database/db_config");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { Mongoose } = require("mongoose");

//include routes files.
require("./routes/web")(app);


app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});

