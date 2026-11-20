import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="notely-page relative min-h-screen overflow-hidden text-[#39352D]">

      {/* FLOATING DOODLES */}
      <div className="doodle-layer pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <span className="doodle absolute left-[7%] top-[13%]">✳</span>
        <span className="doodle-reverse absolute right-[9%] top-[15%]">✿</span>
        <span className="doodle absolute left-[4%] top-[48%]">✧</span>
        <span className="doodle-slow absolute bottom-[10%] right-[15%]">✦</span>
        <span className="doodle-reverse absolute right-[38%] top-[35%]">·</span>
      </div>

      {/* PAPER BACKGROUND */}
      <div className="paper-grain pointer-events-none fixed inset-0 z-0" />

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-[#ded5c2]/60 bg-[#F7F4EA]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

          <Link href="/" className="brand-logo">
            notely<span>.</span>
          </Link>

          <div className="hidden items-center gap-8 text-[13px] font-semibold tracking-wide text-stone-600 md:flex">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#testimonials" className="nav-link">Stories</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative z-10 mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 lg:px-12">

        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-3 border-b border-[#d8cba9] pb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9c7a39]">
            <span className="h-2 w-2 rounded-full bg-[#c99c4d]" />
            A little space for big ideas
          </div>

          <h1 className="hero-heading max-w-2xl text-6xl font-extrabold leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
            Notely<span className="text-[#c59a4e]">.</span>
            <br />
            Your Thoughts,
            <br />
            <span className="hero-serif">Organized.</span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-[#817967] sm:text-lg">
            Capture your thoughts, organize your ideas, and keep
            everything important in one place. Notely makes
            note-taking simple, seamless, and effortless.
          </p>

          <div className="mt-10 flex items-center gap-2 rounded-4xl">
            <Link href="/login" className="primary-paper-button">
              Start Now <span>→</span>
            </Link>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative z-10 mx-auto w-full max-w-xl">

          <div className="hero-orbit absolute -inset-8 rounded-full" />

          <div className="hero-paper-frame">
            <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#eee5d2]">
              <Image
                src="/l4.jpg"
                alt="Notely note-taking illustration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-3 transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>

            <div className="hero-paper-label">
              <span>01 / YOUR LITTLE WORKSPACE</span>
              <span>NOTELY STUDIO</span>
            </div>
          </div>

          {/* FLOATING PAPER OBJECTS */}
          <div className="floating-paper paper-note-one">
            <span>little things</span>
            <strong>matter.</strong>
            <span className="paper-scribble">〰</span>
          </div>

          <div className="floating-paper paper-note-two">
            <span className="paper-star">✳</span>
            <span>one thought</span>
            <span>at a time.</span>
          </div>

          <div className="floating-paper paper-clip">⌁</div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 scroll-mt-24 px-6 py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">

          <div className="about-art">
            <div className="about-back-sheet" />

            <div className="about-main-sheet">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a1844c]">
                A note to yourself
              </span>

              <h3 className="about-handwriting mt-12">
                Make space
                <br />
                for the things
                <br />
                that matter.
              </h3>

              <div className="mt-12 h-px w-24 bg-[#d8c59b]" />

              <p className="mt-5 text-xs tracking-widest text-[#a79a80]">
                YOUR THOUGHTS BELONG HERE
              </p>

              <span className="absolute bottom-8 right-9 text-3xl text-[#c69d57]">✳</span>
            </div>

            <div className="about-paper-shadow" />
            <span className="about-decoration">✦</span>
          </div>

          <div>

            <h2 className="section-heading">
              A little space
              <br />
              for <span>every thought.</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-8 text-[#817967]">
              Notely is a simple and organized note-taking application
              designed to help you capture your everyday thoughts,
              ideas, reminders and important information.
            </p>

            <p className="mt-5 max-w-lg text-base leading-8 text-[#817967]">
              Create notes, update them whenever you want, and keep
              everything in one place with a clean and comfortable
              experience.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative z-10 scroll-mt-24 px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-20 max-w-2xl">

            <h2 className="section-heading">
              Simple tools.
              <br />
              <span>Clearer thoughts.</span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-[#817967]">
              Everything you need to keep your thoughts together,
              without making things complicated.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">

            {/* FEATURE 1 */}
            <div className="feature-item">
              <div className="feature-art feature-yellow">
                <div className="mini-notebook">
                  <div className="notebook-binding" />
                  <div className="notebook-lines">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="notebook-pencil">✎</span>
                </div>
                <span className="feature-art-star">✳</span>
              </div>

              <span className="feature-number">01 / WRITE</span>
              <h3>Create Notes</h3>
              <p>
                Quickly write down your thoughts, ideas and important
                reminders whenever inspiration strikes.
              </p>
            </div>

            {/* FEATURE 2 */}
            <div className="feature-item">
              <div className="feature-art feature-pink">
                <div className="edit-sheet">
                  <span className="edit-sheet-line" />
                  <span className="edit-sheet-line short" />
                  <span className="edit-sheet-line" />
                  <div className="edit-pencil">✎</div>
                </div>
                <span className="feature-art-star">♡</span>
              </div>

              <span className="feature-number">02 / REFINE</span>
              <h3>Edit Anytime</h3>
              <p>
                Update your notes whenever your ideas change.
                Keep your information fresh and useful.
              </p>
            </div>

            {/* FEATURE 3 */}
            <div className="feature-item">
              <div className="feature-art feature-green">
                <div className="stacked-paper">
                  <div className="stack-sheet stack-back" />
                  <div className="stack-sheet stack-middle" />
                  <div className="stack-sheet stack-front">
                    <span>IDEAS</span>
                    <span>THOUGHTS</span>
                    <span>REMINDERS</span>
                  </div>
                </div>
                <span className="feature-art-star">✦</span>
              </div>

              <span className="feature-number">03 / ORGANIZE</span>
              <h3>Stay Organized</h3>
              <p>
                Keep your notes together in one place and make
                your everyday information easier to manage.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative z-10 scroll-mt-24 px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">
            <h2 className="section-heading">
              Words from the
              <br />
              <span>other side of the page.</span>
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">

            <article className="quote-paper quote-yellow">
              <span className="quote-mark">“</span>
              <p>
                A simple and lovely place to keep all my daily
                thoughts and reminders organized.
              </p>
              <div className="quote-author">
                <span className="quote-avatar">A</span>
                <div>
                  <strong>Ananya</strong>
                  <small>Sample testimonial</small>
                </div>
              </div>
            </article>

            <article className="quote-paper quote-white">
              <span className="quote-mark">“</span>
              <p>
                I love the clean design. It makes writing and
                managing my notes feel effortless.
              </p>
              <div className="quote-author">
                <span className="quote-avatar avatar-pink">R</span>
                <div>
                  <strong>Rahul</strong>
                  <small>Sample testimonial</small>
                </div>
              </div>
            </article>

            <article className="quote-paper quote-lavender">
              <span className="quote-mark">“</span>
              <p>
                Finally, a comfortable place to collect my ideas
                without making things complicated.
              </p>
              <div className="quote-author">
                <span className="quote-avatar avatar-purple">M</span>
                <div>
                  <strong>Meera</strong>
                  <small>Sample testimonial</small>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#ded5c2] bg-[#eee9dc] px-6 py-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 sm:flex-row">

          <div>
            <Link href="/" className="brand-logo">
              notely<span>.</span>
            </Link>
            <p className="mt-2 text-xs text-[#918774]">
              A little space for big ideas.
            </p>
          </div>

          

          <p className="text-xs text-[#a49a86]">
            © Notely. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}