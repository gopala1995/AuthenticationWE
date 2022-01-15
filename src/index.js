const express = require("express")



const {register, login} = require("./controlers/auth.controlers")

const productControlar = require("./controlers/productControlar")

const app = express()

app.use(express.json())

app.post("/register", register)
app.post("/login", login)
app.use("/products",productControlar)

module.exports = app