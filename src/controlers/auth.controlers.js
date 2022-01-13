
const User = require("../models/user.model")

const register = async(req,res)=>{
   try{
    let user =  await User.findOne({email:req.body.email}).lean().exec()

    if(user) return res.status(400).send({message:"Email already register"})

    user = await User.create(req.body)
   }catch(err){
       return res.status(500).send({message:err.message})
   }
   return res.send(user)
}

const login = async(req,res)=>{
    return res.send("Log-in")
}

module.exports = {register,login}