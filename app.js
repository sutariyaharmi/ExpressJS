const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require("./routes/users.routes"); 
const { addtoCart} = require("./controller/cart.controller");
const cartRoutes = require('./routes/cart.routes');

require('dotenv').config();
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose
    .connect(uri)
    .then(() => console.log('Database connection established successfully...'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use("/public/images" , express.static(path.join(__dirname , 'public/images')))


app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
});


app.use('/api/user', userRoutes); 
app.use('/api/cart',cartRoutes);


app.listen(PORT, () => {
    console.log('Server started.....');
});

