const mongoose=require("mongoose")

const {Schema}=mongoose;
const productSchema= new Schema(
    {
     url:{
        type:String,
        required:true
     },
     name:{
        type:String,
        required:true
     },
     price:{
        type:Number,
        required:true
     }
    },
    {timestamps:true}
)
const Products=mongoose.model("products",productSchema);
module.exports=Products