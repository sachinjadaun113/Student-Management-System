const Course = require("../models/Course");

// Show All Courses
exports.getAllCourses = async (req, res) => {

    try {

        const courses = await Course.find();

        res.render("courses/index", {
            courses
        });

    } catch (error) {

        console.log(error);

        res.redirect("/");

    }

};

// Show Add Course Page
exports.showAddCourseForm = (req, res) => {

    res.render("courses/add");

};

// Create Course
exports.createCourseWeb = async (req, res) => {

    try {

        await Course.create(req.body);

        res.redirect("/courses");

    } catch (error) {

        console.log(error);

        res.redirect("/courses/add");

    }

};

// Show Edit Page
exports.showEditCourseForm = async (req, res) => {

    try {

        const course = await Course.findById(req.params.id);

        res.render("courses/edit", {
            course
        });

    } catch (error) {

        console.log(error);

        res.redirect("/courses");

    }

};

// Update Course
exports.updateCourseWeb = async (req, res) => {

    try {

        await Course.findByIdAndUpdate(req.params.id, req.body);

        res.redirect("/courses");

    } catch (error) {

        console.log(error);

        res.redirect("/courses");

    }

};

// Delete Course
exports.deleteCourseWeb = async (req, res) => {

    try {

        await Course.findByIdAndDelete(req.params.id);

        res.redirect("/courses");

    } catch (error) {

        console.log(error);

        res.redirect("/courses");

    }

};