const products = require("../model/product.model")

exports.addNewProduct = async(req ,res)=>{
    // products.push(req.body);
    // res.json({users: req.body , message : 'users Added Success'})
    try {
        // console.log(req.body);
        const{productName ,  productPrice , Validity} = req.body;
        let  product = await products.findOne({productName : productName});
        if(product)
            return res.status(400).json({message :" product already exist... "});
        product = await products.create({
            productName ,  productPrice , Validity
        })
        product.save();
        res.status(201).json({product , message : "product Added"});
    } catch (error) {
        console.log(error);
         res.status(500).json({message:"Internal Server Error"});   
    }
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