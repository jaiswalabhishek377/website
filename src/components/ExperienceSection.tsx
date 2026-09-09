import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-8">
          <p className="section-label mb-1">{"// EXPERIENCE"}</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mt-1">Where I&apos;ve contributed</p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="interactive-card p-6"
            >
              {/* Header Row */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  {exp.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-lg border border-border bg-surface object-cover shrink-0"
                    />
                  ) : (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-xs font-mono font-medium text-accent">
                      {exp.company.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium text-text">{exp.role}</h3>
                    {exp.repoLink ? (
                      <a
                        href={exp.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline inline-flex items-center gap-1"
                      >
                        {exp.company} ↗
                      </a>
                    ) : (
                      <p className="text-sm text-accent">{exp.company}</p>
                    )}
                  </div>
                </div>
                <span className="text-sm text-text-muted sm:text-right shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {exp.description}
              </p>

              {/* Tags */}
              {exp.tags && exp.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Link */}
              {exp.link && (
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover inline-flex items-center gap-1 text-sm text-accent font-medium"
                  >
                    View merged PR #1488 &rarr;
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
