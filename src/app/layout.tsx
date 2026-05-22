import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | Developer Portfolio`,
  description: portfolioData.personal.shortBio,
};

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    href: "/",
    label: "home",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5.5 9.5V20h13V9.5" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "about",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11.5v5" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    href: "/projects",
    label: "projects",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.2" />
        <path d="M8 4.5v-1" />
        <path d="M16 4.5v-1" />
        <path d="M3.5 9h17" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "contact",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2.4" />
        <path d="m4.6 7.4 7.4 6 7.4-6" />
      </svg>
    ),
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="fixed inset-x-0 top-2 z-40 pointer-events-none">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 md:px-8 md:py-4">
            <p className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#6d28d9]/20 bg-white/85 px-3 py-1.5 text-base font-bold tracking-tight text-[#3730a3] shadow-[0_8px_26px_-18px_rgba(49,46,129,0.7)]">
              <span
                className="h-2.5 w-2.5 rounded-full shadow-[0_0_14px_rgba(250,204,21,0.95),0_0_22px_rgba(124,58,237,0.6)]"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, #facc15 0%, #f59e0b 30%, #7c3aed 70%, #4c1d95 100%)",
                }}
              />
              Available for freelance & full-time
            </p>

            <nav className="pointer-events-auto shrink-0 md:translate-x-4">
              <ul className="flex items-center gap-3 sm:gap-4">
                {navItems.map((item) => (
                  <li key={item.href} className="relative h-14 w-12">
                    <Link
                      href={item.href}
                      className="group relative inline-flex h-12 w-12 items-center justify-center no-underline"
                    >
                      <span className="relative grid h-12 w-12 place-items-center [perspective:1000px]">
                        <span className="pointer-events-none absolute inset-0 rounded-full border border-[#4c1d95]/45 bg-transparent shadow-[0_0_0_1px_rgba(76,29,149,0.25),0_0_16px_rgba(109,40,217,0.45),0_0_30px_rgba(109,40,217,0.28)] transition-all duration-500 group-hover:border-[#7c3aed]/75 group-hover:shadow-[0_0_0_1px_rgba(124,58,237,0.35),0_0_18px_rgba(124,58,237,0.65),0_0_36px_rgba(124,58,237,0.45)]" />

                        <span
                          className="relative h-9 w-9 transform-gpu will-change-transform transition-transform duration-500 ease-out group-hover:[transform:rotateY(180deg)]"
                          style={{ transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d" }}
                        >
                          <span
                            className="absolute inset-0 grid place-items-center rounded-full border border-[#f59e0b]/65 bg-[#fde047] text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_14px_-10px_rgba(0,0,0,0.55)]"
                            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                          >
                            {item.icon}
                          </span>
                          <span
                            className="absolute inset-0 grid place-items-center rounded-full border border-[#6d28d9]/80 bg-[#7c3aed] text-white"
                            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                          >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14" />
                              <path d="m13 6 6 6-6 6" />
                            </svg>
                          </span>
                        </span>
                      </span>

                      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4c1d95]/80 opacity-0 transition-all duration-300 group-hover:translate-y-0.5 group-hover:opacity-100">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-24 pb-8 md:px-4 md:pt-24 md:pb-10">
          {children}
        </main>
      </body>
    </html>
  );
}
