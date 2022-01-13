const mongoose = require("mongoose")

const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{
   versionKey:false,
   timestamps:true 
})

userSchema.pre("save",(next)=>{
    if(!this.isModified("password")) return next()

    bcrypt.hash(this.password, 8, function(err, hash) {
        if(err) return next(err)
        user.password = hash
        return next()
    });
})

module.exports = mongoose.model("users",userSchema)