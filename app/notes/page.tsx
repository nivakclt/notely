"use client"

import { signOut, useSession } from "next-auth/react"
import {
    FaEdit,
    FaUser,
    FaPowerOff,
    FaTrash,
    FaPlus,
    FaRegStickyNote
} from "react-icons/fa"
import { CiCalendar } from "react-icons/ci"
import { redirect } from "next/navigation"
import Link from "next/link"

export default function Notes() {

    const { session } = useSession()
    console.log(session)
    if(session?.status === "unauthenticated"){
               redirect("/login")
    }

    if (session?.status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f8f7f2]">
                <p className="text-amber-600 font-medium animate-pulse">
                    Loading your notes...
                </p>
            </div>
        )
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#F7F6F1] text-[#39372F]">

            {/* Background decoration */}
            <div className="fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-100/60 blur-[120px] pointer-events-none" />

            <div className="fixed top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-violet-100/60 blur-[130px] pointer-events-none" />

            <div className="fixed -bottom-40 left-1/3 w-[450px] h-[450px] rounded-full bg-yellow-100/50 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-8">

                {/* Navbar */}
                <header className="flex justify-between items-center px-5 sm:px-7 py-4 rounded-2xl border border-white/80 bg-white/65 backdrop-blur-2xl shadow-[0_8px_35px_rgba(70,60,30,0.06)]">

                    <Link href="/notes" className="text-2xl font-extrabold tracking-tight text-[#39372F]">
                        notely<span className="text-amber-500">.</span>
                    </Link>

                    <div className="flex items-center gap-4 sm:gap-6">

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#FFF0B5] flex items-center justify-center text-amber-700">
                                <FaUser />
                            </div>

                            <div className="hidden sm:block">
                                <p className="text-sm font-bold text-[#39372F]">
                                    {session?.data?.user?.name}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => signOut()}
                            title="Logout"
                            className="w-10 h-10 rounded-xl border border-stone-200 bg-white/70 flex items-center justify-center text-stone-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
                        >
                            <FaPowerOff />
                        </button>

                    </div>
                </header>

                {/* Heading */}
                <section className="mt-14 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-amber-400" />
                            <span className="text-xs font-bold uppercase tracking-[3px] text-amber-700">
                                Your little space
                            </span>
                        </div>

                        <p className="mt-3 text-sm sm:text-base text-stone-500">
                            A little place for all your thoughts and ideas.
                        </p>
                    </div>

                </section>
                {/* Notes Grid */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

    {/* Dummy Sticky Note */}
    <article className="relative group min-h-[260px] p-6 flex flex-col justify-between bg-[#FFF2B8] rotate-[-1deg] rounded-[5px_5px_16px_5px] shadow-[4px_7px_0px_rgba(180,150,65,0.13),8px_15px_30px_rgba(90,75,35,0.12)] hover:rotate-0 hover:-translate-y-2 hover:shadow-[8px_18px_35px_rgba(90,75,35,0.18)] transition-all duration-300">

        <div className="absolute top-0 right-0 w-7 h-7 bg-[#E9D68D] opacity-60 [clip-path:polygon(0_0,100%_100%,100%_0)]" />

        <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#E8CE72] rounded-b-full" />

        <div>
            <div className="flex items-center justify-between mb-7">
                <div className="w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-amber-800/70">
                    <FaRegStickyNote />
                </div>

                <button
                    title="Delete Note"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-amber-900/40 hover:bg-red-500/10 hover:text-red-600 transition-all duration-200"
                >
                    <FaTrash />
                </button>
            </div>

            <h2 className="text-xl font-bold text-[#49412B] mb-3 tracking-tight">
                Sample Note
            </h2>

            <p className="text-sm text-[#746747] leading-7">
                This is a sample note. Your notes will appear here.
            </p>
        </div>

        <div className="flex items-center gap-2 mt-7 pt-4 border-t border-[#D8C77E]/50 text-xs text-[#8D7A4C]">
            <CiCalendar className="text-lg" />
            17 Nov 2026
        </div>

    </article>

    {/* Add Note */}
    <Link
        href="/notes/add"
        className="group min-h-[260px] rounded-2xl border-2 border-dashed border-amber-200 bg-white/35 backdrop-blur-xl flex flex-col justify-center items-center gap-5 hover:bg-white/70 hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(150,120,40,0.10)] transition-all duration-300"
    >
        <div className="w-16 h-16 rounded-2xl bg-[#FFF2C4] flex items-center justify-center text-amber-700 shadow-[4px_5px_12px_rgba(150,120,40,0.12)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <FaPlus className="text-xl" />
        </div>

        <div className="text-center">
            <h3 className="font-bold text-[#554B32]">
                Add New Note
            </h3>

            <p className="text-xs text-stone-400 mt-2">
                Write down a new thought
            </p>
        </div>
    </Link>

</section>
                

                {/* Footer */}
                <footer className="mt-20 pb-5 text-center">
                    <p className="text-xs tracking-wide text-stone-400">
                        A little space for big ideas. © Notely
                    </p>
                </footer>

            </div>
        </main>
    )
}