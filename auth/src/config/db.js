import mongoose from 'mongoose';


export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.AUTH_MONGO_URI)
        console.log("Database connected")
    }
    catch(error){
        console.log("Error connecting to DB ",error)
    }
}