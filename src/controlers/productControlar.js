const express = require("express")
//const multer = require("multer")

const upload = require("../middlewere/upload")

const authenticate = require("../middlewere/authenticate")

const router = express.Router()

const Product = require("../models/product.model")

router.get("",async(req,res)=>{
  //console.log(path.join(__dirname, '../uploadsFile'));
    const products = await Product.find().lean().exec()
    return res.send(products)
})

router.post("/single",authenticate, upload.single("image_urls"),async(req,res)=>{
     //console.log(req);
    const product = await Product.create({
      name:req.body.name,
      price:req.body.price,
      image_url:req.file.path
      
    })
    return res.send(product)
})

router.post("/multiple",authenticate,upload.any("image_urls"),async(req,res)=>{
  const filePath = req.files.map((file)=>file.path);
  const product = await Product.create({
    name:req.body.name,
    price:req.body.price,
    image_url:filePath
  })
  return res.send(product)
})

module.exports = router