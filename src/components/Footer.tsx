import { siteConfig } from "@/lib/data";

export default function Footer() {
  const footerLinks = [
    {
      name: "LinkedIn",
      href: `https://linkedin.com/in/${siteConfig.linkedin}`,
      icon: (
        <svg
          className="w-4 h-4 shrink-0 text-text-muted group-hover:text-text transition-colors"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: `https://github.com/${siteConfig.github}`,
      icon: (
        <svg
          className="w-4 h-4 shrink-0 text-text-muted group-hover:text-text transition-colors"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "LeetCode",
      href: `https://leetcode.com/u/${siteConfig.leetcode}/`,
      icon: (
        <svg
          className="w-4 h-4 shrink-0 text-text-muted group-hover:text-text transition-colors"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: (
        <svg
          className="w-4 h-4 shrink-0 text-text-muted group-hover:text-text transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contact"
      className="relative border-t border-border pt-20 pb-28 px-6 overflow-hidden bg-bg"
    >
      {/* Full-width Seamless Dark Blue Ambient Wave at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[320px] sm:h-[400px] pointer-events-none select-none z-0 mix-blend-screen opacity-75"
        aria-hidden="true"
        style={{
          maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 30%, transparent 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/footer-wave.png"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Top Tag */}
        <div className="mb-4">
          <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
            {"// LET'S CONNECT"}
          </span>
        </div>

        {/* Big Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text mb-12">
          Have an idea? Let’s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            build it.
          </span>
        </h2>

        {/* 2x2 Grid of Links with Dividers and Diagonal Arrows */}
        <div className="border border-border/80 rounded-xl overflow-hidden glass-card mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/80 border-b border-border/80">
            {footerLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 hover:bg-surface/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  {link.icon}
                  <span className="text-sm font-medium text-text group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </div>
                <span className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm font-mono">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/80">
            {footerLinks.slice(2, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === "Email" ? undefined : "_blank"}
                rel={
                  link.name === "Email" ? undefined : "noopener noreferrer"
                }
                className="flex items-center justify-between p-5 hover:bg-surface/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  {link.icon}
                  <span className="text-sm font-medium text-text group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </div>
                <span className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm font-mono">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="flex items-center justify-between pt-4 text-xs font-mono text-text-muted">
          <span>&copy;2026 / ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}
