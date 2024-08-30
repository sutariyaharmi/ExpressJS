const users = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Ensure you have jsonwebtoken installed


// Registration
const registerUser = async (req, res) => {
    try {
        let user = await users.findOne({ email: req.body.email, isDelete: false });
        if (user) {
            return res.status(400).json({ message: "User already exists..." });
        }
        if(req.file){
            imagePath = req.file.path.replace(/\\/g , "/");
        }
        let hashpassword = await bcrypt.hash(req.body.password, 10);
        user = await users.create({ ...req.body, password: hashpassword , });
        res.status(201).json({ user, message: "User registration successful..." });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Login
const loginUser = async (req, res) => {
    try {
        let user = await users.findOne({ email: req.body.email, isDelete: false });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        let matchPassword = await bcrypt.compare(req.body.password, user.password);
        if (!matchPassword) {
            return res.status(400).json({ message: 'Email or password not matched...' });
        }
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// User Profile
const userProfile = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateUser = async (req , res) => {
    try {
        let user = req.user;
        user = await user.findByIdAndUpdate(
            user._id,
            {$set :  req.body},
            {new : true}
        );
        res.status(202).json({user,message: "user update success"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Export functions
module.exports = {
    registerUser,
    loginUser,
    userProfile,
    updateUser
};
