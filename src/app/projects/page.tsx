import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black md:text-4xl">Projects</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-sm leading-relaxed text-black/80">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-3 text-sm font-semibold">
              <a
                className="link-inline"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                className="link-inline"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
