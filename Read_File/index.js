const express = require('express');
const fs = require('fs');
const status=require("express-status-monitor");
const zlib = require('zlib');
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(status());

app.get('/',async(req, res)=>{

    //create Zip file Without using More Memory Consumption
    fs.createReadStream("./sample.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./sample.zip")));

   const stream = fs.createReadStream("./sample.txt","utf-8");
   stream.on("data",(chunk)=>res.write(chunk));
   stream.on("end",()=>res.end());
    // fs.readFile("./sample.txt",(err, data)=>{
    //     res.end(data);
    // });
});

const PORT = process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});