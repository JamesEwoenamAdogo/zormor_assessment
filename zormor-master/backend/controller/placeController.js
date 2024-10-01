import { placeModel } from "../models/place.js";
import fs from "fs"


export const addPlace = async(req,res)=>{
    try{
        const image_filename = `${req.file.filename}`
        const {name,Description,Location,OpenHours}= req.body
        const newPlace = new placeModel({name,Description,Location,OpenHours,images:image_filename})
        console.log(image_filename)
        await newPlace.save()
        return res.json({message:"success"})
        
        

    }catch(error){
        console.log(error)
    }
}

export const allPlaces = async(req, res)=>{
    try{
        const places = await placeModel.find({})
        return res.json({places})


    }catch(error){
        console.log(error)
    }
}

export const deletePlace = async(req,res)=>{
    try{
        const {id}= req.params
        const location = await placeModel.findById(id)
        fs.unlink(`uploads/${location.images}`,()=>{})
        await placeModel.findByIdAndDelete(id)
        
        res.json({message:"place deleted"})

    }catch(error){
        console.log(error)
    }
}


export const updatePlaces = async(req,res)=>{
    try{
        const {id} = req.params
        const updateData = req.body
        await placeModel.findByIdAndUpdate(id,updateData,{new:true})

    }catch(error){
        console.log(error)
    }
}



