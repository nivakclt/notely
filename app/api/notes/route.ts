import { connectDB } from "@/lib/mongodb";
import notes from '@/models/noteModel'
import { NextResponse,NextRequest } from "next/server";


export async function POST(req:NextRequest){
    try{
        await connectDB()
        const body=await req.json()
        const newNote=await notes.create(body)
        return NextResponse.json(newNote,{status:201})
    }
    catch(err){
        console.log(err)
        return NextResponse.json("Something Went Wrong",{status:500})
    }
}


export async function GET(){
    try{
        await connectDB()
        const noteList=await notes.find()
        return NextResponse.json(noteList,{status:200})
    }
    catch(err){
        console.log(err)
        return NextResponse.json("Something Went Wrong",{status:500})
    }
}