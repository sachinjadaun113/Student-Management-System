const express = require("express");
const router = express.Router();

// Dashboard
router.get("/", (req, res) => {
    res.render("dashboard");
});

// Login Page
router.get("/login", (req, res) => {
    res.render("auth/login");
});

// Student List
router.get("/students", (req, res) => {
    res.render("students/index");
});

// Add Student
router.get("/students/add", (req, res) => {
    res.render("students/add");
});

// Edit Student
router.get("/students/edit/:id", (req, res) => {
    res.render("students/edit");
});

// Student Details
router.get("/students/:id", (req, res) => {
    res.render("students/details");
});

module.exports = router;