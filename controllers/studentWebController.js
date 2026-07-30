const Student = require("../models/Student");
const Course = require("../models/Course");
const Attendance = require("../models/Attendance");


// to get all student list
exports.getAllStudents = async (req, res) => {
    try {

        const students = await Student.find().sort({ rollNumber: 1 });

        res.render("students/index", {
            students
        });

    } catch (error) {

        console.log(error);
        res.redirect("/");

    }
};

// to get add form
exports.showAddStudentForm = async (req, res) => {

    try {

        const courses = await Course.find();

        res.render("students/add", {
            courses
        });

    } catch (error) {

        console.log(error);
        res.redirect("/students");

    }

};

// to add or create student
exports.createStudentWeb = async (req, res) => {

    try {

        await Student.create(req.body);

        res.redirect("/students");

    } catch (error) {

        console.log(error);

        res.redirect("/students/add");

    }
};

// to render edit student form
exports.showEditStudentForm = async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        const courses = await Course.find();

        res.render("students/edit", {
            student,
            courses
        });

    } catch (error) {

        console.log(error);
        res.redirect("/students");

    }

};

// to update student
exports.updateStudentWeb = async (req, res) => {

    try {

        await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.redirect("/students");

    } catch (error) {

        console.log(error);

        res.redirect("/students");

    }

};

// to see student details
exports.studentDetails = async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        if (!student) {

            return res.redirect("/students");

        }

        const present = await Attendance.countDocuments({

            student: student._id,
            status: "Present"

        });

        const absent = await Attendance.countDocuments({

            student: student._id,
            status: "Absent"

        });

        const total = present + absent;

        const percentage = total === 0
            ? 0
            : ((present / total) * 100).toFixed(2);

        res.render("students/details", {

            student,
            present,
            absent,
            total,
            percentage

        });

    } catch (error) {

        console.log(error);

        res.redirect("/students");

    }

};

// to delete a student
exports.deleteStudentWeb = async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.redirect("/students");

    } catch (error) {

        console.log(error);

        res.redirect("/students");

    }

};