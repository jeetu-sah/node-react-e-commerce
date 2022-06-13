const express = require("express");
const router = express.Router();
const OptionsController = require("../app/controllers/OptionsController");
const CategoryController = require("../app/controllers/CategoryController");

const multer = require("multer");

const categoryStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/uploads/category");
    },
    filename: function (req, file, callback) {
        callback(null, Date.now()+file.originalname);
    },
});
const upload = multer({ storage: categoryStorage});

/*category routing start*/
router.post("/category/create",upload.single("category_files"),CategoryController.create);
router.get("/category/list", CategoryController.list);

/*category routing End*/

/*option routing start*/

router.post("/options/create", upload.none(), OptionsController.create);

/*option routing End*/

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
