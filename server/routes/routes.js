const express = require('express');
const router = express.Router();
const API = require("../controllers/api");
const multier = require("multer");

// multer middleware
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer ({
    storage: storage,
}).single("image");

/*
router.get('/', (req, res) => {
    res.send("Hello World!");
});
*/

router.get('/', API.fetchAllPost);
router.get('/:id', API.fetchPostByID);
router.post('/', upload, API.createPost);
router.patch('/', API.updatePost);
router.delete('/', API.deletePost);

module.exports = router;
