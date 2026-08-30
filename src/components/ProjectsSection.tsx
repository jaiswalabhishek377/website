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

        {/* Full-width Stacked Projects Grid */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              className="w-full"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
