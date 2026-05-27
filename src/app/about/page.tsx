import { portfolioData } from "@/data/portfolio";
import Lanyard from "@/components/Lanyard";

export default function AboutPage() {
  const { personal, education, experience } = portfolioData;

  return (
    <div className="relative space-y-6">
      <div className="pointer-events-none fixed inset-0 z-[25] hidden lg:block">
        <div className="pointer-events-auto h-full w-full">
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            anchor={[0.75, 4, 0]}
          />
        </div>
      </div>
      <h1 className="text-3xl font-black md:text-4xl">About</h1>
      <p className="max-w-3xl text-base leading-relaxed text-black/80 md:text-lg">
        {personal.shortBio}
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="grid gap-4">
          {experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="card">
              <h3 className="text-lg font-bold">{item.role}</h3>
              <p className="text-sm text-black/70">
                {item.company} | {item.period}
              </p>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-black/80">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>- {highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="grid gap-4">
          {education.map((item) => (
            <article key={item.degree} className="card">
              <h3 className="text-lg font-bold">{item.degree}</h3>
              <p className="text-sm text-black/70">
                {item.institute} | {item.year}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/80">
                {item.details}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
