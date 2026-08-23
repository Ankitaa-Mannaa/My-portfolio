"use client";

import { useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import VariableProximity from "@/components/VariableProximity";

const techCardThemes = [
  {
    accent: "#06b6d4",
    accentSoft: "rgba(6, 182, 212, 0.14)",
    accentFade: "rgba(6, 182, 212, 0.06)",
    bgStart: "#f3fbff",
    bgEnd: "#dff7fb",
    border: "rgba(6, 182, 212, 0.34)",
    borderHover: "rgba(6, 182, 212, 0.8)",
    frame: "rgba(6, 182, 212, 0.18)",
    shadow:
      "0 18px 40px -28px rgba(6, 182, 212, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.92)",
    shadowHover:
      "0 24px 56px -28px rgba(6, 182, 212, 0.38), 0 0 0 1px rgba(6, 182, 212, 0.16), 0 0 28px rgba(6, 182, 212, 0.16)",
    pillBg: "rgba(255, 255, 255, 0.78)",
    pillBorder: "rgba(6, 182, 212, 0.18)",
    pillHoverBg: "rgba(6, 182, 212, 0.12)",
    pillHoverRing: "rgba(6, 182, 212, 0.22)",
    pillHoverGlow: "rgba(6, 182, 212, 0.18)",
    pillDotGlow: "rgba(6, 182, 212, 0.46)",
  },
  {
    accent: "#8b5cf6",
    accentSoft: "rgba(139, 92, 246, 0.14)",
    accentFade: "rgba(139, 92, 246, 0.06)",
    bgStart: "#f7f2ff",
    bgEnd: "#e9e0ff",
    border: "rgba(139, 92, 246, 0.32)",
    borderHover: "rgba(139, 92, 246, 0.82)",
    frame: "rgba(139, 92, 246, 0.18)",
    shadow:
      "0 18px 40px -28px rgba(124, 58, 237, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.92)",
    shadowHover:
      "0 24px 56px -28px rgba(124, 58, 237, 0.38), 0 0 0 1px rgba(139, 92, 246, 0.16), 0 0 28px rgba(139, 92, 246, 0.16)",
    pillBg: "rgba(255, 255, 255, 0.78)",
    pillBorder: "rgba(139, 92, 246, 0.18)",
    pillHoverBg: "rgba(139, 92, 246, 0.12)",
    pillHoverRing: "rgba(139, 92, 246, 0.22)",
    pillHoverGlow: "rgba(139, 92, 246, 0.18)",
    pillDotGlow: "rgba(139, 92, 246, 0.46)",
  },
  {
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.14)",
    accentFade: "rgba(245, 158, 11, 0.06)",
    bgStart: "#fff9ec",
    bgEnd: "#fff1d7",
    border: "rgba(245, 158, 11, 0.34)",
    borderHover: "rgba(245, 158, 11, 0.82)",
    frame: "rgba(245, 158, 11, 0.18)",
    shadow:
      "0 18px 40px -28px rgba(217, 119, 6, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.92)",
    shadowHover:
      "0 24px 56px -28px rgba(217, 119, 6, 0.38), 0 0 0 1px rgba(245, 158, 11, 0.16), 0 0 28px rgba(245, 158, 11, 0.16)",
    pillBg: "rgba(255, 255, 255, 0.78)",
    pillBorder: "rgba(245, 158, 11, 0.18)",
    pillHoverBg: "rgba(245, 158, 11, 0.12)",
    pillHoverRing: "rgba(245, 158, 11, 0.22)",
    pillHoverGlow: "rgba(245, 158, 11, 0.18)",
    pillDotGlow: "rgba(245, 158, 11, 0.46)",
  },
  {
    accent: "#10b981",
    accentSoft: "rgba(16, 185, 129, 0.14)",
    accentFade: "rgba(16, 185, 129, 0.06)",
    bgStart: "#f0fbf4",
    bgEnd: "#dff7ea",
    border: "rgba(16, 185, 129, 0.32)",
    borderHover: "rgba(16, 185, 129, 0.82)",
    frame: "rgba(16, 185, 129, 0.18)",
    shadow:
      "0 18px 40px -28px rgba(16, 185, 129, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.92)",
    shadowHover:
      "0 24px 56px -28px rgba(16, 185, 129, 0.38), 0 0 0 1px rgba(16, 185, 129, 0.16), 0 0 28px rgba(16, 185, 129, 0.16)",
    pillBg: "rgba(255, 255, 255, 0.78)",
    pillBorder: "rgba(16, 185, 129, 0.18)",
    pillHoverBg: "rgba(16, 185, 129, 0.12)",
    pillHoverRing: "rgba(16, 185, 129, 0.22)",
    pillHoverGlow: "rgba(16, 185, 129, 0.18)",
    pillDotGlow: "rgba(16, 185, 129, 0.46)",
  },
  {
    accent: "#f43f5e",
    accentSoft: "rgba(244, 63, 94, 0.14)",
    accentFade: "rgba(244, 63, 94, 0.06)",
    bgStart: "#fff3f6",
    bgEnd: "#ffe3ea",
    border: "rgba(244, 63, 94, 0.32)",
    borderHover: "rgba(244, 63, 94, 0.82)",
    frame: "rgba(244, 63, 94, 0.18)",
    shadow:
      "0 18px 40px -28px rgba(244, 63, 94, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.92)",
    shadowHover:
      "0 24px 56px -28px rgba(244, 63, 94, 0.38), 0 0 0 1px rgba(244, 63, 94, 0.16), 0 0 28px rgba(244, 63, 94, 0.16)",
    pillBg: "rgba(255, 255, 255, 0.78)",
    pillBorder: "rgba(244, 63, 94, 0.18)",
    pillHoverBg: "rgba(244, 63, 94, 0.12)",
    pillHoverRing: "rgba(244, 63, 94, 0.22)",
    pillHoverGlow: "rgba(244, 63, 94, 0.18)",
    pillDotGlow: "rgba(244, 63, 94, 0.46)",
  },
  {
    accent: "#38bdf8",
    accentSoft: "rgba(56, 189, 248, 0.14)",
    accentFade: "rgba(56, 189, 248, 0.06)",
    bgStart: "#f1f9ff",
    bgEnd: "#dfefff",
    border: "rgba(56, 189, 248, 0.32)",
    borderHover: "rgba(56, 189, 248, 0.82)",
    frame: "rgba(56, 189, 248, 0.18)",
    shadow:
      "0 18px 40px -28px rgba(56, 189, 248, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.92)",
    shadowHover:
      "0 24px 56px -28px rgba(56, 189, 248, 0.38), 0 0 0 1px rgba(56, 189, 248, 0.16), 0 0 28px rgba(56, 189, 248, 0.16)",
    pillBg: "rgba(255, 255, 255, 0.78)",
    pillBorder: "rgba(56, 189, 248, 0.18)",
    pillHoverBg: "rgba(56, 189, 248, 0.12)",
    pillHoverRing: "rgba(56, 189, 248, 0.22)",
    pillHoverGlow: "rgba(56, 189, 248, 0.18)",
    pillDotGlow: "rgba(56, 189, 248, 0.46)",
  },
  {
    accent: "#ec4899",
    accentSoft: "rgba(236, 72, 153, 0.14)",
    accentFade: "rgba(236, 72, 153, 0.06)",
    bgStart: "#fff4f8",
    bgEnd: "#ffe2ec",
    border: "rgba(236, 72, 153, 0.32)",
    borderHover: "rgba(236, 72, 153, 0.82)",
    frame: "rgba(236, 72, 153, 0.18)",
    shadow:
      "0 18px 40px -28px rgba(236, 72, 153, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.92)",
    shadowHover:
      "0 24px 56px -28px rgba(236, 72, 153, 0.38), 0 0 0 1px rgba(236, 72, 153, 0.16), 0 0 28px rgba(236, 72, 153, 0.16)",
    pillBg: "rgba(255, 255, 255, 0.78)",
    pillBorder: "rgba(236, 72, 153, 0.18)",
    pillHoverBg: "rgba(236, 72, 153, 0.12)",
    pillHoverRing: "rgba(236, 72, 153, 0.22)",
    pillHoverGlow: "rgba(236, 72, 153, 0.18)",
    pillDotGlow: "rgba(236, 72, 153, 0.46)",
  },
] as const;

export default function Home() {
  const { personal, socialLinks, skillCategories, experience } = portfolioData;
  const hasLinkedIn = socialLinks.linkedin && socialLinks.linkedin !== "#";
  const [firstName, ...remainingNameParts] = personal.name.split(" ");
  const lastName = remainingNameParts.join(" ");
  const techHeadingContainerRef = useRef<HTMLDivElement | null>(null);
  const [isTechHeadingHovered, setIsTechHeadingHovered] = useState(false);
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const shortBioContainerRef = useRef<HTMLDivElement | null>(null);
  const [isShortBioHovered, setIsShortBioHovered] = useState(false);
  const heroStatusPillStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 0,
    width: "fit-content",
    maxWidth: "100%",
    borderRadius: "9999px",
    border: "2px solid rgba(255, 73, 109, 0.98)",
    background: "transparent",
    padding: "0.8rem 1.30rem",
    color: "#68131a",
    fontSize: "0.9rem",
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    boxShadow:
      "0 0 0 1px rgba(255, 73, 109, 0.14), 0 0 24px rgba(255, 73, 109, 0.12)",
  };

  return (
    <div className="relative">
      <div className="relative z-10 space-y-20 md:space-y-24">
      <section className="relative grid items-center gap-6 py-6 md:grid-cols-[minmax(0,1.45fr)_minmax(0,0.55fr)] md:py-1">
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
            <p
              className="text-3xl font-bold leading-tight md:text-4xl"
              style={{
                fontWeight: 900,
                color: "#fff44a",
                WebkitTextFillColor: "#fff44a",
                WebkitTextStroke: "1.05px #0b1f8a",
                textShadow:
                  "0 0 1px rgba(255, 244, 74, 1), 0 0 5px rgba(255, 235, 74, 0.95), 0 0 10px rgba(255, 220, 0, 0.75), 0 0 3px rgba(11, 31, 138, 0.45), 0 0 7px rgba(35, 73, 255, 0.35)",
              }}
            >
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
            <p className="hero-status-pill" style={heroStatusPillStyle}>
              <span className="hero-status-pill-text" style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.16)" }}>
                {personal.heroPoints.join(" | ")}
              </span>
            </p>
          ) : null}
          <div
            ref={shortBioContainerRef}
            className="max-w-3xl"
            onMouseEnter={() => setIsShortBioHovered(true)}
            onMouseLeave={() => setIsShortBioHovered(false)}
          >
            <p className="text-base font-extrabold italic leading-relaxed text-[#1f2147] md:text-lg">
              <VariableProximity
                label={personal.shortBio}
                className="inline"
                fromFontVariationSettings="'wght' 700, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={shortBioContainerRef}
                radius={isShortBioHovered ? 190 : 0}
                falloff="linear"
                active={isShortBioHovered}
              />
            </p>
            <Link
              href="/about"
              className="mt-1 inline-block text-[#116956] underline decoration-2 underline-offset-4 transition hover:text-[#ebdf09]"
            >
              Know more about me
            </Link>
          </div>
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
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-black/25 bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
              href="/contact"
            >
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

            <section className="space-y-7 pt-8 md:space-y-8 md:pt-1">

        <div
          ref={techHeadingContainerRef}
          className="relative"
          onMouseEnter={() => setIsTechHeadingHovered(true)}
          onMouseLeave={() => setIsTechHeadingHovered(false)}
        >
          <h2 className="text-4xl font-bold tracking-tight text-black/85">
            <VariableProximity
              label="Tech I've Picked Up and Worked With Along the Way"
              className="inline"
              fromFontVariationSettings="'wght' 700, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={techHeadingContainerRef}
              radius={isTechHeadingHovered ? 220 : 0}
              falloff="linear"
              active={isTechHeadingHovered}
            />
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/65 md:text-base">
            These are the technical skills I&apos;ve learned, loved, and, at
            times, had to pick up for client work. In the end, every one of
            them pushed me to level up, stay curious, and learn something new.
          </p>
        </div>
        <div className="tech-accordion-gallery">
          {skillCategories.map((category, index) => {
            const theme = techCardThemes[index % techCardThemes.length];
            const title =
              category.title === "Programming Language"
                ? "Programming Languages"
                : category.title;
            const isActive = index === activeTechIndex;
            const expandedSize =
              category.items.length > 12
                ? "clamp(32rem, 48vw, 44rem)"
                : category.items.length > 6
                  ? "clamp(26rem, 38vw, 36rem)"
                  : "clamp(18rem, 26vw, 25rem)";

            return (
              <article
                key={category.title}
                className={`tech-accordion-panel${isActive ? " tech-accordion-panel-active" : ""}`}
                tabIndex={0}
                onMouseEnter={() => setActiveTechIndex(index)}
                onFocus={() => setActiveTechIndex(index)}
                style={
                  {
                    "--tech-accent": theme.accent,
                    "--tech-accent-soft": theme.accentSoft,
                    "--tech-accent-fade": theme.accentFade,
                    "--tech-bg-start": theme.bgStart,
                    "--tech-bg-end": theme.bgEnd,
                    "--tech-border": theme.border,
                    "--tech-border-hover": theme.borderHover,
                    "--tech-frame": theme.frame,
                    "--tech-shadow": theme.shadow,
                    "--tech-shadow-hover": theme.shadowHover,
                    "--tech-pill-bg": theme.pillBg,
                    "--tech-pill-border": theme.pillBorder,
                    "--tech-pill-hover-bg": theme.pillHoverBg,
                    "--tech-pill-hover-ring": theme.pillHoverRing,
                    "--tech-pill-hover-glow": theme.pillHoverGlow,
                    "--tech-pill-dot-glow": theme.pillDotGlow,
                    "--tech-expanded-size": expandedSize,
                    flex: isActive ? `0 0 ${expandedSize}` : "0 1 6.25rem",
                  } as CSSProperties
                }
              >
                <span
                  className="tech-card-corner tech-card-corner-tl"
                  aria-hidden="true"
                />
                <span
                  className="tech-card-corner tech-card-corner-tr"
                  aria-hidden="true"
                />
                <span
                  className="tech-card-corner tech-card-corner-bl"
                  aria-hidden="true"
                />
                <span
                  className="tech-card-corner tech-card-corner-br"
                  aria-hidden="true"
                />

                <div className="tech-accordion-card-content">
                  <h3 className="tech-accordion-title">
                    {title}
                  </h3>
                  <span className="tech-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="tech-accordion-pill-grid">
                  {category.items.map((skill) => (
                    <span key={skill} className="tech-pill">
                      <span className="tech-pill-dot" aria-hidden="true" />
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="space-y-7 md:space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="mt-1 text-2xl font-black text-[#000000] md:text-4xl">
              Experience
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-[#7c3aed]/45 via-[#facc15]/55 to-transparent sm:block" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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
      </div>
    </div>
  );
}



