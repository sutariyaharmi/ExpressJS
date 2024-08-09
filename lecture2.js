const { log } = require('console');
const express = require('express');
const server = express();
const fs = require('fs');
const data = fs.readFileSync('./friend.json','utf-8');

const morgan = require('morgan');
const { loadEnvFile } = require('process');

// 4.0 version -> body-parser
// express.json() -> raw / json formate
// express.urlencoded() -> from
// express.static()

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use("/hello" , express.static('public'));
// server.use(morgan('dev'))

let middleware = (req , res , next) => {
    console.log(req.body);
    if(req.body.age >=21){
        console.log('success');
        next();
    }else{
        return res.json({message : 'Inccorect Way!!!!'})
    } 
}

let loggerFun = (req , res , next) => {
    console.log(req.url , "\t" , req.method , "\t");
    fs.appendFile("./log.text",req.url ,(req,res) => {
        res.send("suceess");
    } )
    next(); 
}
server.use(loggerFun);
// application level
server.use(middleware);

server.get("/friend", (req,res)=>{
    res.status(200);
    res.json(JSON.parse(data));
})

server.listen(5050 , ()=>{
    console.log(`server start at http://localhost:5050`);  
});

