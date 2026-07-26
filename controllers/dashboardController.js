const Student = require("../models/Student");

exports.dashboard = async (req, res) => {

    try {

        const totalStudents = await Student.countDocuments();

        const totalCourses = (await Student.distinct("course")).length;

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