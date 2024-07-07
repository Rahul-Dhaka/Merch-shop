const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { signUpController, loginController, getMe } = require("../Controller/userController");



router.post( "/signup", signUpController);
router.post("/login", loginController);
router.get("/me", auth, getMe);

module.exports = router;