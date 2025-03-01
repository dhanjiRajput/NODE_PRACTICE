const mongoose = require('mongoose');

const blogSchema=new mongoose.Schema({
    title:String,
    content:String,
    coverImage:String,
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
},{timestamps:true});

const Blog=mongoose.model('Blog',blogSchema);

module.exports=Blog;