import { Reveal } from "../../components/Reveal";

const processSteps = [
  {
    number: "01",
    title: "Reputation and clarity review",
    description:
      "We look at your website the way a first-time visitor does. Where does it look dated, where does it feel confusing, and where does it fail to reflect the quality of your work?",
  },
  {
    number: "02",
    title: "Visibility review",
    description:
      "We examine how interpretable your site is to search engines and AI assistants: page subjects, headings, service and area signals, expertise signals, and consistency of business details.",
  },
  {
    number: "03",
    title: "Structure and messaging plan",
    description:
      "We map your services, service areas, proof, and the real questions customers ask, then define the page structure and plain-language messaging that answers them.",
  },
  {
    number: "04",
    title: "Modernization",
    description:
      "We rebuild the design, hierarchy, content, and mobile experience so the site presents an established, credible business and reads effortlessly.",
  },
  {
    number: "05",
    title: "AEO and GEO preparation",
    description:
      "We organize the content into clean, self-contained answers with explicit entity details so answer engines and generative systems can interpret and cite your business accurately.",
  },
  {
    number: "06",
    title: "Launch and refinement",
    description:
      "We test the experience across devices, verify consistency of your business information, and identify the next round of clarity improvements.",
  },
];

export const ProcessSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0b0b0b] px-6 py-24 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at right, #280D3D 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-16">
        <header className="flex max-w-2xl flex-col items-center gap-5 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              How it works
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              From outdated site to credible, legible presence
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-pretty text-base leading-relaxed text-[#737373]">
              Every step serves reputation, clarity, or visibility. Nothing is
              added because it sounds impressive.
            </p>
          </Reveal>
        </header>

        <div className="relative w-full max-w-3xl">
          <div className="absolute left-6 top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-[#D4AF37]/40 via-[#280D3D]/60 to-transparent sm:block" />
          <div className="flex flex-col gap-12">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="group flex items-start gap-8">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center border border-[#D4AF37]/40 bg-[#111111] transition-colors duration-300 group-hover:border-[#D4AF37]">
                    <span className="font-mono text-xs font-bold text-[#D4AF37]">
                      {step.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="animate-bounce-soft absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#D4AF37]"
                      style={{
                        ["--animation-delay" as string]: `${index * 0.25}s`,
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#D4AF37]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#737373]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
