const User = require("../Models/user_model");

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
        alert("User already exists");
    }else{
        const user=await User.create(req.body);
        return res.render("Home");
    }
};

const userLogin=async(req,res)=>{
    const {email,password} = req.body;
    const isexist=await User.findOne({email:email});

    if(!isexist){
        return res.status(404).send({message:"User Not Founfied"});
    }
    else if(isexist.password!==password){
        return res.status(401).send({message:"Invalid Password"});
    }else{
        res.render("Home");
    }
};

module.exports={getSignupPage, userSignup, getLoginPage,userLogin};
