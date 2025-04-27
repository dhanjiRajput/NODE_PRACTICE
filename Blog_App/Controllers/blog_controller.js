const Blog = require("../Models/blog_model");
const Comment = require("../Models/comment_model");

exports.addBlogPage = async (req, res) => {
    res.render("AddBlog",{user: req.user});
};

exports.createBlog = async (req, res) => {
    const {title,content}=req.body;
    const blog=await Blog.create({
        title,
        content,
        createdBy: req.user.id,
        coverImage: `/uploads/${req.file.filename}`,
    })
    res.redirect(`/api/v1`);
};

exports.getBlog = async (req, res) => {
    const comment=await Comment.find({blogId: req.params.id}).populate("createdBy");
    const blog=await Blog.findById(req.params.id).populate("createdBy");
    res.render("BlogDetail",{blog,user: req.user,comment});
};

exports.comments=async (req, res) => {
    const {content}=req.body;
    const comment=await Comment.create({
        content,
        blogId: req.params.blogId,
        createdBy: req.user.id,
    });
    res.redirect(`/api/v1/blog/${req.params.blogId}`);
};