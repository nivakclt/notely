import Link from "next/link";

export default function Login() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f4ff] px-5 py-10">
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-purple-900 bg-white p-8 shadow-2xl shadow-purple-100">

        {/* Logo */}
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          
        </Link>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-[#21104f]">
            Welcome Back!
          </h1>
        </div>

        {/* Login Form */}
        <form className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
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
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-purple-700 py-3.5 font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-800"
          >
            Login →
          </button>

        </form>

        {/* Register Link */}
        <p className="mt-7 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-purple-700 hover:text-purple-900"
          >
            Create Account
          </Link>
        </p>

      </div>
    </main>
  );
}
