const User = require("../models/user_model");
const bcrypt = require("bcrypt");



exports.registration = async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email,active:false})
        if(user) {
            return res.status(400).render('register')
        }
        let haspass = await bcrypt.hash(req.body.password,10)
        user = await User.create({...req.body,password:haspass});
        res.status(201).redirect("todolist")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal Server error"});
    }
}

exports.todolist = async(req,res) => {
    try {
        let users = await User.find({})
        if (users.length > 0) {
            return res.render('todolist', { users });  // Pass the users array to the EJS template
        } else {
            res.status(400).send("No users found");
        }
    }catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal Server error"});
    }
}

// exports.login = async (req, res) => {
//     try {
//         let user = await User.findOne({ email: req.body.email, active: false })
//         if (!user) {
//             res.status(404).json({ msg: "User Not Found" });
//         }
//         let matchpass = await bcrypt.compare(req.body.password, user.password);
//         if (!matchpass) return res.status(400).json({ msg: "Email Or Password Miss Macth" });
//         res.status(200).json({ msg: "Login Successfully", user });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: "Internal Server error" });
//     }
// }