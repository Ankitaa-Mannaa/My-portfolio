import { portfolioData } from "@/data/portfolio";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h1 className="text-3xl font-black leading-none text-[#1f1b4d] md:text-5xl">
          Projects
        </h1>
        <p className="max-w-3xl text-sm font-bold leading-relaxed text-[#27233d]/72">
          A scroll-stacked look at products and AI systems I have built across
          frontend, backend, automation, cloud, and applied LLM workflows.
        </p>
      </section>

      <ScrollStack
        className="project-scroll-stack"
        itemDistance={200}
        itemStackDistance={30}
        itemScale={0.03}
        baseScale={0.85}
        stackPosition="120px"
        scaleEndPosition="80px"
        rotationAmount={0}
        blurAmount={0}
        useWindowScroll
      >
        {projects.map((project) => (
          <ScrollStackItem key={project.title} itemClassName="project-stack-card">
            <article className="relative z-10 flex min-h-[18rem] flex-col justify-between gap-5">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="min-w-0 flex-1">
                  <h2 className="max-w-4xl text-2xl font-black leading-tight text-[#1f1b4d] md:text-4xl">
                    {project.title}
                  </h2>
                </div>
              </div>

              <p className="max-w-4xl text-sm font-bold leading-relaxed text-[#27233d]/78 md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#7c3aed]/14 bg-white/82 px-3 py-1.5 text-xs font-black text-[#27233d] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#facc15] shadow-[0_0_0_4px_rgba(250,204,21,0.16),0_0_12px_rgba(124,58,237,0.28)]" />
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full border border-[#0f766e]/20 bg-[#0f766e] px-4 py-2 text-xs font-black text-white shadow-[0_14px_28px_-18px_rgba(15,118,110,0.9)] transition hover:-translate-y-0.5 hover:bg-[#115e59]"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                {project.githubUrl ? (
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-[#7c3aed]/20 bg-white/85 px-4 py-2 text-xs font-black text-[#312e81] shadow-[0_14px_28px_-22px_rgba(76,29,149,0.8)] transition hover:-translate-y-0.5 hover:border-[#7c3aed]/45 hover:bg-[#ede9fe]"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </article>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}
