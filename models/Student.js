const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    phone:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    course:{
        type:String,
        required:true
    },

    // Academic Information

    rollNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    studentClass:{
        type:String,
        required:true
    },

    section:{
        type:String,
        required:true
    },

    admissionDate:{
        type:Date,
        required:true
    },

    academicYear:{
        type:String,
        required:true
    },

    parentName:{
        type:String,
        required:true
    },

    parentPhone:{
        type:String,
        required:true
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Student",studentSchema);