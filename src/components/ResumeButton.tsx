export default function ResumeButton() {
  const resumeUrl = "https://drive.google.com/file/d/1Wq4-iRQcBqtjjMObUJVuNdO7jeiA52NX/view?usp=drive_link";
// https://drive.google.com/file/d/1Wq4-iRQcBqtjjMObUJVuNdO7jeiA52NX/view?usp=drive_link
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-3xl flex justify-center">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn group relative inline-flex items-center justify-center"
        >
          {/* Warm glow layer behind the pill */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-600/60 via-orange-500/50 to-amber-700/60 blur-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/30 via-amber-300/20 to-orange-500/30 blur-xl scale-105 opacity-0 group-hover:opacity-90 transition-all duration-500" />

          {/* The pill button */}
          <span
            className="relative z-10 inline-flex items-center gap-3 rounded-full px-10 py-2.5 text-[13px] font-semibold tracking-[0.18em] uppercase border border-[#c8bfb2]/40 transition-all duration-300 group-hover:shadow-[0_4px_30px_rgba(200,140,60,0.5)]"
            style={{
              background: "linear-gradient(90deg, #e8e3dc 0%, #e2dbd2 50%, #d9c4a8 80%, #c9a06a 100%)",
              color: "#4a3520",
              boxShadow: "4px 0 20px rgba(220,140,40,0.4), inset -30px 0 30px -15px rgba(210,130,40,0.25)",
            }}
          >
            VIEW RESUME
            <span className="font-light text-[15px] opacity-70 transition-transform duration-300 group-hover:translate-x-1">⟶</span>
          </span>
        </a>
      </div>
    </section>
  );
}
