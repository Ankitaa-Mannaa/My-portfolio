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
        <header className="topbar">
          <div className="topbar-inner mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 md:px-8 md:py-4">
            <Link href="/" className="topbar-brand text-lg font-bold tracking-tight md:text-xl">
              <span className="brand-dot" aria-hidden="true" />
              available to work
            </Link>
            <nav className="shrink-0">
              <ul className="nav-list flex items-center gap-1 p-1 text-sm font-medium md:gap-2">
                <li>
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-4 md:py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
