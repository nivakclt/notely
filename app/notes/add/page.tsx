"use client"

import Link from "next/link"
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { Inote } from "@/models/noteModel";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default function Add() {

    const session = useSession()

    const [noteDetails, setNoteDetails] = useState({
        title: "", description: "", color: "", userMail: session?.data?.user?.email
    })

    if (session?.status === "unauthenticated") {
        redirect('/login')
    }

if (session?.status === "loading") {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F7F6F1]">
            <div className="text-center">
                <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-amber-200 border-t-amber-500" />

                <p className="text-xl font-extrabold tracking-tight text-[#39372F]">
                    notely<span className="text-amber-500">.</span>
                </p>

                <p className="mt-2 text-sm text-stone-400">
                    Loading your notes...
                </p>
            </div>
        </div>
    )
}


    const handleReset = () => {
        setNoteDetails({
            title: "", description: "", color: "", userMail: session?.data?.user?.email
        })
    }

    const handleSubmit = async () => {
        console.log(noteDetails)
        const { title, description, color, userMail } = noteDetails
        if (!title || !description || !color || !userMail) {
            toast.error("Enter Valid inputs!!")
        }
        else {
            const response = await fetch('/api/notes', {
                method: "POST",
                body: JSON.stringify(noteDetails)
            })
            if (response.status === 201) {
                toast.success("Note Added!!")
                handleReset()
                redirect('/notes')
            }
            else {
                toast.error("Adding Note Failed!!")
                handleReset()
            }
        }
    }

    return (
        <>
            <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F7F6F1] px-4 py-10">

                {/* AMBIENT BACKGROUND */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-100/60 blur-[120px]" />
                    <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-100/60 blur-[130px]" />
                    <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-yellow-100/50 blur-[120px]" />
                </div>

                {/* ADD NOTE CARD */}
                <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-[28px] border border-white/80 bg-white/65 p-6 shadow-[0_20px_70px_rgba(120,100,50,0.10)] backdrop-blur-2xl transition-all duration-300 sm:p-9">

                    {/* TOP ACCENT */}
                    <div className="absolute left-10 right-10 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200" />

                    {/* HEADER */}
                    <div className="mb-7 mt-2 flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-[#39372F]">
                                Add Note<span className="text-amber-500">.</span>
                            </h1>
                            <p className="mt-2 text-sm text-stone-400">
                                Write down something worth remembering.
                            </p>
                        </div>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="mb-7 flex items-center justify-between">
                        <button
                            onClick={()=>{
                                handleReset()
                                redirect('/notes')   
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200/70 bg-[#FFF2B8] text-2xl text-[#746747] transition-all duration-300 hover:bg-amber-300 hover:text-[#39372F]"
                        >
                            <IoIosClose />
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="rounded-xl bg-[#39372F] px-7 py-2.5 text-sm font-semibold text-white shadow-md shadow-stone-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-500 hover:text-[#39372F] active:scale-[0.98]"
                        >
                            Save
                        </button>
                    </div>

                    {/* THEME SELECTION */}
                    <div className="mb-7 rounded-2xl border border-amber-100/80 bg-[#FBFAF5] p-4">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <span className="text-sm font-semibold text-[#746747]">
                                Themes:
                            </span>

                            <div className="flex items-center gap-4">

                                <span
                                    onClick={() => { setNoteDetails({ ...noteDetails, color: "pink" }) }}
                                    className={noteDetails.color == "pink" ? "h-8 w-8 cursor-pointer rounded-full border-[3px] border-[#39372F] bg-pink-200 shadow-md ring-2 ring-pink-100 transition-all" : "h-8 w-8 cursor-pointer rounded-full border border-pink-300 bg-pink-200 transition-all hover:scale-110"}
                                ></span>

                                <span
                                    onClick={() => { setNoteDetails({ ...noteDetails, color: "yellow" }) }}
                                    className={noteDetails.color == "yellow" ? "h-8 w-8 cursor-pointer rounded-full border-[3px] border-[#39372F] bg-yellow-200 shadow-md ring-2 ring-yellow-100 transition-all" : "h-8 w-8 cursor-pointer rounded-full border border-yellow-300 bg-yellow-200 transition-all hover:scale-110"}
                                ></span>

                                <span
                                    onClick={() => { setNoteDetails({ ...noteDetails, color: "sky" }) }}
                                    className={noteDetails.color == "sky" ? "h-8 w-8 cursor-pointer rounded-full border-[3px] border-[#39372F] bg-sky-200 shadow-md ring-2 ring-sky-100 transition-all" : "h-8 w-8 cursor-pointer rounded-full border border-sky-300 bg-sky-200 transition-all hover:scale-110"}
                                ></span>

                                <span
                                    onClick={() => { setNoteDetails({ ...noteDetails, color: "green" }) }}
                                    className={noteDetails.color == "green" ? "h-8 w-8 cursor-pointer rounded-full border-[3px] border-[#39372F] bg-green-200 shadow-md ring-2 ring-green-100 transition-all" : "h-8 w-8 cursor-pointer rounded-full border border-green-300 bg-green-200 transition-all hover:scale-110"}
                                ></span>

                            </div>
                        </div>
                    </div>

                    {/* NOTE INPUTS */}
                    <div className="space-y-5">

                        <div>
                            <label className="mb-2 block text-sm font-bold text-[#746747]">
                                Title:
                            </label>

                            <input
                                type="text"
                                value={noteDetails.title}
                                onChange={(e) => { setNoteDetails({ ...noteDetails, title: e.target.value }) }}
                                className="w-full rounded-xl border border-[#EAE5D8] bg-white/70 px-4 py-3.5 text-sm text-[#39372F] outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100/70"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-bold text-[#746747]">
                                Description:
                            </label>

                            <textarea
                                name=""
                                value={noteDetails.description}
                                onChange={(e) => { setNoteDetails({ ...noteDetails, description: e.target.value }) }}
                                id=""
                                className="min-h-[180px] w-full resize-y rounded-xl border border-[#EAE5D8] bg-white/70 px-4 py-3.5 text-sm leading-6 text-[#39372F] outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100/70"
                            ></textarea>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
