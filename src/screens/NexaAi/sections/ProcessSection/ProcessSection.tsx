import { ArrowRight as ArrowRightIcon } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Website and lead-flow audit",
    description:
      "We review your current website, search presence, messaging, service structure, calls to action, and inquiry process. You will see where customers may be getting confused, losing trust, or leaving without contacting you.",
  },
  {
    number: "02",
    title: "Strategy and positioning",
    description:
      "We define: Your ideal customers, priority services, service areas, competitive differences, core offer, calls to action, customer questions, and lead path. This gives the website a clear business purpose before design begins.",
  },
  {
    number: "03",
    title: "Copy and website build",
    description:
      "We develop the page structure, messaging, design, service content, and conversion paths around your approved strategy.",
  },
  {
    number: "04",
    title: "Search and tracking setup",
    description:
      "We prepare the core on-page structure for local search and AI-assisted discovery, then connect appropriate analytics and lead tracking.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Your website is reviewed, tested, and launched once the core content and functionality are approved.",
  },
  {
    number: "06",
    title: "Optional automation",
    description:
      "After the website foundation is in place, we can add the Website Booking Assistant and other follow-up systems where they make sense.",
  }
];

export const ProcessSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 bg-[#0b0b0b]">
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
            How it works
          </p>
          <h2
            className="animate-fade-up text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            A CLEAR PROCESS FROM AUDIT TO LAUNCH
          </h2>
          <p
            className="animate-fade-up text-base leading-relaxed text-[#737373]"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            Your website should be built around your business—not handed to you from a template.
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
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "both" }}
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
          className="animate-fade-up flex flex-col items-center gap-6 pt-4 text-center"
          style={{ animationDelay: "0.9s", animationFillMode: "both" }}
        >
          <button className="h-14 rounded-none border border-[#D4AF37] bg-transparent px-10 text-base font-semibold tracking-wider text-[#D4AF37] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0b0b0b]">
            Start With a Free Audit
          </button>
        </div>
      </div>
    </section>
  );
};
