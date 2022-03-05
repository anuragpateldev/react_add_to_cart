const express = require("express");
const router = express.Router();
const pizzaModel = require("../models/pizzaModel");

// GET ALL PIZZA || @GET REQUEST
router.get('/getAllPizzas',async(req,res)=>{
    try{
        const pizzas = await pizzaModel.find();
        res.send(pizzas);
    }catch(err){
        res.json({message:err});
    }
});
 
router.post('/addpizza',async(req,res) =>{
    try{
        const { name , image , category , description , prices } = req.body;

        const newPizzaModel  = new pizzaModel({
            name:name,
            image:image,
            varient:['small','medium','large'],
            description:description,
            prices:prices,
            category:category
        });

        const result = await newPizzaModel.save();
        console.log('result ==>',result);
        res.status(201).send('New pizza added');
    }catch(err){
        res.json({ message:err });
    }
});

router.post('/getpizzabyid',async (req,res) =>{
    const  id  = req.body.id;
    console.log('pizzaid ==>',req.body.id);
    try{
        const  data = await pizzaModel.findOne( {_id:id} );
        console.log('data == >',data);

        res.status(200).send(data);
    }catch(err){
        res.json({message:err});
    }
});

router.post('/updatepizza', async(req,res) =>{
    const {_id , name , image , category , description } = req.body.pizza;
    try{
        const result = await pizzaModel.findByIdAndUpdate({_id},{name,image,category,description});
        console.log('Data successfully updated');
        res.status(200).send('Data successfully updated');
    }catch(err){
        res.status(500).json({message:err});
    }
});

router.post('/deletepizza', async(req,res) =>{
    const pizzaId = req.body.pizzaId;
    try{
        const result = await pizzaModel.findByIdAndDelete({_id:pizzaId});
        res.status(200).send('Data successfully deleted');
    }catch(err){
        console.log('errr ==>',err);
        res.status(400).json({message:err});
    }
});

module.exports = router; 