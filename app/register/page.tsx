"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter()

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const{name,email,password}=user
    if(!name || !email || !password){
      toast.error("Enter Valid Inputs")
    }else{
      const response = await fetch("/api/register",{
        method:"POST",
        body:JSON.stringify(user)
      })
      console.log(response)
      const res = await response.json()
      console.log(res)
      if(response.status===201){
        toast.success("Registration Success")
        router.push('/login')
      }
      else{
        toast.error("Registration Failed!!")
      }
      setUser({
        name:"",email:"",password:""
      })

    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f4ff] px-5 py-10">

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-purple-900 bg-white p-8 shadow-2xl shadow-purple-100 sm:p-10">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-[#21104f]">
            Create Account
          </h1>
        </div>

        <form className="space-y-5" onSubmit={handleRegister}>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={user.name}
              onChange={(e) =>
                setUser({ ...user, name: e.target.value })
              }
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              placeholder="Create a password"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-purple-700 py-3.5 font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-800"
          >
            Create Account →
          </button>

        </form>

        <p className="mt-7 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-purple-700 hover:text-purple-900"
          >
            Sign In
          </Link>
        </p>

      </div>
    </main>
  );
}