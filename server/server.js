const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/config');

const morgan = require('morgan')
const colors = require("colors");

// config
dotenv.config();

// connections 
connectDB();

const app = express();

const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/pizzas',require('./routes/pizzaRoute'));
app.use('/api/users',require('./routes/userRoute'));

app.get('/',(req,res)=>{
    console.log(colors.magenta('This is home page'));
    res.send('This is home page');
});

app.listen(8080,()=>{
    console.log(`app is running in ${process.env.NODE_ENV} Mode & running on port : ${port}`,colors.bgCyan);
});