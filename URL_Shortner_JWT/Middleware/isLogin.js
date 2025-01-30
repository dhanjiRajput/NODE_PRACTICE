const User = require("../Models/user_model");

const isLogin=async(req,res,next)=>{
    const {userId}=req.cookies;
    
    if(!userId){
        return res.redirect("/user/login");
    }else{
        const user=await User.findById(userId);
        req.user=user
        next();
    }
}

module.exports={isLogin};