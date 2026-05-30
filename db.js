const mongoose = require('mongoose');



const connectDB=()=>{
    mongoose.connect ("mongodb://localhost:27017/session_new").then((result) => {
        console.log("connected");
        
    }).catch((err) => {
        console.log(err);
        
    });

}

module.exports={connectDB};