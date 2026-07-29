const Attendance = require("../models/Attendance");
const Student = require("../models/Student");

// ======================================
// Show Attendance History
// ======================================

exports.getAllAttendance = async (req, res) => {

    try {

        let attendance = await Attendance.find()
            .populate("student")
            .sort({ date: -1 });

        attendance.sort((a, b) => {

            const dateDiff = new Date(b.date) - new Date(a.date);

            if (dateDiff !== 0) {

                return dateDiff;

            }

            return a.student.rollNumber - b.student.rollNumber;

        });

        res.render("attendance/index", {

            attendance

        });

    } catch (error) {

        console.log(error);

        res.redirect("/");

    }

};

// ======================================
// Show Mark Attendance Page
// ======================================

exports.showMarkAttendanceForm = async (req, res) => {

    try {

        const students = await Student.find()
            .sort({ rollNumber: 1 });

        res.render("attendance/mark", {

            students

        });

    } catch (error) {

        console.log(error);

        res.redirect("/attendance");

    }

};

// ======================================
// Save Daily Attendance
// ======================================

exports.markAttendance = async (req, res) => {

    try {

        const { date } = req.body;

        const students = req.body.student;

        for (const studentId of students) {

            const status = req.body[`status_${studentId}`];

            const alreadyMarked = await Attendance.findOne({

                student: studentId,
                date

            });

            if (!alreadyMarked) {

                await Attendance.create({

                    student: studentId,
                    date,
                    status

                });

            }

        }

        res.redirect("/attendance");

    } catch (error) {

        console.log(error);

        res.redirect("/attendance/mark");

    }

};

// ======================================
// Show Edit Attendance
// ======================================

exports.showEditAttendanceForm = async (req, res) => {

    try {

        const attendance = await Attendance.findById(req.params.id);

        const students = await Student.find()
            .sort({ rollNumber: 1 });

        res.render("attendance/edit", {

            attendance,
            students

        });

    } catch (error) {

        console.log(error);

        res.redirect("/attendance");

    }

};

// ======================================
// Update Attendance
// ======================================

exports.updateAttendance = async (req, res) => {

    try {

        await Attendance.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                runValidators: true

            }

        );

        res.redirect("/attendance");

    } catch (error) {

        console.log(error);

        res.redirect("/attendance");

    }

};

// ======================================
// Delete Attendance
// ======================================

exports.deleteAttendance = async (req, res) => {

    try {

        await Attendance.findByIdAndDelete(req.params.id);

        res.redirect("/attendance");

    } catch (error) {

        console.log(error);

        res.redirect("/attendance");

    }

};