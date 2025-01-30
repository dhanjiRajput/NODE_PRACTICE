const User = require("../Models/user_model");
const jwt = require("jsonwebtoken");    
require("dotenv").config();

const getSignupPage=async(req,res)=>{
    res.render('signup');
};

const getLoginPage=async(req,res)=>{
    res.render('login');
};

const userSignup=async(req,res)=>{
    const {username,password,email} = req.body;
    const existingUser=await User.findOne({email:email});

    if(existingUser){
        return res.status(404).send({message:"User Exist Already"});
    }else{
        const user=await User.create(req.body);
        const token=await jwt.sign({
            id: user._id,
            username: user.username,
            email: user.email,
        },process.env.secret_key);
        res.cookie("token",token);
        return res.render("Home");
    }
};

const userLogin=async(req,res)=>{
    const {email,password} = req.body;
    const isexist=await User.findOne({email:email});

    if(!isexist){
        return res.status(404).send({message:"User Not Found"});
    }
    else if(isexist.password!==password){
        return res.status(401).send({message:"Invalid Password"});
    }
    const token=await jwt.sign({
        id: isexist._id,
        username: isexist.username,
        email: isexist.email
    },process.env.secret_key);
    res.cookie("token",token);
    return res.render("Home");
};

module.exports={getSignupPage, userSignup, getLoginPage,userLogin};