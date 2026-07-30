const Attendance = require("../models/Attendance");
const Student = require("../models/Student");

// Attendance History

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

// Attendance by id 

exports.getStudentAttendanceSummary = async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        const attendance = await Attendance.find({

            student: req.params.id

        }).sort({

            date: -1

        });

        const present = attendance.filter(record =>

            record.status === "Present"

        ).length;

        const absent = attendance.filter(record =>

            record.status === "Absent"

        ).length;

        const total = attendance.length;

        const percentage =

            total === 0

            ? 0

            : ((present / total) * 100).toFixed(2);

        res.render("attendance/studentSummary", {

            student,

            attendance,

            present,

            absent,

            total,

            percentage

        });

    }

    catch (error) {

        console.log(error);

        res.redirect("/attendance/summary");

    }

};


// Attendance Summary

exports.getAttendanceSummary = async (req, res) => {

    try {

        const summary = await Attendance.aggregate([

            {
                $group: {

                    _id: "$student",

                    present: {
                        $sum: {
                            $cond: [
                                { $eq: ["$status", "Present"] },
                                1,
                                0
                            ]
                        }
                    },

                    absent: {
                        $sum: {
                            $cond: [
                                { $eq: ["$status", "Absent"] },
                                1,
                                0
                            ]
                        }
                    },

                    total: { $sum: 1 }

                }

            },

            {
                $lookup: {

                    from: "students",

                    localField: "_id",

                    foreignField: "_id",

                    as: "student"

                }

            },

            {
                $unwind: "$student"

            },

            {
                $addFields: {

                    percentage: {

                        $round: [

                            {
                                $multiply: [

                                    {
                                        $divide: [

                                            "$present",

                                            "$total"

                                        ]

                                    },

                                    100

                                ]

                            },

                            2

                        ]

                    }

                }

            },

            {
                $sort: {

                    "student.rollNumber": 1

                }

            }

        ]);

        res.render("attendance/summary", {

            summary

        });

    }

    catch (error) {

        console.log(error);

        res.redirect("/attendance");

    }

};


// Mark Attendance Page

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


// Save Attendance

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


// Edit Attendance

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


// Update Attendance

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


// Delete Attendance

exports.deleteAttendance = async (req, res) => {

    try {

        await Attendance.findByIdAndDelete(req.params.id);

        res.redirect("/attendance");

    } catch (error) {

        console.log(error);

        res.redirect("/attendance");

    }

};