//file to just create username and password

require("dotenv").config();
const bcrypt = require("bcrypt");
const connectDB = require("../config/db");
const Admin = require("../models/Admin");

connectDB();

async function seedAdmin() {
  const username = "admin";
  const password = "admin123";

  const hashPassword = await bcrypt.hash(password, 10);

  await Admin.findOneAndUpdate(
    { username },
    { username, password: hashPassword },
    { upsert: true }
  );

  console.log("Admin Ready");
  console.log("Username : admin");
  console.log("Password : admin123");

  process.exit();
}

seedAdmin();