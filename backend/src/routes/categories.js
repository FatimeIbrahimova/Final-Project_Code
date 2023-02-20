const express = require('express')
let router = express.Router()
const Categories=require("../models/Categories");



//get all comments
router.get("/",(req,res)=>{
    Categories.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({message:err})
        }
    })
})
//add comment
router.post("/",(req,res)=>{
    let category=new Categories({
      categoryName:req.body.categoryName,
      exampleImg:req.body.exampleImg,
      categoryDesc:req.body.categoryDesc,
    })
    category.save()
    res.send({message: "success"})
})
//! Get comments by id
router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    Categories.findById(id, (err, docs) => {
      if (!err) {
        if (docs) {
          res.send(docs);
          res.status(200);
        } else {
          res.status(404).json({ message: "NOT FOUND" });
        }
      } else {
        res.status(500).json({ message: err });
      }
    });
  });
//delete
router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    Categories.findByIdAndDelete(id,(err,docs)=>{
        if(!err){
            res.send({message:"deleted"})
        }else{
            res.status(500).json({message:err})
        }
    })
})
//! Update category by id
router.put ('/:id', (req, res) => {
  const {id} = req.params;

  Categories.findByIdAndUpdate (id, req.body, (err, doc) => {
    if (!err) {
      res.status (201);
    } else {
      res.status (500).json (err);
    }
  });
  res.send ({message: 'SUCCESSFULLY Updated'});
});
module.exports=router;