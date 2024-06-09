// app/utils/database.js

import mongoose from "mongoose"

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://ryansbcho:Password0123@cluster0.th93xps.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch(err){
        console.log("Failure: Not connected to MongoDB")
        throw new Error()
    }
}

export default connectDB
