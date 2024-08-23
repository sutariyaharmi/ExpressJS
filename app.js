const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require("mongoose");
const productRoutes = require('./routes/product.routes')
const usersRoutes = require('./routes/users.routes')

// Database Connection

require('dotenv').config();
const uri = process.env.MONGO_URI

mongoose
.connect(uri)
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


app.listen(5517, () => {
    console.log("server start http://localhost:5517"); 
});