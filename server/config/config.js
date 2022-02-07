const { bgRed, bgCyan } = require("colors");
const mongoose = require("mongoose");

/*By async await method start */
const connectDB = async() => {
    try{
        const url = process.env.MONGO_URI;
        const conn = await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB database Connected : ${conn.connection.host}`,bgCyan.white);
    }catch(error){
        console.log(`error : ${error.message}`,bgRed.white);
    }
}
module.exports = connectDB;
/*By async await method end */



/*By promise method start*/
    /*
    mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((obj) => {
        console.log("Connected Successful")
    }).catch((err) => {
        console.log("Error in the Connection",err);
    });
    */
/*By promise method end */
  