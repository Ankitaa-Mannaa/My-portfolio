"use client";

import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const { personal, socialLinks, skillCategories, experience } = portfolioData;
  const hasLinkedIn = socialLinks.linkedin && socialLinks.linkedin !== "#";
  const [firstName, ...remainingNameParts] = personal.name.split(" ");
  const lastName = remainingNameParts.join(" ");

  return (
    <div className="relative">
      <div className="relative z-10 space-y-20 md:space-y-24">
      <section className="relative grid items-center gap-6 overflow-hidden rounded-[2rem] border border-[#312e81]/10 py-6 md:grid-cols-[minmax(0,1.45fr)_minmax(0,0.55fr)] md:py-1">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] md:block">
          <Image
            src="/Woman Working on Laptop in Office.svg"
            alt=""
            aria-hidden="true"
            fill
            loading="eager"
            priority
            className="object-cover object-center opacity-50"
          />
        </div>

        <div className="relative z-10 space-y-5 md:space-y-7">
          <div className="space-y-1 md:space-y-2">
            <p className="text-3xl font-bold leading-tight text-[#312e81] md:text-4xl">
              Hello, I&apos;m
            </p>
            <h1 className="flex flex-nowrap items-end gap-3 whitespace-nowrap text-[85px] font-black leading-[0.9] tracking-tight">
              <span className="bg-gradient-to-b from-[#2f2b68] to-[#2c1f57] bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(49,46,129,0.25)]">
                {firstName}
              </span>
              <span
                className="text-transparent [-webkit-text-stroke:2px_#2f1f63] [text-shadow:0_0_14px_rgba(76,29,149,0.15)]"
                style={{ WebkitTextStroke: "2px #2f1f63" }}
              >
                {lastName}
              </span>
            </h1>
          </div>
          {personal.role ? (
            <p className="font-mono text-base text-black/70 md:text-lg">
              {personal.role}
            </p>
          ) : null}
          {personal.heroPoints?.length ? (
            <p className="inline-flex max-w-3xl rounded-full border border-[#312e81]/20 bg-white/55 px-5 py-2 font-mono text-sm leading-relaxed text-[#312e81] shadow-[0_8px_20px_-16px_rgba(49,46,129,0.55)] md:text-base">
              {personal.heroPoints.join(" | ")}
            </p>
          ) : null}
          <p className="max-w-3xl text-base font-bold leading-relaxed text-[#1f2147] md:text-lg">
            {personal.shortBio}{" "}
            <Link
              href="/about"
              className="inline-block text-[#4c1d95] underline decoration-2 underline-offset-4 transition hover:text-[#312e81]"
            >
              Know more about me
            </Link>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="hero-btn resume-btn"
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
              >
                <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm0 1.5L17.5 7H14zM9 12h6v1.5H9zm0 3h6v1.5H9zm0-6h2.5V10H9z" />
              </svg>
              Resume
            </a>
            <a
              className="hero-btn social-btn social-circle github-btn"
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
              >
                <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 .1.7 2.4 3.4 1.7.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6A4.8 4.8 0 0 1 6.2 9c-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.6 11.6 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.9.1 3.2a4.8 4.8 0 0 1 1.3 3.3c0 4.7-2.8 5.7-5.5 6 .5.4.8 1.1.8 2.3v3.3c0 .4.2.7.8.6A12 12 0 0 0 12 .5" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            {hasLinkedIn ? (
              <a
                className="hero-btn social-btn social-circle linkedin-btn"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21h-4z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            ) : (
              <span
                className="hero-btn social-btn social-circle cursor-not-allowed opacity-60"
                aria-label="LinkedIn unavailable"
                title="LinkedIn unavailable"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21h-4z" />
                </svg>
                <span className="sr-only">LinkedIn unavailable</span>
              </span>
            )}
            <a
              className="hero-btn social-btn social-circle email-btn"
              href={`mailto:${personal.email}`}
              aria-label="Email"
              title="Email"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
              >
                <path d="M3 5h18a1 1 0 0 1 1 1v.6l-10 6.7L2 6.6V6a1 1 0 0 1 1-1m19 4-9.4 6.3a1 1 0 0 1-1.2 0L2 9V18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1z" />
              </svg>
              <span className="sr-only">Email</span>
            </a>
            <Link className="hero-btn social-btn contact-btn" href="/contact">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
              >
                <path d="M12 3a9 9 0 0 0-9 9c0 2.1.7 4.1 2.1 5.7V21l3.4-1.8A9 9 0 1 0 12 3m0 2a7 7 0 0 1 7 7c0 1.7-.6 3.3-1.7 4.6l-.4.5v1.6l-1.7-.9-.5.2A7 7 0 1 1 12 5" />
              </svg>
              Hire Me
            </Link>
          </div>
        </div>
        <div className="hidden min-h-[280px] w-full md:block" aria-hidden="true" />
      </section>

      <section className="space-y-7 md:space-y-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="rounded-3xl border border-black/10 bg-white/92 p-5 shadow-[0_15px_35px_-30px_rgba(0,0,0,0.45)]"
            >
              <h3 className="text-xl font-bold">{item.role}</h3>
              <p className="font-mono text-sm text-black/70">
                {item.company} | {item.period}
              </p>
              <ul className="mt-3 space-y-1 text-sm leading-relaxed text-black/80">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>- {highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-7 md:space-y-8">
        <h2 className="text-3xl font-bold">What I Build</h2>
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <article className="h-full rounded-3xl border border-black/10 bg-white/92 p-7 shadow-[0_15px_35px_-30px_rgba(0,0,0,0.45)]">
            <p className="font-mono text-sm uppercase tracking-[0.12em] text-black/65">
              Build Summary
            </p>
            <h3 className="mt-3 text-3xl font-bold leading-tight">
              Full-stack and Applied AI products that solve real problems.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/80">
              I build scalable AI-powered platforms, creator ecosystems, and automation systems across frontend, backend, cloud, and data infrastructure. My work focuses on production-ready applications with strong UX, real-time systems, and measurable business impact.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white/70 p-3">
                <p className="text-lg font-bold text-[var(--accent)]">3+ Major Builds</p>
                <p className="text-sm text-black/70">Flock, Cuvaide, Verifisert</p>
                <p className="text-sm text-black/70">AI systems, creator platforms, automation tools</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-3">
                <p className="text-lg font-bold text-[var(--accent)]">End-to-End Engineering</p>
                <p className="text-sm text-black/70">Frontend, APIs, AI workflows, cloud infrastructure</p>
              </div>
            </div>
          </article>

          <div className="grid h-full grid-cols-2 grid-rows-2 gap-4">
            <article className="group relative overflow-hidden rounded-3xl border border-[#312e81]/15 bg-gradient-to-br from-white to-[#ede9fe]/95 p-5 shadow-[0_18px_36px_-26px_rgba(49,46,129,0.4)] transition hover:-translate-y-0.5">
              <p className="text-2xl font-black text-[#1f4f7a]">100+ Users | 60% Less Review Time</p>
              <p className="mt-2 text-sm font-semibold text-black/80">
                Higher adoption with faster compliance checks
              </p>
              <p className="mt-1 text-xs text-black/65">
                Based on production web platforms and Verifisert review automation outcomes.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-[#312e81]/15 bg-gradient-to-br from-white to-[#ede9fe]/95 p-5 shadow-[0_18px_36px_-26px_rgba(49,46,129,0.4)] transition hover:-translate-y-0.5">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#7c3aed]/15 blur-2xl" />
              <p className="relative z-10 text-2xl font-black text-[#312e81]">Multi-Agent AI</p>
              <p className="relative z-10 mt-2 text-sm font-semibold text-black/80">
                LangGraph - LLM Workflows - Tool Routing
              </p>
              <p className="relative z-10 mt-1 text-xs text-black/65">
                Designed LangGraph-powered AI workflows with intelligent routing, tool execution, memory handling, and LLM orchestration.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-[#312e81]/15 bg-gradient-to-br from-white to-[#ede9fe]/95 p-5 shadow-[0_18px_36px_-26px_rgba(49,46,129,0.4)] transition hover:-translate-y-0.5">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#0f766e]/15 blur-2xl" />
              <p className="relative z-10 text-2xl font-black text-[#0f273b]">Cloud + Payments</p>
              <p className="relative z-10 mt-2 text-sm font-semibold text-black/80">
                AWS - Azure - Stripe - PayPal
              </p>
              <p className="relative z-10 mt-1 text-xs text-black/65">
               cloud infrastructure, payment integrations for AI powered platforms, scalable APIs, and secure transaction workflows.
              </p>
            </article>

            <div className="flex items-center justify-center p-4">
              <Link
                href="/projects"
                className="flex h-28 w-28 items-center justify-center rounded-full bg-[var(--accent)] p-4 text-center text-sm font-bold text-white transition hover:scale-[1.03] hover:opacity-90"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-7 pt-8 md:space-y-8 md:pt-1">
        <h2 className="text-4xl font-medium tracking-tight text-black/85">
          Technical Skills
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-black/10 bg-white/92 p-6 shadow-[0_15px_35px_-30px_rgba(0,0,0,0.45)]"
            >
              <h3 className="mb-5 font-mono text-xl font-bold tracking-wide text-black/80">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {category.items.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-2xl border border-black/10 bg-white px-3 py-4 text-center text-sm font-semibold text-black/70"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
