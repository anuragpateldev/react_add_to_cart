const mongoose  = require("mongoose");

const orderSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    userid : {
        type:String,
        //required:true
    },
    orderItems:[],
    shippingAddress :{
        type: Object,
        //required:true
    },
    orderAmount:{
        type:String,
        //required:true
    },
    isDeliverd:{
        type:Boolean,
        default:false
    },
    transectionId:{
        type:String,
        required:true
    }
},{ timestamps:true });

module.exports = mongoose.model('Order',orderSchema);