"use client";

import { FormEvent, useState } from "react";
import { portfolioData } from "@/data/portfolio";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const { personal, socialLinks } = portfolioData;
  const [status, setStatus] = useState<FormStatus>("idle");

  const socialItems = [
    { label: "GitHub", handle: "Ankitaa-Mannaa", url: socialLinks.github },
    { label: "LinkedIn", handle: "ankita-manna", url: socialLinks.linkedin },
    {
      label: "Instagram",
      handle: "_ankiiiiiita_",
      url: socialLinks.instagram,
    },
  ].filter((item) => item.url && item.url !== "#");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.get("name"),
            from_email: formData.get("email"),
            reply_to: formData.get("email"),
            project_type: formData.get("projectType"),
            message: formData.get("message"),
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative overflow-hidden pb-10">
      <section className="relative min-h-[calc(100vh-8rem)] overflow-hidden rounded-[2rem] border border-[#7c3aed]/20 bg-[#fffaf2]/82 shadow-[0_28px_70px_-48px_rgba(49,46,129,0.85)] backdrop-blur-md">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(250,204,21,0.24),transparent_34%),radial-gradient(circle_at_78%_12%,rgba(124,58,237,0.2),transparent_28%),radial-gradient(circle_at_12%_82%,rgba(15,118,110,0.18),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-[#7c3aed] via-[#facc15] to-[#0f766e]" />

        <div className="relative grid min-h-[calc(100vh-8rem)] gap-8 p-5 md:grid-cols-[0.92fr_1.08fr] md:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.32em] text-[#0f766e]">
                Delhi / Remote
              </p>
              <h1 className="mt-4 max-w-2xl text-5xl font-black leading-none text-[#1f1b4d] md:text-7xl">
                Let&apos;s build something sharp.
              </h1>
              <p className="mt-6 max-w-xl text-base font-bold leading-relaxed text-[#27233d]/72 md:text-lg">
                AI workflows, full-stack products, automation systems, or a
                thoughtful idea that needs clean execution. Send the details and
                I&apos;ll get back to you.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center justify-between gap-4 rounded-[1.2rem] border border-[#0f766e]/18 bg-white/72 px-4 py-3 text-[#1f1b4d] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition hover:-translate-y-0.5 hover:border-[#0f766e]/38 hover:bg-[#ecfdf5]/88"
              >
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.2em] text-[#0f766e]">
                    Email
                  </span>
                  <span className="mt-1 block text-sm font-black md:text-base">
                    {personal.email}
                  </span>
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0f766e] text-white transition group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </a>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-[1.2rem] border border-[#7c3aed]/18 bg-white/58 px-4 py-3">
                  <span className="block text-xs font-black uppercase tracking-[0.2em] text-[#7c3aed]">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm font-black text-[#27233d]">
                    {personal.phone}
                  </span>
                </div>
                <div className="rounded-[1.2rem] border border-[#f59e0b]/22 bg-white/58 px-4 py-3">
                  <span className="block text-xs font-black uppercase tracking-[0.2em] text-[#b45309]">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-black text-[#27233d]">
                    Delhi, India
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-full border border-[#1f1b4d]/12 bg-white/75 px-4 py-2 text-sm font-black text-[#1f1b4d] transition hover:-translate-y-0.5 hover:border-[#7c3aed]/35"
                >
                  <span className="relative z-10">
                    {item.label}{" "}
                    <span className="text-[#0f766e]">{item.handle}</span>
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#7c3aed] via-[#facc15] to-[#0f766e] transition group-hover:h-full group-hover:opacity-15" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 hidden h-28 w-28 rounded-full border border-[#7c3aed]/25 bg-[#ede9fe]/70 md:block" />
            <form
              onSubmit={handleSubmit}
              className="relative h-full rounded-[1.75rem] border border-[#1f1b4d]/12 bg-[#111827]/92 p-5 text-white shadow-[0_26px_70px_-42px_rgba(17,24,39,0.95)] md:p-6"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.26em] text-[#facc15]">
                    Message Form
                  </p>
                  <h2 className="mt-2 text-2xl font-black">Drop the brief</h2>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/8">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                  </svg>
                </span>
              </div>

              <div className="mt-5 grid gap-4">
                <label className="grid gap-2 text-sm font-black">
                  Name
                  <input
                    name="name"
                    required
                    className="rounded-2xl border border-white/10 bg-white/9 px-4 py-3 text-sm font-bold text-white outline-none transition placeholder:text-white/35 focus:border-[#facc15]/75 focus:bg-white/12"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-black">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-2xl border border-white/10 bg-white/9 px-4 py-3 text-sm font-bold text-white outline-none transition placeholder:text-white/35 focus:border-[#facc15]/75 focus:bg-white/12"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="grid gap-2 text-sm font-black">
                  Project Type
                  <select
                    name="projectType"
                    className="rounded-2xl border border-white/10 bg-white/9 px-4 py-3 text-sm font-bold text-white outline-none transition focus:border-[#facc15]/75 focus:bg-white/12"
                    defaultValue="AI / Automation"
                  >
                    <option className="text-[#111827]">AI / Automation</option>
                    <option className="text-[#111827]">Full-stack App</option>
                    <option className="text-[#111827]">Freelance Work</option>
                    <option className="text-[#111827]">Job Opportunity</option>
                    <option className="text-[#111827]">Other</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-black">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="resize-none rounded-2xl border border-white/10 bg-white/9 px-4 py-3 text-sm font-bold leading-relaxed text-white outline-none transition placeholder:text-white/35 focus:border-[#facc15]/75 focus:bg-white/12"
                    placeholder="Tell me what you want to build..."
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#facc15] px-5 py-3 text-sm font-black text-[#111827] shadow-[0_18px_38px_-24px_rgba(250,204,21,0.95)] transition hover:-translate-y-0.5 hover:bg-[#fde047] disabled:cursor-not-allowed disabled:opacity-65"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>

              {status === "sent" ? (
                <p className="mt-4 rounded-2xl border border-[#34d399]/25 bg-[#064e3b]/45 px-4 py-3 text-sm font-bold text-[#bbf7d0]">
                  Message sent. I&apos;ll reply soon.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="mt-4 rounded-2xl border border-[#f87171]/25 bg-[#7f1d1d]/45 px-4 py-3 text-sm font-bold text-[#fecaca]">
                  Message could not be sent. Email me directly for now.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
