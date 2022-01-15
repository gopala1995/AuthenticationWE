const mongoose = require("mongoose")

const prodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    image_url:[{type:String,required:true}]
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("produst",prodSchema)