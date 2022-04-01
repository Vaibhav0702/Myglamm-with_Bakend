const express =require("express")
const router=express.Router();

const Product=require("../models/product.model")
router.post("",async(req,res)=>{

    try {
        const product=await Product.create(req.body)
        return res.status(200).send(product)    
        
    } catch (error) {
        return res.status(400).send({message:error.message})

        
    }
    
   
})
module.exports=router