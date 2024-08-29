const express = require('express');
const userRoutes = express.Router();
const { registerUser, loginUser, userProfile } = require('../controller/users.controller');
const { verifyTOken } = require('../helpers/tokenVerify');

// Register User
userRoutes.post('/register', registerUser);

// Login
userRoutes.post('/login', loginUser);

// Get User Profile
userRoutes.get('/me', verifyTOken, userProfile);

module.exports = userRoutes;
