const express = require('express');
const app = express();
const morgan = require('morgan');
const products = require('./product.json');
const users = require('./users.json')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'))

app.get("/" , (req , res)=>{
    res.send('welcome to express server')
})

// CRUD

// Add new product - Create
app.post("/product" , (req ,res)=>{
    products.push(req.body);
    res.json({product: req.body , message : 'product Added Success'})
});

// Get All product - Read
app.get("/products" , (req , res) => {
    res.json(products);
})

// Get Single product - Read

app.get("/product/:id" , (req , res) => {
    let id = +req.params.id;
    let item = products.find((product) => product.id === id );
    res.json(item);
});

// Replace Data - Put

app.put("/product/:id" , (req , res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    // console.log(productIndex);
    products.splice(productIndex , 1 , {...req.body});
    res.json({message : " product Replace Success"});
});


// Update Data - Patch

app.patch("/product/:id" , (req , res) => {
    let id = +req.params.id;
    let productIndex  = products.findIndex((product) => product.id === id);
    // console.log(productIndex);
    const product = products[productIndex];
    // console.log(product);
    products.splice(productIndex , 1 , {...product , ...req.body});
    res.json({message:"product update successfully"}); 
})

// Delelte Data - Delete

app.delete("/product/:id" , (req , res)=>{
    let id = +req.params.id;
    let productIndex = products.findIndex((product)=> product.id === id);
    const product = products[productIndex];
    products    .splice(productIndex , 1);
    res.json({product , message : " product delete successfully..."});
})

// ======================================================================================
// ======================================================================================

// CRUD

// Add new users - Create
app.post("/users" , (req ,res)=>{
    products.push(req.body);
    res.json({users: req.body , message : 'users Added Success'})
});

// Get All product - Read
app.get("/users" , (req , res) => {
    res.json(users);
})

// Get Single product - Read

app.get("/users/:id" , (req , res) => {
    let id = +req.params.id;
    let item = users.find((users) => users.id === id );
    res.json(item);
});

 // Replace Data - Put

app.put("/users/:id" , (req ,res) => {
    let id = +req.params.id;
    let usersIndex = users.findIndex((users) => users.id === id);
    // console.log(usersIndex);
    users.splice(usersIndex , 1 , {...req.body});
    res.json({message : "users replace success..."})
    
})


// Update Data - Patch

app.patch("/users/:id" , (req , res) => {
    let id = +req.params.id;
    let usersIndex = users.findIndex((users) => users.id === id);
    // console.log(usersIndex);
    const user = users[usersIndex];
    console.log(user);
    users.splice(usersIndex , 1 , { ...req.body});
    res.json({message: "users update successfully.."})
    

    
})

 // Delelte Data - Delete

app.delete("/users/:id" , (req , res) => {
    let id = +req.params.id;
    let usersIndex = users.findIndex((users) => users.id === id);
    const user = users[usersIndex];
    users.splice(usersIndex , 1);
    res.json({user , message:"users delete success"});
})




app.listen(2711 , () => {
    console.log("server start");
    
})