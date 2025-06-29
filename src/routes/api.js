const express = require("express");
const { testApi, handleRegister, handleLogin } = require("../controller/apiController");

const router = express.Router();

router.get("/test-api", testApi);
router.post("/register", handleRegister);
router.post("/login", handleLogin);

module.exports = router;