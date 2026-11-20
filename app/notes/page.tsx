"use client"

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation"
import { FaUser } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { CiCalendarDate } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Note {
    _id: string;
    title: string;
    description: string;
    userMail: string;
    color: string;
    createdAt: string;
    updatedAt: string;
}

export default function Notes() {
    const session = useSession()
    console.log(session)
    const [notes, setNotes] = useState<Note[]>([])

    const getNotes = async () => {
        const response = await fetch('/api/notes')
        const result = await response.json()
        console.log(result)
        setNotes(result.filter((note: any) => note.userMail == session?.data?.user?.email))
    }

    const deleteNote=async(id:any)=>{
        const response=await fetch(`/api/notes/${id}`,{
            method:"DELETE"
        })
        if(response.status===200){
            toast.success("Note Deleted!!")
            getNotes()
        }
        else{
            toast.error("Something Went Wrong!!")
        }
    }   

    console.log(notes)
    useEffect(() => {
        getNotes()
    }, [session])

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


    return (
        <>
            <div className="relative min-h-screen overflow-hidden bg-[#F7F6F1] px-5 py-7 text-[#39372F] md:px-10 lg:px-16">

                {/* AMBIENT BACKGROUND */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-100/60 blur-[120px]" />
                    <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-100/60 blur-[130px]" />
                    <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-yellow-100/50 blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">

                    {/* HEADER */}
                    <div className="mb-12 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-white/80 bg-white/65 px-6 py-5 shadow-sm backdrop-blur-2xl">

                        <div className="flex items-center text-2xl font-extrabold tracking-tight text-[#39372F]">
                            <span className="ms-2">notely<span className="text-amber-500">.</span></span>
                        </div>

                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2 text-sm font-semibold text-stone-600 sm:text-base">
                                <FaUser className="text-amber-400" />
                                {session?.data?.user?.name}
                            </p>

                            <button
                                className="rounded-xl border border-amber-200/70 bg-[#fff2b8] p-3 text-[#040301] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-[#39372F]"
                                onClick={() => signOut()}
                            >
                                <FaPowerOff />
                            </button>
                        </div>
                    </div>

                    {/* NOTES HEADING */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-extrabold tracking-tight text-[#39372F] sm:text-4xl">
                            My Notes<span className="text-amber-500">.</span>
                        </h1>
                        <p className="mt-2 text-sm text-stone-500 sm:text-base">
                            Your thoughts, ideas and everything important in one place.
                        </p>
                    </div>

                    {/* NOTES GRID */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {
                            notes.map((item: any) => (
                                <div
                                    key={item?._id}
                                    className={`bg-${item?.color}-200 group flex min-h-[230px] flex-col justify-between rounded-2xl border border-white/70 p-5 shadow-[0_10px_30px_rgba(120,100,50,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(120,100,50,0.12)]`}
                                >
                                    <div>
                                        <div className="mb-4 flex items-start justify-between gap-3">
                                            <h1 className="break-words text-lg font-bold tracking-tight text-[#39372F]">
                                                {item?.title}
                                            </h1>

                                            <Link
                                                href={`/notes/${item?._id}`}
                                                className="shrink-0 rounded-lg bg-white/50 p-2 text-stone-600 transition-all duration-300 hover:bg-white hover:text-amber-600"
                                            >
                                                <FaEdit />
                                            </Link>
                                        </div>

                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-[#746747]">
                                                Description
                                            </span>
                                            <p className="mt-2 break-words text-sm leading-6 text-[#746747]">
                                                {item?.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-7 flex items-center justify-between border-t border-black/5 pt-4">
                                        <span className="flex items-center gap-2 text-xs font-medium text-stone-500">
                                            <CiCalendarDate className="text-lg" />
                                            {new Date(item?.createdAt).toLocaleString()}
                                        </span>

                                        <button
                                            onClick={()=>{deleteNote(item?._id)}}
                                            className="rounded-lg p-2 text-red-500 transition-all duration-300 hover:bg-red-100 hover:text-red-600"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }

{/* ADD NOTE */}
<Link
    href="/notes/add"
    className="group flex min-h-[230px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-amber-300/70 bg-white/45 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-[#FFF8DB]"
>
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF2B8] text-2xl text-amber-700 shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
        <FaEdit />
    </div>

    <span className="text-base font-bold text-[#746747] transition-colors duration-300 group-hover:text-amber-700">
        New Note
    </span>

    <p className="mt-2 text-xs text-stone-400">
        Add a new thought or idea
    </p>
</Link>


                    </div>

                </div>
            </div>
        </>
    )
}
