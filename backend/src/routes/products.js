const router=require("express").Router();
const Products=require("../models/Product");

//get all products
app.get("/products",(req,res)=>{
    Products.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({message:err})
        }
    })
})
//add product
app.post("/products",(req,res)=>{
    let product=new Products({
        url:req.body.url,
        name:req.body.name,
        price:req.body.price
    })
    product.save()
    res.send({message: "success"})
})
module.exports=router;