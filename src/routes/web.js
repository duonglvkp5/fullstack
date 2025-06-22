const express = require("express");
const { handleHelloWord, handleUserPage } = require('../controller/homeController');

const router = express.Router();

router.get("/", handleHelloWord);
router.get("/user", handleUserPage);


module.exports = router;