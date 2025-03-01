const mongooose=require('mongoose');
require("dotenv").config();

const MONGO_URL=process.env.MONGO_URL;
const dbconnect=async()=>{
    await mongooose.connect(MONGO_URL);
    console.log("Database connection established Successfully....");   
};

module.exports=dbconnect;