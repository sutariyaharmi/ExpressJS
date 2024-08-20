const express = require('express');

const { addNewusers, getAllusers, getusers, replaceusers, updateusers, deleteusers } = require('../controller/users.controller');

const usersRoutes = express.Router();


// Add new users - Create
usersRoutes.post("/" , addNewusers );

// Get All product - Read
usersRoutes.get("/" , getAllusers)

// Get Single product - Read

usersRoutes.get("/:id" , getusers);

 // Replace Data - Put

usersRoutes.put("/:id" , replaceusers)


// Update Data - Patch

usersRoutes.patch("/:id" , updateusers)

 // Delelte Data - Delete

 usersRoutes.delete("/:id" ,deleteusers)

module.exports = usersRoutes;
