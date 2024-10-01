import express from "express"
import { addPlace, allPlaces, deletePlace, updatePlaces } from "../controller/placeController.js"
import multer from "multer"
import { now } from "mongoose"


export const routes = express.Router()


const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})
routes.post("/add-places", upload.single("images"),addPlace)
routes.get("/all-places",allPlaces)
routes.delete("/delete-place/:id", deletePlace)
routes.put("/update-place/:id", updatePlaces)