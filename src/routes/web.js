const express = require("express");
const { handleHelloWord, handleUserPage, handleCreateNewUser,
    handleDeleteUser, handleUpdateUser, getUpdateUser } = require("../controller/homeController");
const { testApi } = require("../controller/apiController");

const router = express.Router();

router.get("/", handleHelloWord);
router.get("/user", handleUserPage);
router.post("/users/create-user", handleCreateNewUser);
router.post("/delete-user/:id", handleDeleteUser);
router.get("/update-user/:id", getUpdateUser);
router.post("/user/update-user/", handleUpdateUser);

router.get("/api/test-api", testApi);
module.exports = router;