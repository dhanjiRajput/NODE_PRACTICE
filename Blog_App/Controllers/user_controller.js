const User = require("../Models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.loginPage = async (req, res) => {
    res.render("Login");
};

exports.signupPage = async (req, res) => {
    res.render("Signup");
};

exports.signup = async (req, res) => {
    
    try {
        let { email, password } = req.body;

        let isExist = await User.findOne({ email });
        if (isExist) {
            return res.render("Signup",{error: "User Already Registered Try Another Email.."});
        }

        let hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;

        let user = await User.create(req.body);

        let token = jwt.sign(
            { id: user._id, username: user.username,role:user.role },
            process.env.key
        );

        res.cookie("token", token, {
            httpOnly: true
        });

        res.redirect("http://localhost:8090/api/v1");
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.render("Login",{error: "User Not Found"});
        }

        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render("Login",{error: "Incorrect Username or Password"});
        }

        let token = jwt.sign(
            { id: user._id, username: user.username,role: user.role},
            process.env.key
        );

        res.cookie("token", token, {
            httpOnly: true
        });

        res.redirect("http://localhost:8090/api/v1");
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("http://localhost:8090/api/v1");
};
