const express=require('express');
const http=require('http');
require("dotenv").config();
const path=require('path');
const {Server}=require('socket.io');

const app = express();
const server = http.createServer(app);
const io=new Server(server);

io.on('connection',(socket)=>{
    socket.on("userMessage",(message)=>{
        io.emit("message",message);   
    });
});

app.use(express.static(path.resolve("./Public")));

app.get('/',(req,res)=>{
    res.sendFile("./Public/index.html");
});

const PORT=process.env.PORT || 8090;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});