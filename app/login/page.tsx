"use client"

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

export default function Login() {

    const [user, setUser] = useState({
        email: "", password: ""
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(user)
        const { email, password } = user

        if (email && password) {
            const res = await signIn("credentials", { email, password, redirect: false })
            console.log(res)

            if (res?.ok) {
                toast.success("Login Successfully!!")
                setTimeout(() => {
                    window.location.href = "/notes"
                }, 1000)
            }
            else {
                toast.error('Login Failed!! Invalid Credentials')
                setUser({ email: "", password: "" })
            }
        }
        else {
            toast.error("Enter Valid Inputs!!")
        }
    }

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F6F1] px-5 py-10 text-[#39372F]">

            {/* Background decoration */}
            <div className="fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-100/60 blur-[120px] pointer-events-none" />

            <div className="fixed top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-violet-100/60 blur-[130px] pointer-events-none" />

            <div className="fixed -bottom-40 left-1/3 w-[450px] h-[450px] rounded-full bg-yellow-100/50 blur-[120px] pointer-events-none" />

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md rounded-[28px] border border-white/80 bg-white/65 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(70,60,30,0.09)]">

                {/* Top accent */}
                <div className="absolute top-0 left-10 right-10 h-[3px] rounded-b-full bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200" />

                {/* Logo */}
                <Link href="/" className="mb-10 flex items-center justify-center">
                    <span className="text-3xl font-extrabold tracking-tight text-[#39372F]">
                        notely<span className="text-amber-500">.</span>
                    </span>
                </Link>

                {/* Heading */}
                <div className="mb-9 text-center">

                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-amber-50/70 px-4 py-2 mb-5">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-xs font-bold uppercase tracking-[2px] text-amber-800">
                            Welcome back
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#39372F]">
                        Sign In<span className="text-amber-400">.</span>
                    </h1>

                    <p className="mt-3 text-sm text-stone-500">
                        Your thoughts are waiting for you.
                    </p>

                </div>

                {/* Login Form */}
                <form action="" onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-[#554B32]">
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={user.email}
                            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-amber-100 bg-white/65 px-4 py-3.5 text-sm text-[#39372F] placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100/70"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-[#554B32]">
                            Password
                        </label>

                        <input
                            type="password"
                            value={user.password}
                            onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-amber-100 bg-white/65 px-4 py-3.5 text-sm text-[#39372F] placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100/70"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[#39372F] py-4 font-bold text-white shadow-[0_8px_20px_rgba(60,50,30,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-500 hover:text-[#39372F] hover:shadow-[0_12px_25px_rgba(180,140,40,0.2)]"
                    >
                        Login <span className="ml-2">→</span>
                    </button>

                </form>

                {/* Register Link */}
                <p className="mt-8 text-center text-sm text-stone-500">
                    Don't have an account?{" "}
                    <Link
                        href="/register"
                        className="font-bold text-amber-700 hover:text-amber-900 transition-colors"
                    >
                        Create Account
                    </Link>
                </p>

                {/* Footer */}
                <div className="mt-9 pt-5 border-t border-amber-100/80 text-center">
                    <p className="text-xs tracking-wide text-stone-400">
                        A little space for big ideas. © Notely
                    </p>
                </div>

            </div>
        </main>
    );
}