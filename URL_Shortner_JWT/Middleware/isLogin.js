const User = require("../Models/user_model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const isLogin=async(req,res,next)=>{
    const {token}=req.cookies;

    if(!token){
        res.redirect("user/login");
        return res.status(401).send({message:"Unauthorized Access"});
    }
    
    try{
        const verified=jwt.verify(token,process.env.secret_key);
        req.user=verified;
        next();
    }catch(err){
        return res.status(403).send({message:"Invalid Token"});
    }
}

module.exports={isLogin};
