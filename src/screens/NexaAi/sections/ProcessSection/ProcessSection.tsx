import { ArrowRight as ArrowRightIcon } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Quick Call",
    description:
      "30 minutes. You walk us through your current operations — what's working, what isn't, and where time is slipping through the cracks.",
  },
  {
    number: "02",
    title: "Clear Findings",
    description:
      "Within 48 hours, you receive a written summary of automation opportunities prioritized by revenue impact. Specific, not generic.",
  },
  {
    number: "03",
    title: "You Decide",
    description:
      "Use the recommendations however you like. Build in-house, bring in another team, or work with us. No pressure either way.",
  },
];

export const ProcessSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 opacity-10"
        style={{ background: "radial-gradient(ellipse at right, #280D3D 0%, transparent 70%)" }}
      />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16">
        <header className="flex max-w-2xl flex-col items-center gap-5 text-center">
          <p
            className="animate-fade-up text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase"
            style={{ animationDelay: "0.05s", animationFillMode: "both" }}
          >
            What Happens Next
          </p>
          <h2
            className="animate-fade-up text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Simple. Transparent.
            <br />
            No sales gymnastics.
          </h2>
          <p
            className="animate-fade-up text-base leading-relaxed text-[#737373]"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            The process is designed to give you clarity — not to pull you into a funnel.
            Three steps, then you're in control.
          </p>
        </header>

        <div className="relative w-full max-w-3xl">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-[#D4AF37]/40 via-[#280D3D]/60 to-transparent sm:block" />
          <div className="flex flex-col gap-12">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="animate-fade-up flex items-start gap-8"
                style={{ animationDelay: `${0.3 + index * 0.15}s`, animationFillMode: "both" }}
              >
                {/* Number badge */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center border border-[#D4AF37]/40 bg-[#111111]">
                  <span className="font-mono text-xs font-bold text-[#D4AF37]">
                    {step.number}
                  </span>
                  {/* Glow dot */}
                  <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#D4AF37]" />
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#737373]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-fade-up flex flex-col items-center gap-3 pt-4 text-center"
          style={{ animationDelay: "0.75s", animationFillMode: "both" }}
        >
          <div className="flex items-center gap-2 text-sm text-[#525252]">
            <span>No commitment. No follow-up emails.</span>
            <ArrowRightIcon className="h-4 w-4 text-[#D4AF37]" />
            <span className="font-medium text-[#a3a3a3]">You decide what comes next.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
