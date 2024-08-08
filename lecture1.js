//  npm init / npm init -y (default)

const express = require('express');

// http.createServer();
const server = express(); 

// CRUD -> Create(POST) , Read(GET) , Update(PUT , PATCH) , Delete(DELETE)

server.get("/" , (req , res) => {
    res.write('Welcome to Express Server');
    res.end();
})

// ======================================

// Method 

server.get("/user" , (req , res) => {
    res.status(200);
    res.json({message : 'User Get Method'})
})
server.post("/user" , (req , res) => {
    res.status(201);
    res.json({message : 'User Post Method'})
})
server.put("/user" , (req , res) => {
    res.status(201);
    res.json({message : 'User Put Method'})
})
server.patch("/user" , (req , res) => {
    res.status(201);
    res.json({message : 'User Patch Method'})
})
server.delete("/user" , (req , res) => {
    res.status(201);
    res.json({message : 'User Delete Method'})
})

// ===============================================


server.patch("/Admin" , (req , res) => {
    res.status(201);
    res.json({message : 'Admin Patch Method'})
})
server.delete("/Admin" , (req , res) => {
    res.status(201);
    res.json({message : 'Admin Delete Method'})
})


server.listen(1234 , () =>{
    console.log('server start at http://localhost:1234');  
});

/*
 
  git checkout -b gk-1
  git add . 
  git commit -m "your commit"
  git push -u origin gk-1

*/  