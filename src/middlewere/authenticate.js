
// require("dotenv").config()

// const jwt = require("jsonwebtoken");
// const { verify } = require("jsonwebtoken");

// const verifyToken = (tocken)=>{
//     return new Promise((resolve,reject)=>{
//         jwt.verify(tocken,process.env.JWT_SECRET_KEY, function(err,decode){
//             if(err) return reject(err)
//             return (decode)
//         })
//     })
// }

module.exports = (req, res, next) => {
//   if (!req?.headers?.authorization)
//     return res.status(400).send({ message:"Bad request" });

//     const bearerTocken = req.headers.authorization;

//     if(!bearerTocken.startsWith("Bearer"))
//     return res.status(400).send({message:"Bad request"})

//     const tocken = bearerTocken.split(" ")[1]

//     const user = await verifyToken(tocken)

//  req.user = user
  next();
};
