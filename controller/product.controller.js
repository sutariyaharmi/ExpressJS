const products = require("../product.json")

exports.addNewProduct = (req ,res)=>{
    products.push(req.body);
    res.json({product: req.body , message : 'product Added Success'})
};

exports.getAllProduct = (req , res) => {
    res.json(products);
};

exports.getProduct = (req , res) => {
    let id = +req.params.id;
    let item = products.find((product) => product.id === id );
    res.json(item);
};

exports.replaceProduct = (req , res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    // console.log(productIndex);
    products.splice(productIndex , 1 , {...req.body});
    res.json({message : " product Replace Success"});
};

exports.updateProduct = (req , res) => {
    let id = +req.params.id;
    let productIndex  = products.findIndex((product) => product.id === id);
    // console.log(productIndex);
    const product = products[productIndex];
    // console.log(product);
    products.splice(productIndex , 1 , {...product , ...req.body});
    res.json({message:"product update successfully"}); 
}

exports.deleteProduct = (req , res)=>{
    let id = +req.params.id;
    let productIndex = products.findIndex((product)=> product.id === id);
    const product = products[productIndex];
    products.splice(productIndex , 1);
    res.json({product , message : " product delete successfully..."});
};