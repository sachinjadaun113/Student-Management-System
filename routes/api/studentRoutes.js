const express = require("express");
const router = express.Router();

const { createStudent } =require("../../controllers/studentController");
// Add Student
router.post("/", createStudent);

module.exports = router;