const Student = require("../models/Student");
const Course = require("../models/Course");


exports.dashboard = async (req, res) => {

    try {

        const totalStudents = await Student.countDocuments();

        const totalCourses = await Course.countDocuments();

        const today = new Date();

        res.render("dashboard", {
            totalStudents,
            totalCourses,
            today
        });

    } catch (error) {

        console.log(error);
        res.redirect("/");

    }

};