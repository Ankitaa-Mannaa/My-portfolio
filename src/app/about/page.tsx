import { portfolioData } from "@/data/portfolio";
import Lanyard from "@/components/Lanyard";

export default function AboutPage() {
  const { personal, education, experience } = portfolioData;

  return (
    <div className="relative space-y-6">
      <div className="pointer-events-none fixed inset-0 z-[25] hidden translate-x-50 lg:block">
        <div className="pointer-events-auto h-full w-full">
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            anchor={[0.75, 4, 0]}
          />
        </div>
      </div>
      <section className="max-w-5xl space-y-5">
        <div>
          <h1 className="mt-2 text-4xl font-black leading-none text-[#1f1b4d] md:text-6xl">
            About
          </h1>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#6d28d9]/18 bg-white/78 p-6 shadow-[0_24px_55px_-36px_rgba(49,46,129,0.85)] backdrop-blur-md md:p-7">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7c3aed] via-[#facc15] to-[#0f766e]" />
          <div className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-[#facc15]/18 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 left-10 h-32 w-32 rounded-full bg-[#0f766e]/12 blur-3xl" />

          <p className="relative max-w-4xl text-xl font-black leading-relaxed text-[#242044] md:text-2xl">
            <span className="font-serif italic">
              I am a Delhi-based developer who did not exactly choose code at first.
              Luck pushed me into it, curiosity kept me there, and somewhere between
              bugs, builds, and late-night ideas, we went from strangers to lovers.
            </span>
          </p>

          <div className="relative mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-[#7c3aed]/18 bg-[#ede9fe]/70 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7c3aed]">
                Home
              </p>
              <p className="mt-2 text-sm font-bold leading-relaxed text-[#27233d]/82">
                Rooted in India, based in Delhi, building my way through ideas
                that feel useful, thoughtful, and a little bit magical.
              </p>
            </div>

            <div className="rounded-2xl border border-[#facc15]/28 bg-[#fff7d6]/72 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a6500]">
                Creative Side
              </p>
              <p className="mt-2 text-sm font-bold leading-relaxed text-[#27233d]/82">
                When I am not coding, I like to paint, observe colors, and turn
                quiet little details into something expressive.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0f766e]/18 bg-[#ecfdf5]/78 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0f766e]">
                Travel
              </p>
              <p className="mt-2 text-sm font-bold leading-relaxed text-[#27233d]/82">
                I have travelled through almost every part of India, and one day
                I want to take that same curiosity overseas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#7c3aed]">
              Career Path
            </p>
            <h2 className="mt-1 text-3xl font-black text-[#1f1b4d] md:text-4xl">
              Experience
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-[#7c3aed]/45 via-[#facc15]/55 to-transparent sm:block" />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {experience.map((item, index) => (
            <article
              key={`${item.role}-${item.company}`}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#6d28d9]/18 bg-white/82 p-6 shadow-[0_22px_45px_-32px_rgba(49,46,129,0.75)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:border-[#7c3aed]/35 hover:shadow-[0_26px_55px_-34px_rgba(76,29,149,0.85)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7c3aed] via-[#facc15] to-[#0f766e]" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#facc15]/14 blur-2xl transition group-hover:bg-[#7c3aed]/14" />

              <div className="relative flex items-start gap-4">
                <span className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#7c3aed]/25 bg-[#ede9fe]/85 text-sm font-black text-[#312e81] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_24px_-18px_rgba(76,29,149,0.8)]">
                  0{index + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-black leading-tight text-[#1f1b4d]">
                    {item.role}
                  </h3>
                  <p className="mt-2 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-[#0f766e]/18 bg-[#ecfdf5]/80 px-3 py-1 text-sm font-bold text-[#31524d]">
                    <span>{item.company}</span>
                    <span className="text-[#7c3aed]/55">|</span>
                    <span>{item.period}</span>
                  </p>
                </div>
              </div>

              <ul className="relative mt-5 space-y-3 text-[0.95rem] leading-relaxed text-[#27233d]/82">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15] shadow-[0_0_0_4px_rgba(250,204,21,0.18),0_0_14px_rgba(124,58,237,0.35)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0f766e]">
              Academic Base
            </p>
            <h2 className="mt-1 text-3xl font-black text-[#1f1b4d] md:text-4xl">
              Education
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-[#0f766e]/45 via-[#facc15]/55 to-transparent sm:block" />
        </div>

        <div className="grid gap-5">
          {education.map((item) => (
            <article
              key={item.degree}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#0f766e]/18 bg-white/82 p-6 shadow-[0_22px_45px_-32px_rgba(15,118,110,0.65)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:border-[#0f766e]/35 hover:shadow-[0_26px_55px_-34px_rgba(15,118,110,0.8)] md:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0f766e] via-[#facc15] to-[#7c3aed]" />
              <div className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-[#0f766e]/14 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 left-12 h-32 w-32 rounded-full bg-[#facc15]/16 blur-3xl" />

              <div className="relative grid gap-5 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl border border-[#0f766e]/24 bg-[#ecfdf5]/85 text-2xl font-black text-[#0f766e] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_12px_28px_-20px_rgba(15,118,110,0.8)]">
                  AI
                </span>

                <div className="min-w-0">
                  <h3 className="text-2xl font-black leading-tight text-[#1f1b4d]">
                    {item.degree}
                  </h3>
                  <p className="mt-3 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-[#7c3aed]/18 bg-[#ede9fe]/75 px-3 py-1 text-sm font-bold text-[#352f68]">
                    <span>{item.institute}</span>
                    <span className="text-[#0f766e]/55">|</span>
                    <span>{item.year}</span>
                  </p>
                </div>

                <div className="relative rounded-2xl border border-[#facc15]/30 bg-[#fff7d6]/72 px-5 py-4 md:min-w-36 md:text-center">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a6500]">
                    Score
                  </p>
                  <p className="mt-1 text-2xl font-black text-[#1f1b4d]">
                    {item.details.replace("CGPA: ", "")}
                  </p>
                  <p className="text-xs font-bold text-[#27233d]/62">CGPA</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
