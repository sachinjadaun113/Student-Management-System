const express = require("express");
const router = express.Router();

const { isAuthenticated } = require("../../middleware/authMiddleware");

const {
    getAllCourses,
    showAddCourseForm,
    createCourseWeb,
    showEditCourseForm,
    updateCourseWeb,
    deleteCourseWeb
} = require("../../controllers/courseWebController");

// Show All Courses
router.get("/courses", isAuthenticated, getAllCourses);

// Add Course
router.get("/courses/add", isAuthenticated, showAddCourseForm);
router.post("/courses/add", isAuthenticated, createCourseWeb);

// Edit Course
router.get("/courses/edit/:id", isAuthenticated, showEditCourseForm);
router.post("/courses/edit/:id", isAuthenticated, updateCourseWeb);

// Delete Course
router.get("/courses/delete/:id", isAuthenticated, deleteCourseWeb);

module.exports = router;