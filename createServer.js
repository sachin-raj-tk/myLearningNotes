const http = require('http');

// SERVER CREATION AND LISTENING METHOD 1

// const server = http.createServer().listen(5000,'127.0.0.1',()=>{
//     console.log("server listening on port 5000");
// });

// server.on('request',(req,res)=>{
//     console.log("request recieved on port 5000");
//     res.end('request recieved');
// })




//SERVER CREATION AND LISTENING METHOD TWO

// const server = http.createServer().listen(5000,()=>{
//     console.log("server listening on port 5000");
// }).on("request",(req,res)=>{
//     console.log("request received on port 5000");
// });


const server = http.createServer().listen(5000,()=>{
    console.log("server listening on port 5000");
})

server.on('request',(req,res)=>{
    console.log("request recived at port 5000");
    res.end('request recieved')
})