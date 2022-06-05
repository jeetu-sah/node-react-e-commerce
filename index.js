require("dotenv").config();
const express = require("express");
var cors = require("cors");
var logger = require("morgan");

const router = express.Router();

const request = require("request");
const mongoose = require("mongoose");
const axios = require("axios");
var bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { Mongoose } = require("mongoose");

const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const config = require("./config/config");



//init passport
//app.set('trust proxy', 1) 
app.use(
  session({
    secret: "93d6232e078ed9ed0a2004f4e64b36d77e55d188",
    resave: true,
    saveUninitialized: false,
    rolling: true,
    cookie: { secure: false },
    //cookie: { maxAge: 60 * 60 * 1000 },
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/node_store" }),
  })
);

const passport = require("passport");
var jwt = require("jsonwebtoken");
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(logger("dev"));
app.use(cors());

//database connection
const mongoDbConnection = require("./database/db_config");

//include routes files.
require("./routes/web")(app);
//load routes file
//const productcategory = require('./routes/productCategory');
//app.use("/product_category", productcategory);


app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});

