const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../../middleware/authMiddleware");
const { dashboard } = require("../../controllers/dashboardController");
const { getAllStudents } = require("../../controllers/studentController");


// Login Page
router.get("/login", (req, res) => {
    res.render("auth/login");
});

// Dashboard
router.get("/", isAuthenticated, dashboard);

// Student List
router.get("/students", isAuthenticated, getAllStudents);

// Add Student
router.get("/students/add", isAuthenticated,(req, res) => {
    res.render("students/add");
});

// Edit Student
router.get("/students/edit/:id", isAuthenticated,(req, res) => {
    res.render("students/edit");
});

// Student Details
router.get("/students/:id", isAuthenticated,(req, res) => {
    res.render("students/details");
});

module.exports = router;