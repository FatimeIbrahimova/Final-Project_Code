const express=require("express")
const dotenv=require("dotenv")
require("./src/db/dbConnection")
const productRoute=require("./src/routes/products")

dotenv.config()
const app=express()

app.use("/products",productRoute)

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("Port is up and running");
})