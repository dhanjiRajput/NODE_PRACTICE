const {Router}=require("express");
const userRoutes = require("./user_route");
const blogRoutes = require("./blog_route");
const indexRoutes=Router();

indexRoutes.use("/user",userRoutes);
indexRoutes.use("/blog",blogRoutes);

module.exports=indexRoutes;