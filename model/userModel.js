const mongoose = require('mongoose');

const empSchema=mongoose.Schema({
    uname:{
    type:String,
    required:true,
    unique:true
    },

    email:{
    type:String,
    unique:true,
    required:true
    },

    pass:{
        type:String,
        required:true
    }

},{timestamps:true}
)
const userModel= mongoose.model("user",empSchema);
module.exports =userModel
