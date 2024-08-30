const express = require("express");
const app = express();
require("dotenv").config()
const mongoose = require("mongoose");
const mongo_URL = process.env.MONGO_URI
const port = process.env.PORT
const user_router = require("./routes/authRouter")
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require("passport");


app.use(session({
    secret:"key",
    resave: false, 
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:"mongodb+srv://prince-bodar:bodarprins@atlascluster.rrby2tc.mongodb.net/users",collectionName:"sessions"}),
    cookie: { 
        maxAge : 1000*60*60*48
    }
})) 
app.use(passport.initialize());
app.use(passport.session());


app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}));

// Database Connection 
mongoose.connect(mongo_URL)
        .then(()=>console.log("MongoDB is Connected"))
        .catch((err)=>console.log(err))



app.get("/",(req,res) => {
    res.json({"success" : "welcome to server"})
})

app.use("/",user_router);



app.listen(port,() => console.log(`Server is Started !`));