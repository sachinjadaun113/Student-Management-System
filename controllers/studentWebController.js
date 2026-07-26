const Student = require("../models/Student");

// to get all student list
exports.getAllStudents = async (req, res) => {
    try {

        const students = await Student.find();

        res.render("students/index", {
            students
        });

    } catch (error) {

        console.log(error);
        res.redirect("/");

    }
};

// to get add form
exports.showAddStudentForm = (req, res) => {

    res.render("students/add");

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

        res.render("students/edit", {
            student
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

        res.render("students/details", {
            student
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