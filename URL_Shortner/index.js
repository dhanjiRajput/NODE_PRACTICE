const express = require('express');
const dbconnect = require('./Config/db');
const urlRouter = require('./Routes/url_route');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/url",urlRouter);

const PORT=process.env.PORT ||8090;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
    dbconnect();
});