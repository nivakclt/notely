import mongoose from "mongoose"

// we need too give type so interface created
export interface Iuser{
    name: string,
    email: string,
    password: string,
}

const userSchema = new mongoose.Schema<Iuser>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export default mongoose.models.users || mongoose.model<Iuser>("users",userSchema)