import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { routes } from "./Routes/placeRoutes.js"
import cors from "cors"

dotenv.config()


const port = process.env.PORT
const app= express()

app.listen(port, ()=>{
    console.log(`Serve running at ${port}`)
})
app.use(cors())
const mongo = process.env.MONGO_URL
mongoose.connect(mongo).then(()=>{
    console.log(`Database connected`)
})
app.use("/images", express.static("uploads"))

app.use("/api/v1",routes)




