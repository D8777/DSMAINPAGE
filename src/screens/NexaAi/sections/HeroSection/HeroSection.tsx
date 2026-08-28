import { Reveal } from "../../components/Reveal";

const navLinks = ["Reputation", "Clarity", "Visibility"];

const focusAreas = [
  {
    label: "Reputation",
    title: "Look as professional online as the work you deliver.",
    copy: "Your website is often part of a customer's first impression. It should reinforce the reputation you've already earned—not work against it.",
  },
  {
    label: "Clarity",
    title: "Don't make customers dig for answers.",
    copy: "Services, pricing, service areas, your work, and the next step should be easy to find and understand.",
  },
  {
    label: "Visibility",
    title: "Make your business easier to understand online.",
    copy: "Clear, well-structured information helps search engines and AI assistants understand what you do, where you do it, and the questions your business can answer.",
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
      <header className="relative z-20 flex w-full items-center justify-between border-b border-[#1a1a1a] bg-[#0b0b0b]/80 px-6 py-5 backdrop-blur-sm sm:px-10 lg:px-16">
        <img
          alt="DS Automations logo"
          src="/logo.png"
          className="h-12 w-auto transition-transform duration-300 hover:scale-105 sm:h-14"
        />
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <span key={item} className="text-sm font-medium tracking-wide text-[#a3a3a3]">{item}</span>
          ))}
        </nav>
      </header>

      <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-20" style={{ background: "radial-gradient(ellipse, #280D3D 0%, transparent 65%)" }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          {floatingSignals.map((signal, index) => (
            <span key={signal.text} className="animate-float absolute whitespace-nowrap border border-[#2a2a2a] bg-[#111111]/80 px-3 py-1.5 text-[11px] uppercase tracking-widest text-[#737373] backdrop-blur-sm" style={{ left: index === 1 ? "auto" : `${6 + index * 4}%`, right: index === 1 ? "8%" : "auto", top: `${18 + index * 22}%`, ["--animation-delay" as string]: signal.delay }}>
              {signal.text}
            </span>
          ))}
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20">
          <Reveal className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Website modernization for local businesses</p>
            <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">Your business has grown. <span className="bg-gradient-to-r from-[#D4AF37] to-[#a8892a] bg-clip-text text-transparent [-webkit-background-clip:text]">Has your website?</span></h1>
            <div className="mt-10 max-w-3xl space-y-5 text-pretty text-lg leading-relaxed text-[#a3a3a3] sm:text-xl">
              <p>You’ve put years into your work, your reputation, and your customers.</p>
              <p>But when someone looks you up, they don’t see all of that first.</p>
              <p className="font-semibold text-white">They see your website.</p>
              <p>If it looks outdated, makes your services hard to understand, or leaves people wondering what to do next, it can make a good business look less established than it really is.</p>
              <p>We tailor websites to better reflect the business behind them and make them clearer for customers, search engines, and AI search.</p>
            </div>
          </Reveal>

          <div className="grid gap-px border border-[#262626] bg-[#262626] lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <Reveal key={area.label} delay={index * 0.1} className="flex min-h-[260px] flex-col gap-5 bg-[#0f0f0f] p-7 transition-colors duration-300 hover:bg-[#151515] sm:p-9">
                <span className="animate-bounce-soft text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]" style={{ ["--animation-delay" as string]: `${index * 0.3}s` }}>{area.label}</span>
                <h2 className="text-balance text-2xl font-black leading-tight tracking-tight text-white">{area.title}</h2>
                <p className="text-pretty text-sm leading-relaxed text-[#737373]">{area.copy}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="border-t border-[#D4AF37]/40 pt-12 lg:max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">The real cost</p>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">An outdated website doesn&apos;t always look broken. That&apos;s the problem.</h2>
            <div className="mt-8 space-y-4 text-pretty text-lg leading-relaxed text-[#a3a3a3]">
              <p>It still loads.</p>
              <p>Your phone number is still there.</p>
              <p>Maybe it even looks <em>good enough.</em></p>
              <p>But a potential customer lands on it and something feels off.</p>
              <p>The photos are old. The services aren&apos;t clear. The information is buried. The site doesn&apos;t match the quality they saw in your reviews or on Instagram.</p>
              <p className="font-semibold text-white">So they leave.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};
