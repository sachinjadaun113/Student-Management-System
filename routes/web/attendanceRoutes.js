const express = require("express");
const router = express.Router();

const { isAuthenticated } = require("../../middleware/authMiddleware");

const {
    getAllAttendance,
    showMarkAttendanceForm,
    markAttendance,
    showEditAttendanceForm,
    updateAttendance,
    deleteAttendance
} = require("../../controllers/attendanceWebController");

// Attendance History
router.get("/attendance", isAuthenticated, getAllAttendance);

// Mark Attendance
router.get("/attendance/mark", isAuthenticated, showMarkAttendanceForm);
router.post("/attendance/mark", isAuthenticated, markAttendance);

// Edit Attendance
router.get("/attendance/edit/:id", isAuthenticated, showEditAttendanceForm);
router.post("/attendance/edit/:id", isAuthenticated, updateAttendance);

// Delete Attendance
router.get("/attendance/delete/:id", isAuthenticated, deleteAttendance);

module.exports = router;