const express = require('express');
const { register, login,dashboard,logout } = require('../controller/usercontroller');


const router=express.Router();

router.post("/register" ,register)
router.post("/login",login)
router.get("/dashboard",dashboard)
router.get("/logout",logout)
module.exports= router