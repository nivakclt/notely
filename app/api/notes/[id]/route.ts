import { connectDB } from "@/lib/mongodb";
import notes from '@/models/noteModel'
import { NextResponse,NextRequest } from "next/server";


//delete note with id
export async function DELETE(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
        await connectDB()
        const {id}=await params
        const deletedNote=await notes.findByIdAndDelete(id)
        return NextResponse.json(deletedNote,{status:200})
    }
    catch(err){
        console.log(err)
        return NextResponse.json("Something Went Wrong!",{status:500})
    }
}

//note details with id
export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
        await connectDB()
        const {id}=await params
        const noteDetails=await notes.findById(id)
        return NextResponse.json(noteDetails,{status:200})
    }
    catch(err){
        console.log(err)
        return NextResponse.json("Something Went Wrong!",{status:500})
    }
}

//update note details with id
export async function PUT(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
        await connectDB()
        const {id}=await params
        const reqBody=await req.json()
        const noteDetails=await notes.findByIdAndUpdate(id,reqBody,{new:true})
        return NextResponse.json(noteDetails,{status:200})
    }
    catch(err){
        console.log(err)
        return NextResponse.json("Something Went Wrong!",{status:500})
    }
}