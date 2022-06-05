const express = require("express");
const router = express.Router();
const OptionsController = require('../app/controllers/OptionsController');

const multer = require("multer");
const upload = multer();

router.post("/options/create", upload.none(), OptionsController.create);
// router.post("/options/create", (req, res) => {
//   return res.send("Catalog option create");
//    return res.send(req.body);
//     // return res.json({
//     //   status: 200,
//     //   msg: "Manufacturer create successfully",
//     //   response: req.body,
//     // });

// });

module.exports = router;
