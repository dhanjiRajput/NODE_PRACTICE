require("dotenv").config();
const express=require('express');
const dbconnect = require('./Config/db');
const app=express();
const path = require('path');
const cors=require('cors');
const indexRoutes = require('./Routes/index_route');
const cookie=require("cookie-parser");
const decodeToken = require('./Middleware/decode');
const Blog = require('./Models/blog_model');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookie());

app.set("view engine","ejs");
app.set("Views",path.join(__dirname,"Views"));
app.use(express.static(path.join(__dirname, "Public")));

app.use('/uploads', express.static('uploads'));
app.use('/Images', express.static('Images'));

app.use("/api/v1",decodeToken,indexRoutes);
app.get("/api/v1",decodeToken,async(req,res)=>{
    const blog=await Blog.find({});
    res.render("Home",{user:req.user,blog:blog});
});

const PORT=process.env.PORT ||8090;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    dbconnect();
});