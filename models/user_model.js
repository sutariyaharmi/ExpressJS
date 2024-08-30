const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   firstName:{
        type : String,
        reqired:true
   },
   lastName : String,
   mobileNo:{
       type:String,
   },
   email:{ 
       type :String,
       reqired:true
    },
    password:{
          type:String    
    },
   active:{
       type:Boolean,
       default:false
   }
},{
    versionkey:false,
    timestamp:true
})

module.exports = mongoose.model("users",userSchema)