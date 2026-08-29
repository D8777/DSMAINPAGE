import { Reveal } from "../../components/Reveal";

const pillars = ["Search & AI Visibility", "Reputation", "Conversion & Clarity"];

const discoveryPaths = [
  "They may still search Google.",
  "They may find you through Maps.",
  "They may ask a friend.",
  "They may discover you on social media.",
  "Or they may ask an AI assistant: “Find the best company near me for this.”",
];

export const FinalCTASection = (): JSX.Element => {
  return (
    <section id="get-started" className="relative w-full scroll-mt-20 bg-[#0b0b0b] px-6 py-32 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          background: "radial-gradient(ellipse, #280D3D 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Think about your next customer
          </p>
        </Reveal>

        <Reveal delay={0.06} className="flex flex-col gap-1.5 text-pretty text-base leading-relaxed text-[#a3a3a3] sm:text-lg">
          {discoveryPaths.map((path) => (
            <p key={path}>{path}</p>
          ))}
        </Reveal>

        <Reveal delay={0.14}>
          <h2 className="text-balance text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            The interface can change.
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#a8892a] bg-clip-text text-transparent [-webkit-background-clip:text]">
              The requirement doesn&apos;t.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-[#737373] sm:text-xl">
            Your business needs to be discoverable, understandable, credible, and
            easy to choose. That&apos;s what we build.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="flex flex-wrap items-center justify-center gap-px pt-4">
            {pillars.map((item, index) => (
              <span
                key={item}
                className="animate-bounce-soft border border-[#1a1a1a] bg-[#111111] px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]"
                style={{ ["--animation-delay" as string]: `${index * 0.3}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="mt-4 text-xs font-medium tracking-wide text-[#525252]">
            No templates. No keyword tricks. No guaranteed-ranking promises.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
