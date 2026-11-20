
"use client"

import { useState } from "react"
import Link from "next/link"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"

export default function Login() {

    const [user,setUser]=useState({
        email:"",password:""
    })

    const handleSubmit=async(e:Event)=>{
        e.preventDefault()
        console.log(user)
        const {email,password}=user
        if(email && password){
            const res=await signIn("credentials",{email,password,redirect:false})
            console.log(res)
            if(res?.ok){
                toast.success("Login Successfull!!")
                setTimeout(()=>{
                    window.location.href="/notes"
                },1000)
            }
            else{
                toast.error("Login Failed!!! Invalid Credentials")
                setUser({email:"",password:""})
            }
        }
        else{
            toast.error("Enter Valid Inputs!!")
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

                {/* LOGIN CARD */}
                <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[28px] border border-white/80 bg-white/65 p-7 shadow-[0_20px_70px_rgba(120,100,50,0.10)] backdrop-blur-2xl transition-all duration-300 sm:p-10">

                    {/* TOP ACCENT */}
                    <div className="absolute left-10 right-10 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200" />

                    {/* HEADER */}
                    <div className="mb-9 mt-3 text-center">
                        <Link href="/" className="inline-block text-2xl font-extrabold tracking-tight text-[#39372F]">
                            notely<span className="text-amber-500">.</span>
                        </Link>

                        <h1 className="mt-7 text-3xl font-extrabold tracking-tight text-[#39372F] sm:text-4xl">
                            Welcome Back<span className="text-amber-500">.</span>
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-stone-400">
                            Welcome back to your little space.
                        </p>
                    </div>

                    {/* LOGIN FORM */}
                    <div>
                        <form action="" onSubmit={(e:any)=>{handleSubmit(e)}}>

                            <div className="mb-5 mt-5 w-full">
                                <input
                                    type="email"
                                    value={user.email}
                                    onChange={(e)=>{setUser({...user,email:e.target.value})}}
                                    placeholder="Email"
                                    className="w-full rounded-xl border border-[#EAE5D8] bg-white/70 px-4 py-4 text-sm text-[#39372F] placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100/70"
                                />
                            </div>

                            <div className="mb-7 w-full">
                                <input
                                    type="password"
                                    value={user.password}
                                    onChange={(e)=>{setUser({...user,password:e.target.value})}}
                                    placeholder="Password"
                                    className="w-full rounded-xl border border-[#EAE5D8] bg-white/70 px-4 py-4 text-sm text-[#39372F] placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100/70"
                                />
                            </div>
                            {/* ACTION BUTTONS */}
                            <div className="flex flex-col gap-5">

                                <button
                                    className="w-full rounded-xl bg-[#39372F] p-3.5 text-sm font-semibold text-white shadow-md shadow-stone-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-500 hover:text-[#39372F] hover:shadow-amber-200/50 active:scale-[0.98]"
                                >
                                    Login
                                </button>

                                <p className="text-center text-sm text-stone-500">
                                    New user?{" "}
                                    <Link
                                        href="/register"
                                        className="font-semibold text-amber-600 transition-colors hover:text-amber-700 hover:underline"
                                    >
                                        Register here
                                    </Link>
                                </p>

                            </div>

                        </form>
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
