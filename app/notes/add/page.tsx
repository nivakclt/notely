"use client"

import { useSession } from "next-auth/react"
import { useState } from "react"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"
import { FaX } from "react-icons/fa6"

export default function AddNote() {

    const session = useSession()
    const [noteDetails,setNoteDetails] =useState({
        title:"",description:"",color:"",userMail:session?.data?.user?.email||""
        })

        if(session?.status === "unauthenticated"){
           redirect("/login")
        }
        if(session?.status === "loading"){
            return (
            <div className="min-h-screen flex items-center justify-center bg-[#f8f7f2]">
                <p className="text-amber-600 font-medium animate-pulse">
                    Loading your notes...
                </p>
            </div>
        )
        }

    const handleReset = () =>{
        setNoteDetails({
                    title:"",description:"",color:"",userMail:session?.data?.user?.email
                })
    }

     const handleSubmit = async () =>{
        console.log(noteDetails)
        const{title,description,color,userMail}=noteDetails
        if(!title || !description ||!color ||!userMail){
            toast.error("Enter Valid Inputs!!")
            return
        }
        else{
            const response = await fetch('/api/notes',{
                method:'POST',
                body:JSON.stringify(noteDetails)
            })
            if(response.status === 201){
                toast.success('Note Aadded Successfully!')
                handleReset()
                redirect('/notes')
            }
            else{
                toast.error("Adding Note Failed !")

            }
        }
     }

    return (
        <main className="relative w-full min-h-screen flex justify-center items-center overflow-hidden bg-[#F7F6F1] p-3 text-[#39372F]">

            {/* Background decoration */}
            <div className="fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-100/60 blur-[120px] pointer-events-none" />
            <div className="fixed top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-violet-100/60 blur-[130px] pointer-events-none" />
            <div className="fixed -bottom-40 left-1/3 w-[450px] h-[450px] rounded-full bg-yellow-100/50 blur-[120px] pointer-events-none" />

            {/* Add Note Card */}
            <div className="relative z-10 w-full max-w-lg rounded-[28px] border border-white/80 bg-white/65 backdrop-blur-2xl p-6 sm:p-9 shadow-[0_20px_60px_rgba(70,60,30,0.09)]">

                {/* Top accent */}
                <div className="absolute top-0 left-10 right-10 h-[3px] rounded-b-full bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200" />

                {/* Heading */}
                <div className="flex justify-between items-start mb-8">

                    <div>

                        <h1 className="text-3xl font-extrabold text-[#39372F] mt-3">
                            Add Note<span className="text-amber-400">.</span>
                        </h1>

                        <p className="text-sm text-stone-500 mt-2">
                            Capture a thought before it disappears.
                        </p>
                    </div>

                    <button onClick={()=>{
                        handleReset()
                        redirect('/notes')
                    }}
                        className="w-10 h-10 rounded-xl border border-stone-200 bg-white/70 flex items-center justify-center text-stone-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
                        <FaX className="text-sm" />
                    </button>

                </div>

                {/* Sticky Note Form */}
<div className={`relative ${noteDetails.color === "sky" ? "bg-sky-100" : noteDetails.color === "green" ? "bg-green-100" : noteDetails.color === "orange" ? "bg-orange-100" : "bg-[#FFF2B8]"} rounded-[5px_5px_16px_5px] p-6 sm:p-7 shadow-[4px_7px_0px_rgba(180,150,65,0.13),8px_15px_30px_rgba(90,75,35,0.12)]`}>
                    {/* Folded corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#E9D68D] opacity-60 [clip-path:polygon(0_0,100%_100%,100%_0)]" />

                    {/* Themes */}
                    <div className="flex justify-between items-center mb-7">

                        <span className="text-sm font-bold text-[#554B32]">
                            Choose a theme
                        </span>

                        <div className="flex items-center gap-3">

                            <span
                            onClick={() => {setNoteDetails({...noteDetails, color: "yellow"})}}
                             className={noteDetails.color == 'yellow'
        ? "inline-block w-5 h-5 border-2 bg-yellow-300 rounded-full"
        : "inline-block w-5 h-5 border bg-yellow-300 rounded-full"}/>

                           <span
                            onClick={() => {setNoteDetails({...noteDetails, color: "sky"})}}
                             className={noteDetails.color == 'sky'
        ? "inline-block w-5 h-5 border-2 bg-sky-300 rounded-full"
        : "inline-block w-5 h-5 border bg-sky-300 rounded-full"} />

                            <span onClick={() => {setNoteDetails({...noteDetails, color: "green"})}}
 className={noteDetails.color == 'green'
        ? "inline-block w-5 h-5 border-2 bg-green-300 rounded-full"
        : "inline-block w-5 h-5 border bg-green-300 rounded-full"}
                        />

                            <span
                            onClick={() => {setNoteDetails({...noteDetails, color: "orange"})}}
 className={noteDetails.color == 'orange'
        ? "inline-block w-5 h-5 border-2 bg-orange-300 rounded-full"
        : "inline-block w-5 h-5 border bg-orange-300 rounded-full"}
                        />

                        </div>

                    </div>

                    {/* Title */}
                    <div className="space-y-2 mb-6">

                        <label className="block text-sm font-bold text-[#554B32]">
                            Title
                        </label>

                         <input
                            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-amber-200/70 outline-none text-[#39372F] placeholder:text-stone-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200/50 transition-all"
                         value={noteDetails.title}
                        type="text"
                        onChange={(e) => setNoteDetails({...noteDetails,title: e.target.value})}/>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">

                        <label className="block text-sm font-bold text-[#554B32]">
                            Description
                        </label>

                        <textarea
                        value={noteDetails.description}
                        name="description"
                            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-amber-200/70 outline-none text-[#39372F] placeholder:text-stone-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200/50 transition-all resize-none"
                        onChange={(e) => setNoteDetails({...noteDetails,description: e.target.value})} />

                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end mt-6">

                        <button onClick={handleSubmit} className="bg-[#39372F] text-white px-7 py-3 rounded-xl text-sm font-bold shadow-lg shadow-stone-400/20 hover:bg-amber-500 hover:text-[#39372F] hover:-translate-y-1 transition-all duration-300">
                            Save Note →
                        </button>

                    </div>

                </div>
            </div>

        </main>
    )
}