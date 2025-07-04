const express = require("express");
const { testApi, handleRegister, handleLogin } = require("../controller/apiController");
const { readFunc, createFunc, updateFunc, deleteFunc } = require("../controller/userController");
const { readFuncGroup } = require("../controller/groupController");

const router = express.Router();

router.get("/test-api", testApi);
router.post("/register", handleRegister);
router.post("/login", handleLogin);

router.get("/user/read", readFunc);
router.post("/user/create", createFunc);
router.put("/user/update", updateFunc);
router.delete("/user/delete", deleteFunc);

router.get("/group/read", readFuncGroup);


module.exports = router;