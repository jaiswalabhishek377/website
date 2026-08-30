import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-8">
          <p className="section-label mb-1">{"// PROJECTS"}</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mt-1">Things I&apos;ve built</p>
        </div>

        {/* Bento Grid: 1 Featured Full-Width Card on Top + 2 Side-by-Side Cards Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              className={index === 0 ? "sm:col-span-2" : "sm:col-span-1"}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
