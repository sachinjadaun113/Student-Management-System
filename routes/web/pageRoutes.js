const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../../middleware/authMiddleware");
const { dashboard } = require("../../controllers/dashboardController");
const {
  getAllStudents,
  createStudentWeb,
  showAddStudentForm,
  showEditStudentForm,
  updateStudentWeb,
  deleteStudentWeb,
  studentDetails
} = require("../../controllers/studentWebController");


// Login Page
router.get("/login", (req, res) => {
    res.render("auth/login");
});

// Dashboard
router.get("/", isAuthenticated, dashboard);

// Student List
router.get("/students", isAuthenticated, getAllStudents);

// Add Student Form
router.get("/students/add", isAuthenticated, showAddStudentForm);

// Add student in DB
router.post("/students/add", isAuthenticated, createStudentWeb);

// Edit Student Form
router.get("/students/edit/:id", isAuthenticated, showEditStudentForm);

// to reflect updates in db
router.post("/students/edit/:id", isAuthenticated, updateStudentWeb);

// Student Details
router.get("/students/:id", isAuthenticated, studentDetails);

// To delete
router.get("/students/delete/:id", isAuthenticated, deleteStudentWeb);

module.exports = router;