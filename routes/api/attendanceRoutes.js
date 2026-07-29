const express = require("express");
const router = express.Router();

const {

    createAttendance,
    getAllAttendance,
    getAttendanceById,
    updateAttendance,
    deleteAttendance

} = require("../../controllers/attendanceController");

router
    .route("/")
    .get(getAllAttendance)
    .post(createAttendance);

router
    .route("/:id")
    .get(getAttendanceById)
    .put(updateAttendance)
    .delete(deleteAttendance);

module.exports = router;