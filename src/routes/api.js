const express = require("express");
const { testApi, handleRegister } = require("../controller/apiController");

const router = express.Router();

router.get("/test-api", testApi);
router.post("/register", handleRegister);

module.exports = router;