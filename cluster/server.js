const cluster=require('node:cluster');
const os=require('os');
const express=require("express");
    const app=express();
    require("dotenv").config();

const total=os.cpus().length;

console.log(total);

if(cluster.isPrimary){
    for(let i=0; i<total; i++){
        cluster.fork();
    }
}else{
    
    
    app.use(express.json());
    
    app.get("/", async(req, res)=>{
        return res.json({message:`Welcome to the Future.... ${process.pid}`});
    });
    
    const PORT=process.env.PORT||8090;
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}
