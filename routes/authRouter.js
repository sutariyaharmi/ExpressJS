const express = require("express");
const router = express.Router();
require("dotenv").config()
// const key = process.env.SECREAT_KEY
const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const { registration, todolist } = require("../controllers/auth_controller");
const passport = require("passport");
require("../helpers/passport")


router.get("/login",(req,res) => {
    res.render('login');
});

router.get("/register",(req,res) => {
    res.render('register');
});

router.post("/register",registration);

router.post("/login", passport.authenticate('local', {
    successRedirect: "todolist",
    failureRedirect: "login",  // Redirect back to login on failure
}));


router.get("/todolist",todolist);

module.exports= router;



























