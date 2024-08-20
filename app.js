const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require("mongoose");
const productRoutes = require('./routes/product.routes')
const usersRoutes = require('./routes/users.routes')

// Database Connection

mongoose
.connect("mongodb://127.0.0.1:27017/userdatabase")
.then(() => console.log(`Database connection established successfully...`))
.catch(err => console.log(err));



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));

app.get("/" , (req , res) => {
    res.send("Welcome to Express Server");
});

app.use("/api/product" , productRoutes);
app.use("/api/users" , usersRoutes); 

app.listen(1233 , () => {
    console.log("server start http://localhost:1233"); 
});