const navLinks = ["Reputation", "Clarity", "AEO / GEO"];

const heroSupportPoints = [
  {
    label: "Reputation",
    sub: "Your site should look as credible as the work you deliver.",
  },
  {
    label: "Clarity",
    sub: "Visitors understand your services without effort or confusion.",
  },
  {
    label: "Visibility",
    sub: "Search engines and AI assistants can interpret your business.",
  },
];

const floatingSignals = [
  { text: "Outdated design", delay: "0s" },
  { text: "Confusing services", delay: "0.8s" },
  { text: "Unclear structure", delay: "1.6s" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <>
      {/* Navigation */}
      <header className="relative z-20 flex w-full items-center justify-between border-b border-[#1a1a1a] bg-[#0b0b0b]/80 px-6 py-5 backdrop-blur-sm sm:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          {/* DS Monogram */}
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#D4AF37]/30 bg-[#280D3D]/40 transition-transform duration-300 hover:scale-105">
            <span className="bg-gradient-to-br from-[#D4AF37] to-[#a8892a] bg-clip-text text-lg font-bold leading-none tracking-tight text-transparent [-webkit-background-clip:text]">
              DS
            </span>
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              DS
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
              Automations
            </span>
          </div>
        </div>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((item) => (
            <span
              key={item}
              className="text-sm font-medium tracking-wide text-[#a3a3a3]"
            >
              {item}
            </span>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[88vh] w-full flex-col items-center justify-center px-6 py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-20"
          style={{
            background: "radial-gradient(ellipse, #280D3D 0%, transparent 65%)",
          }}
        />

        {/* Floating risk signals */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
        >
          {floatingSignals.map((signal, index) => (
            <span
              key={signal.text}
              className="animate-float absolute whitespace-nowrap border border-[#2a2a2a] bg-[#111111]/80 px-3 py-1.5 text-[11px] uppercase tracking-widest text-[#737373] backdrop-blur-sm"
              style={{
                left: index === 1 ? "auto" : `${6 + index * 4}%`,
                right: index === 1 ? "8%" : "auto",
                top: `${26 + index * 22}%`,
                ["--animation-delay" as string]: signal.delay,
              }}
            >
              {signal.text}
            </span>
          ))}
        </div>

        <div className="relative z-10 flex max-w-5xl flex-col items-center gap-8 text-center">
          {/* Eyebrow */}
          <p
            className="animate-fade-up text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]"
            style={{
              animationDelay: "0.05s",
              animationFillMode: "both",
            }}
          >
            Website modernization for local businesses
          </p>

          {/* Headline */}
          <h1
            className="animate-fade-up text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
            style={{
              animationDelay: "0.15s",
              animationFillMode: "both",
            }}
          >
            An outdated website
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#a8892a] bg-clip-text text-transparent [-webkit-background-clip:text]">
              quietly costs you credibility.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up max-w-3xl text-pretty text-lg leading-relaxed text-[#737373] sm:text-xl"
            style={{
              animationDelay: "0.25s",
              animationFillMode: "both",
            }}
          >
            When your website looks dated, customers trust you less, work harder
            to understand you, and search engines and AI assistants struggle to
            interpret what your business actually does. We modernize your website
            so your reputation, your clarity, and your visibility all improve
            together.
          </p>

          {/* Microcopy */}
          <p
            className="animate-fade-up max-w-xl text-xs leading-relaxed tracking-wide text-[#525252]"
            style={{
              animationDelay: "0.35s",
              animationFillMode: "both",
            }}
          >
            Reputation, customer clarity, and AEO / GEO visibility. No templates.
            No guaranteed-ranking promises.
          </p>

          {/* Hero support points */}
          <div
            className="animate-fade-up mt-4 grid grid-cols-1 gap-px sm:grid-cols-3"
            style={{
              animationDelay: "0.45s",
              animationFillMode: "both",
            }}
          >
            {heroSupportPoints.map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1.5 border-[#1a1a1a] px-8 py-6 transition-colors last:border-r-0 hover:bg-[#111111]/60 sm:border-r"
              >
                <span
                  className="animate-bounce-soft text-sm font-bold uppercase tracking-widest text-[#D4AF37]"
                  style={{ ["--animation-delay" as string]: `${index * 0.3}s` }}
                >
                  {item.label}
                </span>
                <span className="text-xs leading-relaxed text-[#525252]">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
