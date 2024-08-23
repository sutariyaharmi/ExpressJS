const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
   productName : String,
   productPrice : {
    type : Number
   },
   Validity : {
    type : String
   }
});

module.exports = mongoose.model('product' , productSchema)