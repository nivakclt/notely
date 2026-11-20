
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
                name: "", email: "", password: ""
            })
        }
    }

    return (
        <main className="notely-login relative min-h-screen overflow-hidden">

            {/* BACKGROUND */}
            <div className="login-background absolute inset-0" />
            <div className="login-grain absolute inset-0 pointer-events-none" />

            <div className="relative z-10 mx-auto grid min-h-screen max-w-[1440px] items-center gap-8 px-5 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-16">

                {/* LEFT: STATIONERY SCENE */}
                <section className="login-showcase relative mx-auto w-full max-w-[650px]">

                    <Link href="/" className="login-brand inline-block">
                        notely<span>.</span>
                    </Link>

                    <div className="mt-8">
                        <p className="login-eyebrow">A FRESH PAGE BEGINS HERE</p>

                        <h1 className="login-display mt-4">
                            Make room
                            <br />
                            for your
                            <br />
                            <span>next idea.</span>
                        </h1>

                        <p className="mt-5 max-w-md text-sm leading-7 text-[#837763]">
                            Start your own little collection of thoughts,
                            plans and possibilities. Every great idea
                            starts somewhere.
                        </p>
                    </div>

                    {/* STATIONERY DESK */}
                    <div className="stationery-scene relative mx-auto mt-8">

                        <div className="desk-back-paper" />

                        {/* OPEN NOTEBOOK */}
                        <div className="desk-notebook">
                            <div className="notebook-spine" />

                            <div className="notebook-page notebook-left-page">
                                <span className="notebook-small-title">A NEW CHAPTER</span>

                                <h3>
                                    Start with
                                    <br />
                                    a little idea...
                                </h3>

                                <div className="notebook-writing">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <span className="notebook-page-number">01</span>
                            </div>

                            <div className="notebook-page notebook-right-page">
                                <span className="notebook-small-title">YOUR OWN SPACE</span>

                                <p className="notebook-script">
                                    Dream it.
                                    <br />
                                    Write it.
                                    <br />
                                    Remember it.
                                </p>

                                <div className="notebook-flower">✳</div>

                                <span className="notebook-page-number">02</span>
                            </div>
                        </div>

                        {/* STICKY NOTE */}
                        <div className="desk-sticky-note">
                            <span>dear future me,</span>
                            <strong>keep creating.</strong>
                            <span className="sticky-heart">♡</span>
                        </div>

                        {/* PAPER CLIP */}
                        <div className="desk-paperclip">
                            <div />
                        </div>

                        {/* PENCIL */}
                        <div className="desk-pencil">
                            <div className="pencil-tip" />
                            <div className="pencil-body" />
                            <div className="pencil-end" />
                        </div>

                        {/* DECORATIVE FLOWERS */}
                        <span className="desk-flower flower-one">✿</span>
                        <span className="desk-flower flower-two">✳</span>

                        {/* SMALL PAPER */}
                        <div className="desk-mini-note">
                            <span>one step at a time</span>
                            <span>your story starts here.</span>
                        </div>

                    </div>

                    <div className="mt-7 flex items-center gap-3">
                        <span className="h-px w-12 bg-[#c8ad7c]" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b896b]">
                            A little space for big ideas.
                        </p>
                    </div>

                </section>

                {/* RIGHT: REGISTER FORM */}
                <section className="login-form-area relative mx-auto w-full max-w-[440px]">

                    {/* LAYERED PAPER */}
                    <div className="login-form-shadow" />
                    <div className="login-form-shadow-two" />

                    <div className="login-form-paper relative">

                        <div className="login-paper-tape" />

                        {/* FORM HEADER */}
                        <div className="flex items-center justify-between border-b border-[#e8deca] pb-5">
                            <span className="text-[9px] font-extrabold uppercase tracking-[0.23em] text-[#a18a61]">
                                NOTELY / NEW ACCOUNT
                            </span>

                            <span className="text-xl text-[#bd9148]">✳</span>
                        </div>

                        <div className="mb-8 mt-8">
                            <p className="text-xs font-semibold text-[#a58a5b]">
                                Let's get you started!
                            </p>

                            <h2 className="login-form-heading mt-3">
                                Create
                                <br />
                                account<span>.</span>
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-[#958a77]">
                                A little place to keep everything that matters.
                            </p>
                        </div>

                        {/* REGISTER FIELDS */}
                        <div>

                            <div className="mb-6">
                                <label htmlFor="register-name" className="login-label">
                                    Your Name
                                </label>

                                <input
                                    id="register-name"
                                    type="text"
                                    value={user.name}
                                    onChange={(e) => {
                                        setUser({ ...user, name: e.target.value })
                                    }}
                                    placeholder="What should we call you?"
                                    className="login-field"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="register-email" className="login-label">
                                    Email Address
                                </label>

                                <input
                                    id="register-email"
                                    type="email"
                                    value={user.email}
                                    onChange={(e) => {
                                        setUser({ ...user, email: e.target.value })
                                    }}
                                    placeholder="Your email address"
                                    className="login-field"
                                />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="register-password" className="login-label">
                                    Password
                                </label>

                                <input
                                    id="register-password"
                                    type="password"
                                    value={user.password}
                                    onChange={(e) => {
                                        setUser({ ...user, password: e.target.value })
                                    }}
                                    placeholder="Create a password"
                                    className="login-field"
                                />
                            </div>

                            {/* ACTION BUTTON */}
                            <button
                                type="button"
                                onClick={handleRegister}
                                className="login-submit"
                            >
                                <span>Create my account</span>
                                <span className="text-xl">↗</span>
                            </button>

                            <p className="mt-7 text-center text-sm text-[#938875]">
                                Already a user?{" "}
                                <Link
                                    href="/login"
                                    className="font-bold text-[#a17b3c] hover:text-[#765b2f] hover:underline"
                                >
                                    Login here
                                </Link>
                            </p>

                        </div>

                        {/* FOOTER */}
                        <div className="mt-9 flex items-center justify-between border-t border-[#e8deca] pt-5">
                            <span className="text-[9px] font-bold tracking-[0.15em] text-[#aaa08d]">
                                YOUR THOUGHTS, YOUR SPACE
                            </span>

                            <span className="text-lg text-[#c49a58]">♡</span>
                        </div>

                    </div>

                    <p className="mt-8 text-center text-[11px] tracking-wide text-[#a69a85]">
                        A little space for big ideas. © Notely
                    </p>

                </section>

            </div>
        </main>
    )
}
