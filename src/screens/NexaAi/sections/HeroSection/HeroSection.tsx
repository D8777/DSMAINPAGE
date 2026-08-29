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
            <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">Your next customer may never search for you. <span className="bg-gradient-to-r from-[#D4AF37] to-[#a8892a] bg-clip-text text-transparent [-webkit-background-clip:text]">They may ask AI who to trust instead.</span></h1>
            <div className="mt-10 max-w-3xl space-y-5 text-pretty text-lg leading-relaxed text-[#a3a3a3] sm:text-xl">
              <p>As the way people discover and choose businesses changes, your website has a new job: make your business easy for people, search engines, and AI to understand, trust, and choose.</p>
            </div>
            <a
              href="#get-started"
              className="group mt-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 bg-[#D4AF37]/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37]/10"
            >
              Make sure they find you
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
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
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">The website isn&apos;t disappearing</p>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Its job is getting bigger.</h2>
            <div className="mt-8 space-y-4 text-pretty text-lg leading-relaxed text-[#a3a3a3]">
              <p>Customers still visit your website. But now search engines and AI systems are reading it too.</p>
              <p>If your website is outdated, confusing, hard to trust, or unclear about what you actually do, you&apos;re creating friction before a customer ever contacts you.</p>
              <p>And as the way people search changes, that problem only gets bigger.</p>
              <p className="font-semibold text-white">DS Automations tailors your website, strengthens your online reputation, and makes your business easier for people, search engines, and AI to understand.</p>
            </div>
            <a
              href="#get-started"
              className="group mt-8 inline-flex items-center gap-3 border border-[#D4AF37]/50 bg-[#D4AF37]/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37]/10"
            >
              Modernize my business
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};
