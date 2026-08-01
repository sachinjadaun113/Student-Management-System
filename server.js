require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

//require routes

// for check api
const studentRoutes = require("./routes/api/studentRoutes");
const courseRoutes = require("./routes/api/courseRoutes");
const attendanceRoutes = require("./routes/api/attendanceRoutes");
// for web pages
const pageRoutes = require("./routes/web/pageRoutes");
const authRoutes = require("./routes/web/authRoutes");
const courseWebRoutes = require("./routes/web/courseRoutes");
const attendanceWebRoutes = require("./routes/web/attendanceRoutes");


const app = express();

const session = require("express-session");

//setting ejs
app.set("view engine","ejs");

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// for using session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//routes
app.use("/", authRoutes);
app.use("/", pageRoutes);
app.use("/", courseWebRoutes);
app.use("/", attendanceWebRoutes);

// to check db opr
app.use("/api/students", studentRoutes);
// to check course api
app.use("/api/courses", courseRoutes);
// to check attendance 
app.use("/api/attendance", attendanceRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});