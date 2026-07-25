const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

// Login
exports.login = async (req, res) => {

    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if (!admin) {
        return res.send("Invalid Username");
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
        return res.send("Invalid Password");
    }

    req.session.admin = admin;

    res.redirect("/");

};

// Logout
exports.logout = (req, res) => {

    req.session.destroy();

    res.redirect("/login");

};