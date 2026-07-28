const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        courseName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        courseCode: {
            type: String,
            required: true,
            unique: true,
            uppercase: true
        },

        duration: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Course", courseSchema);