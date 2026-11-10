import mongoose from "mongoose"

const connectionString = process.env.CONNECTION_STRING as string

export const connectDB = async()=>{
    try{
         if (!connectionString) {
            throw new Error("CONNECTION_STRING is missing");
        }
        const res = await mongoose.connect(connectionString)
        console.log("DB Connected Successfully")
    }catch(err){
        console.log("DB Connection Failed");
        console.log(err);
        throw err;
    }
}