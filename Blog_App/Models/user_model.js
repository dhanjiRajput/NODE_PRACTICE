const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    role:{type:String,enum:["ADMIN","USER"],default:"USER"},
    profile:{type:String, default:"/Images/profile.png"}
},{timestamps:true});

const User=mongoose.model('User',userSchema);
module.exports=User;