const express = require("express");
const router = express.Router();

const { isAuthenticated } = require("../../middleware/authMiddleware");

const {
    getAllAttendance,
    getAttendanceSummary,
    getStudentAttendanceSummary,
    showMarkAttendanceForm,
    markAttendance,
    showEditAttendanceForm,
    updateAttendance,
    deleteAttendance
} = require("../../controllers/attendanceWebController");

// Attendance History
router.get("/attendance", isAuthenticated, getAllAttendance);

// Attendance Summary
router.get("/attendance/summary", isAuthenticated, getAttendanceSummary);

// Attendanece page by id
router.get("/attendance/summary/:id", isAuthenticated, getStudentAttendanceSummary );

// Mark Attendance
router.get("/attendance/mark", isAuthenticated, showMarkAttendanceForm);
router.post("/attendance/mark", isAuthenticated, markAttendance);

// Edit Attendance
router.get("/attendance/edit/:id", isAuthenticated, showEditAttendanceForm);
router.post("/attendance/edit/:id", isAuthenticated, updateAttendance);

// Delete Attendance
router.get("/attendance/delete/:id", isAuthenticated, deleteAttendance);

module.exports = router;