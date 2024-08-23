const users = require('../model/user.model')
const brcypt = require('bcrypt')

exports.addNewusers = async(req ,res)=>{
    // products.push(req.body);
    // res.json({users: req.body , message : 'users Added Success'})
    try {
        console.log(req.body);
        const{firstName , lastName , email , hobbies , address , age} = req.body;
        let  user = await users.findOne({email : email});
        if(user)
            return res.status(400).json({message :" User already exist... "});
        user = await users.create({
            firstName , lastName , email , age , hobbies , address
        })
        // user.save();
        res.status(201).json({user , message : "User Added"});
    } catch (error) {
        console.log(error);
         res.status(500).json({message:"Internal Server Error"});   
    }
};

exports.getAllusers =async(req , res) => {
    try {
        let user = await users.find();
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
         res.status(500).json({message:"Internal Server Error"});   
    }
};

exports.getusers =async (req , res) => {
  try {
    let users = await users.find({isDelete : false});
    res.status(200).json(users);
  } catch (error) {
         console.log(error);
         res.status(500).json({message:"Internal Server Error"});   
  }
};

// exports.replaceusers = (req ,res) => {
//     let id = +req.params.id;
//     let usersIndex = users.findIndex((users) => users.id === id);
//     // console.log(usersIndex);
//     users.splice(usersIndex , 1 , {...req.body});
//     res.json({message : "users replace success..."})  
// };


exports.updateusers =async (req , res) => {
    try {
        let user = await users.findById(req.query.userId);
        if(!user){
            return res.status(404).json({message:"User not Found......"});
        }
        user = await users.updateOne({_id:req.query.userId} , {$set:req.body} , { new : true});
        user.save();
        res.status(202).json({user , message:"User Update Success"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})     
    }
};

// Delete users 

exports.deleteusers = async (req , res) => {
   try {
    let user = await users.findById(req.query.userId);
    if(!user){
        return res.status(404).json({message: " user not found...."});
    }
    user = await users.deleteOne({_id : user.id});
    
    res.status(200).json({user, message:"user Delete Success"});
   } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal Server Error"})     
}
};