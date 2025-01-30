const express = require('express');
const dbconnect = require('./Config/db');
const urlRouter = require('./Routes/url_route');
const path=require('path');
const cookie = require('cookie-parser');
const userRouter = require('./Routes/user_route');
const { isLogin } = require('./Middleware/isLogin');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookie());

app.set('view engine', 'ejs');
app.set('Views',path.join(__dirname, 'Views'));
app.use(express.static(path.join(__dirname,'Public')));


app.use("/url",isLogin,urlRouter);
app.use("/user",userRouter);


const PORT=process.env.PORT ||8090;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
    dbconnect();
});