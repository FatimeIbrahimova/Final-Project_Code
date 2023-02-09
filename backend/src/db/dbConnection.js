const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()

const DB=process.env.DB_URL.replace("<password>",process.env.DB_PASSWORD)
mongoose.connect(DB,(err,docs)=>{
    if(!err){
        console.log("DB connect");
    }
})