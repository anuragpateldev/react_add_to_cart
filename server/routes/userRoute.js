const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
 
// register
router.post('/register',async(req,res)=>{
    console.log('req.body ==>',req.body);
    const {name,email,password} = req.body;
    const newUser = new userModel({name,email,password});
    try{
        newUser.save();
        res.status(200).json({
            success:true,
            message:'Register Success'
        })
    }catch(err){
        //res.json({message:err});
        res.status(400).json({
            message:err,
        })
    }
});

router.post('/login',async(req,res)=>{
    console.log('req.body ==>',req.body);
    const {email,password} = req.body;

    try{
        const user = await userModel.find({email,password});
        if(user.length > 0){
            const currentUser = {
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0].id
            }
            res.status(200).send(currentUser);
        }else{
            res.status(400).json({
                message:'Login failed',
            })
        }
    }catch(err){
        //res.json({message:err});
        res.status(400).json({
            message:err,
        })
    } 
});

router.get('/getusers',async(req,res) =>{
    try{
        const user = await userModel.find();
        console.log(' user ==>',user);
        res.status(200).send(user);
    }catch(err){
        res.status(400).json({message:err});
    }
});

router.post('/deleteuser' , async(req,res) =>{
    const user_id = req.body.userid;
    console.log('user_id');
    try{
        const result = await userModel.findByIdAndDelete({_id:user_id});
        res.status(200).send('User Delete success');
    }catch(err){
        res.status(400).json({message:err});
    }
});

module.exports = router; 