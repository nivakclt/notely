import mongoose from "mongoose";

const connectionString=process.env.CONNECTION_STRING as string
export const connectDB=async()=>{
    try{
        const res = await mongoose.connect(connectionString)
        console.log(res)
        console.log("DB connected Successfully")
    }catch(err){
        console.log("DB connection failed",err)
        throw err
    }
}