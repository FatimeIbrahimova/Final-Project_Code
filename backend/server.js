const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
require("./src/db/dbConnection")
const sliderRoute=require("./src/routes/FirstSection/slider")
const allProductRoute=require("./src/routes/allProduct")
const instaRoute=require("./src/routes/insta")
const authRoute=require("./src/routes/auth")
const userRoute=require("./src/routes/users")
const commentRoute=require("./src/routes/comments")
const categoryRoute=require("./src/routes/categories")

dotenv.config()
const app=express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())


app.use("/slider",sliderRoute)
app.use("/allProductt",allProductRoute)
app.use("/insta",instaRoute)
app.use("/auth",authRoute)
app.use("/users",userRoute)
app.use("/comments",commentRoute)
app.use("/categories",categoryRoute)

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Port is up and running:${PORT}`);
})
