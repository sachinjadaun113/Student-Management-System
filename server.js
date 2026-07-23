require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/api/studentRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/students", studentRoutes);

// Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Student Management System API is Running"
  });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});