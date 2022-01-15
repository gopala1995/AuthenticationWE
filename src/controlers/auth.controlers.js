
require("dotenv").config()

const jwt = require("jsonwebtoken")

const User = require("../models/user.model")

const newToken = (user)=>{
    return jwt.sign({ foo: 'bar',exp:60*5 }, process.env.JWT_SECRET_KEY);
}

const register = async(req,res)=>{
   try{
    let user =  await User.findOne({email:req.body.email}).lean().exec()

    if(user) return res.status(400).send({message:"Email already register"})

    user = await User.create(req.body)
   

    const token = newToken(user) 

    return res.status(201).send({user,token})

   }catch(err){
       return res.status(500).send({message:err.message})
   }
   //return res.send(user)
}

const login = async(req,res)=>{
   

    try{

    let user = await User.findOne({email:req.body.email}) 

    if(!user) return res.status(400).send({message:"pls Enter valid userid and password"})

    const match = user.checkPassword(req.body.password)

    if(!match) return res.status(400).send({message:"pls Enter valid userid and password"})

    const token = newToken(user) 
    
    return res.status(201).send({user,token})

    }catch(err){
       return res.status(500).send({message:err.message})
   }
}

module.exports = {register,login}