const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.serverRunning);
router.get("/user", userController.verifyJWT, userController.getUserInfo);
router.post("/login", userController.loginUser);
router.post("/user", userController.createUser);

module.exports = router;
