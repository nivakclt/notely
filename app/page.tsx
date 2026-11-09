import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#21104f]">
      <div className="relative mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 lg:px-12">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Notely –
            <br />
            Your Thoughts,
            <br />
            <span className="bg-gradient-to-l from-purple-700 to-violet-300 bg-clip-text text-transparent">
              Organized.
            </span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
            Capture your thoughts, organize your ideas, and keep
            everything important in one place. Notely makes
            note-taking simple, seamless, and effortless.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">

            <Link href="/login" className="rounded-full bg-purple-700 px-9 py-4 text-lg font-semibold text-white shadow-xl shadow-purple-200 hover:bg-purple-800">
              Start Now{' ->'}
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-10 mx-auto w-full max-w-2xl">
          <div className="relative aspect-square w-full">
            <Image
              src="/l4.jpg"
              alt="Notely note-taking illustration"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"/>
          </div>
        </div>
      </div>
    </main>
  );
}