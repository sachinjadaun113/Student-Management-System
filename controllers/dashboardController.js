const Student = require("../models/Student");

exports.dashboard = async (req, res) => {

    const totalStudents = await Student.countDocuments();

    res.render("dashboard", {
        totalStudents
    });

};
