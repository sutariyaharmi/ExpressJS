const express = require('express');
const userRoutes = express.Router();

const { addNewusers, getAllusers, getusers, updateusers, deleteusers , registerUser, loginUser } = require('../controller/users.controller');


// Add new users - Create
userRoutes.post("/" , addNewusers );

// Get All product - Read
userRoutes.get("/" , getAllusers)

// Get Single product - Read

userRoutes.get("/:id" , getusers);

 // Replace Data - Put

// usersRoutes.put("/:id" , replaceusers)


// Update Data - Patch

userRoutes.put("/" , updateusers);

 // Delelte Data - Delete

 userRoutes.delete("/:id" ,deleteusers)

//  Register User

userRoutes.post("/register" , registerUser);

// Login

userRoutes.post("/login" , loginUser);

module.exports = userRoutes;
