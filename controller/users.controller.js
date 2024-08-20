const users = require('../users.json')

exports.addNewusers = async(req ,res)=>{
    // products.push(req.body);
    // res.json({users: req.body , message : 'users Added Success'})
    try {
        console.log(req.body);
        const user = await UserActivation.create({...req.body});
        // user.save();
        res.status(201).json({user , message : "User Added"});
    } catch (error) {
        console.log(error);
         res.status(500).json({message:"Internal Server Error"});   
    }
};

exports.getAllusers =(req , res) => {
    res.json(users);
};

exports.getusers = (req , res) => {
    let id = +req.params.id;
    let item = users.find((users) => users.id === id );
    res.json(item);
};

exports.replaceusers = (req ,res) => {
    let id = +req.params.id;
    let usersIndex = users.findIndex((users) => users.id === id);
    // console.log(usersIndex);
    users.splice(usersIndex , 1 , {...req.body});
    res.json({message : "users replace success..."})  
};

exports.updateusers = (req , res) => {
    let id = +req.params.id;
    let usersIndex = users.findIndex((users) => users.id === id);
    // console.log(usersIndex);
    const user = users[usersIndex];
    console.log(user);
    users.splice(usersIndex , 1 , { ...req.body});
    res.json({message: "users update successfully.."})
     
};


exports.deleteusers =  (req , res) => {
    let id = +req.params.id;
    let usersIndex = users.findIndex((users) => users.id === id);
    const user = users[usersIndex];
    users.splice(usersIndex , 1);
    res.json({user , message:"users delete success"});
};