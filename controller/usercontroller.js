const userModel = require("../model/userModel");
const bcryptjs=require('bcryptjs')

const register=async(req,resp)=>{
try {
    const {uname,email,pass} =req.body;
    const hashPassword=await bcryptjs.hash(pass,10)
    console.log(hashPassword);
    await userModel.create({uname,email,pass:hashPassword})
    resp.json("register succesfull...")
    
} catch (error) {
    console.log(error);
    
}
}


// login 
const login= async(req,resp)=>{
const {uname ,pass}= req.body;
 const user= await userModel.findOne({uname})

 if (user && await bcryptjs.compare(pass , user.pass)) {
    req.session.name = uname
    resp.json("logged in....")
 } else {
    console.log("invalid credientials....");
    
 }
}
const dashboard = async(req,resp) =>{
    if (!req.session.name) {
        resp.json("kindly login first!!!")
    } else {
        resp.json(req.session.name)
    }
}

const logout = async (req,resp) =>{
    req.session.destroy(()=>{
        resp.json("logged outt...")
    })
}
module.exports={register,login,dashboard,logout}