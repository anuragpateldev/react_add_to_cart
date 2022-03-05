const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require('uuid');
const get_uuidv4 = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const orderModel = require("../models/orderModel");

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
router.post('/placeorder',async (req,res)=>{
   const { token , subTotal , currentUser , cartItems } = req.body;
   try{
        const customer = await stripe.customers.create({
            email: token.email,
            source:token.id
        });
        console.log(customer.id);

        const payment = await stripe.charges.create({
            amount : subTotal * 100,
            currency:'usd',
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey: get_uuidv4
        })

        // orderModel
        if(payment){
            const newOrderModel = new orderModel ({
                name:currentUser.name,
                email:currentUser.email,
                userid:currentUser._id,
                orderItems:cartItems,
                orderAmount:subTotal,
                shippingAddress: {
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    pincode:token.card.address_zip,
                },
                transectionId:payment.source.id
            });
            newOrderModel.save();
            res.send('Payment success');
        }else{
            res.send('Payment failed');
        }
   }catch(err){
    console.log('err ==>',err);
   }
});

router.post('/getuserorder',async(req,res)=>{
    const { userid }  = req.body;
    try{
        const orders = await orderModel.find({userid:userid});
        res.status(200).send(orders);
    }catch(err){
        res.status(400).json({message:'Something went wrong',error:error.stack});
    }
}); 

router.get('/getorder',async (req,res) =>{
    try{
        const order = await orderModel.find();
        console.log('order ==>',order);
        res.status(200).send(order);
    }catch(err){
        res.status(400).json({message:'something went wrong'});
    }
});

router.post('/deliverorder',async (req,res) =>{
    const orderid = req.body.orderid;
    console.log('orderid ==>',orderid);
    try{
        const order = await orderModel.findOne({_id:orderid});
        console.log('order ==>',order);
        order.isDeliverd = true;
        await order.save();
        res.status(200).send('Item delivered success');
    }catch(err){
        console.log('err ==>',err);
        res.status(400).json({message:err});
    }
});

module.exports = router;