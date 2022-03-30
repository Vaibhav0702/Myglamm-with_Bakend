const express=require("express");
const cors=require("cors");
const productcontroller=require("./controller/Product.controller");

 const app=express();
 app.use(cors());
 app.use(express.json());
 app.use("/products",productcontroller);
 
 module.exports=app;