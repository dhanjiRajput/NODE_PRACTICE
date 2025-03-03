const express=require("express");
const app=express();
require("dotenv").config();

app.use(express.json());

app.get("/", async(req, res)=>{
    return res.json({message:`Welcome to the Future.... ${process.pid}`});
});

const PORT=process.env.PORT||8090;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
