require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

//require routes
const studentRoutes = require("./routes/api/studentRoutes");
const pageRoutes = require("./routes/web/pageRoutes");

const app = express();

//setting ejs
app.set("view engine","ejs");

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//routes
app.use("/", pageRoutes);
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});