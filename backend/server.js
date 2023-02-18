const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
require("./src/db/dbConnection")
const productRoute=require("./src/routes/SecondSection/products")
const product2Route=require("./src/routes/SecondSection/products2")
const productAdd1Route=require("./src/routes/SecondSection/productsAdd1")
const productAdd2Route=require("./src/routes/SecondSection/productsAdd2")
const sliderRoute=require("./src/routes/FirstSection/slider")
const allProductRoute=require("./src/routes/allProduct")
const instaRoute=require("./src/routes/insta")


dotenv.config()
const app=express()
app.use(cors())
app.use(bodyParser.json())


app.use("/products",productRoute)
app.use("/products2",product2Route)
app.use("/productsAdd1",productAdd1Route)
app.use("/productsAdd2",productAdd2Route)
app.use("/slider",sliderRoute)
app.use("/allProductt",allProductRoute)
app.use("/insta",instaRoute)

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Port is up and running:${PORT}`);
})
