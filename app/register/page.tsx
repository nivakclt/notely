
"use client"

import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function Register() {

    const router = useRouter()

    const [user, setUser] = useState({
        name: "", email: "", password: ""
    })

    const handleRegister = async () => {
        console.log(user)
        const { name, email, password } = user
        if (!name || !email || !password) {
            toast.error("Enter Valid Inputs!!")
        }
        else {
            const response = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(user)
            })
            console.log(response)
            const res = await response.json()
            console.log(res)
            if (response.status === 201) {

                toast.success("Registration Successfull!!")
                router.push('/login')
            }
            else {
                toast.error("Registration Failed!!")
            }
            setUser({
                name:"",email:"",password:""
            })
        }
    }

    return (
        <>
            <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F7F6F1] px-4 py-12">

                {/* AMBIENT BACKGROUND */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-100/60 blur-[120px]" />
                    <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-100/60 blur-[130px]" />
                    <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-yellow-100/50 blur-[120px]" />
                </div>

                {/* REGISTER CARD */}
                <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[28px] border border-white/80 bg-white/65 p-7 shadow-[0_20px_70px_rgba(120,100,50,0.10)] backdrop-blur-2xl transition-all duration-300 sm:p-10">

                    {/* TOP ACCENT */}
                    <div className="absolute left-10 right-10 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200" />

                    {/* HEADING */}
                    <div className="mb-9 mt-3 text-center">
                        <Link href="/" className="inline-block text-2xl font-extrabold tracking-tight text-[#39372F]">
                            notely<span className="text-amber-500">.</span>
                        </Link>

                        <h1 className="mt-7 text-3xl font-extrabold tracking-tight text-[#39372F] sm:text-4xl">
                            Create Account<span className="text-amber-500">.</span>
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-stone-400">
                            Create your little space for thoughts and ideas.
                        </p>
                    </div>

                    {/* INPUT FIELDS */}
                    <div>

                        <div className="mb-5 w-full">
                            <input
                                type="text"
                                onChange={(e) => { setUser({ ...user, name: e.target.value }) }}
                                placeholder="Name"
                                className="w-full rounded-xl border border-[#EAE5D8] bg-white/70 px-4 py-4 text-sm text-[#39372F] placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100/70"
                            />
                        </div>

                        <div className="mb-5 w-full">
                            <input
                                type="email"
                                onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                                placeholder="Email"
                                className="w-full rounded-xl border border-[#EAE5D8] bg-white/70 px-4 py-4 text-sm text-[#39372F] placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100/70"
                            />
                        </div>

                        <div className="mb-7 w-full">
                            <input
                                type="password"
                                onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                                placeholder="Password"
                                className="w-full rounded-xl border border-[#EAE5D8] bg-white/70 px-4 py-4 text-sm text-[#39372F] placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100/70"
                            />
                     </div>
                                {/* ACTION BUTTONS */}
                                <div className="flex flex-col gap-5">

                                    <button
                                        onClick={handleRegister}
                                        className="w-full rounded-xl bg-[#39372F] p-3.5 text-sm font-semibold text-white shadow-md shadow-stone-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-500 hover:text-[#39372F] hover:shadow-amber-200/50 active:scale-[0.98]"
                                    >
                                        Register
                                    </button>

                                    <p className="text-center text-sm text-stone-500">
                                        Already a user?{" "}
                                        <Link
                                            href="/login"
                                            className="font-semibold text-amber-600 transition-colors hover:text-amber-700 hover:underline"
                                        >
                                            Login here
                                        </Link>
                                    </p>

                                </div>

                    </div>

                    {/* FOOTER */}
                    <p className="mt-9 text-center text-xs font-medium tracking-wide text-stone-400">
                        A little space for big ideas.©Notely
                    </p>

                </div>

            </div>
        </>
    )
}
