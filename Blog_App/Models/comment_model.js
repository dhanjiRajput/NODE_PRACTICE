const mongoose = require('mongoose');

const commentSchema=new mongoose.Schema({
    content:String,
    blogId:{type:mongoose.Schema.Types.ObjectId,ref:"Blog"},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
},{timestamps:true});

const Comment=mongoose.model('Comment',commentSchema);
module.exports = Comment;