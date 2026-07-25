const express = require("express");
const router = express.Router();

const { login, logout } = require("../../controllers/authController");

// Login
router.post("/login", login);

// Logout
router.get("/logout", logout);

module.exports = router;