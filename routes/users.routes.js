const express = require('express');
const userRoutes = express.Router();
const { registerUser, loginUser, userProfile,updateUser } = require('../controller/users.controller');
const { verifyToken } = require('../helpers/tokenVerify');
const { upload} = require("../helpers/imageUpload");



// userRoutes.post('/register', upload.single('profileImage') ,  registerUser);
userRoutes.post('/login', loginUser);
userRoutes.post("/update",verifyToken,updateUser);
userRoutes.get('/me', verifyToken, userProfile);
userRoutes.post('/register' , registerUser)
module.exports = userRoutes;
