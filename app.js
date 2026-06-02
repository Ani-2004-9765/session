const express = require('express');
const { connectDB } = require('./db');
const router = require('./route/userRoute');
const session = require('express-session');

const app=express()
connectDB()
app.use(session({
    secret:"tgvhbnmcvjxbsvh",
    resave:false,
    saveUninitialized:false
}))
app.use(express.json())
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use("/",router)


app.listen(5500,()=>{
    console.log("connected...");
    
})
