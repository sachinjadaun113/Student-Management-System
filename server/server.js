const express = require("express");

const app = express();

const port = 5000;

app.get("/",(req,res) => {
    res.send("Student Management System Backend Running 🚀");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});