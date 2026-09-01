import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectCard({ project, className = "", style }: ProjectCardProps) {
  return (
    <div className={`project-card group ${className}`.trim()} style={style}>
      {/* Top Preview Section */}
      <div className="relative w-full overflow-hidden border-b border-border/80 bg-[#08080c]">
        {project.video ? (
          <video
            src={project.video}
            poster={project.image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          />
        ) : project.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-56">
            <span className="text-2xl font-mono font-bold text-accent/20 select-none tracking-wider uppercase">
              {project.name}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text">{project.name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-text-muted">{project.description}</p>

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
          <div className="mt-5 flex gap-5 text-sm">
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-text transition-colors font-medium"
              >
                <span className="text-accent font-mono">↗</span>
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-text transition-colors font-medium"
              >
                <span className="text-accent font-mono">↗</span>
                <span>Link</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
