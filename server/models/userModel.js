const mongoose  = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    email:{
        type:String,
        required:[true,'email is required'],
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
{timestamps:true}
);

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;