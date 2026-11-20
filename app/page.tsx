
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F6F1] text-[#39372F]">
      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-100/60 blur-[120px]" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-100/60 blur-[130px]" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-yellow-100/50 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-12">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-4 py-2 text-sm font-medium text-amber-700 shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            A little space for big ideas
          </div>

          <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Notely
            <span className="text-amber-500">.</span>
            <br />
            Your Thoughts,
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
              Organized.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-stone-500">
            Capture your thoughts, organize your ideas, and keep
            everything important in one place. Notely makes
            note-taking simple, seamless, and effortless.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/login"
              className="group inline-flex items-center gap-3 rounded-full bg-amber-500 px-9 py-4 text-lg font-semibold text-white shadow-xl shadow-stone-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-500 hover:text-[#39372F] hover:shadow-amber-200/60"
            >
              Start Now
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}

<div className="relative z-10 mx-auto w-full max-w-xl">

  {/* Ambient glow */}
  <div className="absolute -inset-8 rounded-full bg-amber-200/30 blur-[80px]" />

  {/* Main image frame */}
  <div className="group relative overflow-hidden rounded-[32px] border border-white/80 bg-white/60 p-3 shadow-[0_30px_90px_rgba(120,90,40,0.12)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(120,90,40,0.18)]">

    {/* Image container */}
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-amber-50 via-white to-yellow-50">

      <Image
        src="/l4.jpg"
        alt="Notely note-taking illustration"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-100/10 via-transparent to-white/20" />
    </div>

    {/* Bottom accent */}
    <div className="absolute bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-amber-300/70 opacity-70" />

  </div>

  {/* Decorative floating glow */}
  <div className="absolute -right-4 top-12 h-20 w-20 rounded-full bg-yellow-200/40 blur-2xl" />
  <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-orange-200/30 blur-2xl" />

</div>
      </div>
    </main>
  );
}
