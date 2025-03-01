const {Router}=require("express");
const blogRoutes=Router();
const blogController=require("../Controllers/blog_controller");
const uploadImage = require("../utils/upload_multer");

blogRoutes.get("/addblog",blogController.addBlogPage);
blogRoutes.get("/:id",blogController.getBlog);
blogRoutes.post("/addblog",uploadImage.single("coverImage"),blogController.createBlog);
blogRoutes.post("/comment/:blogId",blogController.comments);

module.exports=blogRoutes;