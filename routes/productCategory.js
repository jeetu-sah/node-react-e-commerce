const express = require("express");
const router = express.Router();


router.get("/list", (req , res) => {
  return res.send("Got a POST request");
  // return res.send("All Products getiing");
});

module.exports = router;

