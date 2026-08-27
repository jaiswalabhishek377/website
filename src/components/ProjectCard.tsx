import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectCard({ project, className = "", style }: ProjectCardProps) {
  return (
    <div className={`project-card ${className}`.trim()} style={style}>
      {/* Top Preview Section */}
      <div className="project-card__image">
        <span className="text-2xl font-mono font-bold text-accent/20 select-none tracking-wider uppercase">
          {project.name}
        </span>
        <div className="absolute bottom-3 left-4 right-4 z-10 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag bg-surface/80 backdrop-blur-sm border-border/80">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="p-5">
        <h3 className="text-lg font-medium text-text">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.liveUrl || project.codeUrl) && (
          <div className="mt-4 flex gap-4 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover text-text-muted inline-flex items-center gap-1"
              >
                Live &rarr;
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover text-text-muted inline-flex items-center gap-1"
              >
                Code &rarr;
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
