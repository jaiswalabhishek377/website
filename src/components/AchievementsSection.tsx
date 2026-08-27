import { achievements } from "@/lib/data";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="section-label mb-1">{"// ACHIEVEMENTS"}</p>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle mt-1">Milestones &amp; recognition</p>
        </div>

        <div className="glass-card p-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 border-b border-border last:border-0 py-4 first:pt-0 last:pb-0"
            >
              <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
              <div>
                <h3 className="font-medium text-text text-sm">{item.title}</h3>
                <p className="text-sm text-text-muted mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
