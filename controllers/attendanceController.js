const Attendance = require("../models/Attendance");

// Create Attendance
exports.createAttendance = async (req, res) => {

    try {

        const attendance = await Attendance.create(req.body);

        res.status(201).json({
            success: true,
            data: attendance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get All Attendance
exports.getAllAttendance = async (req, res) => {

    try {

        const attendance = await Attendance.find()
            .populate("student");

        res.status(200).json({
            success: true,
            count: attendance.length,
            data: attendance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Attendance By ID
exports.getAttendanceById = async (req, res) => {

    try {

        const attendance = await Attendance.findById(req.params.id)
            .populate("student");

        res.status(200).json({
            success: true,
            data: attendance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Attendance
exports.updateAttendance = async (req, res) => {

    try {

        const attendance = await Attendance.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        res.status(200).json({
            success: true,
            data: attendance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Attendance
exports.deleteAttendance = async (req, res) => {

    try {

        await Attendance.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Attendance deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};