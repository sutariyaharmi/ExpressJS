const express = require('express')

const productRoutes = express.Router();


const { addNewProduct, getProduct, getAllProduct, replaceProduct, updateProduct, deleteProduct } = require("../controller/product.controller");


// Add new product - Create
productRoutes.post("/" , addNewProduct );

// Get All product - Read
productRoutes.get("/" , getAllProduct);

// Get Single product - Read

productRoutes.get("/:id" , getProduct);

// Replace Data - Put

productRoutes.put("/:id" , replaceProduct);


// Update Data - Patch

productRoutes.patch("/:id" , updateProduct)

// Delelte Data - Delete

productRoutes.delete("/:id" , deleteProduct )


module.exports = productRoutes;