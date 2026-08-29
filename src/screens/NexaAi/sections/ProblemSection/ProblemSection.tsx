import { ShieldAlert, Route, EyeOff } from "lucide-react";
import { Reveal } from "../../components/Reveal";

const harms = [
  {
    icon: ShieldAlert,
    title: "A new customer doesn't know any of that yet",
    body: "You know your business. Your customers may love you. You may do exceptional work. But someone landing on your site for the first time only sees what's in front of them.",
    points: [
      "An old website, or one that looks abandoned",
      "Confusing pages and vague services",
      "Weak reviews or missing information",
    ],
  },
  {
    icon: Route,
    title: "Every bit of confusion is a reason to keep looking",
    body: "A site that makes people work just to understand what you actually do creates friction. And friction is all it takes for someone to move on to the next result.",
    points: [
      "Inconsistent business details",
      "Hard-to-find answers to basic questions",
      "A next step that isn't obvious",
    ],
  },
  {
    icon: EyeOff,
    title: "Search engines and AI are asking the same questions",
    body: "Search and AI systems are also trying to understand your business from what you put online. If the answers aren't clear, your digital presence is working against you.",
    points: [
      "Who are you, and what do you do?",
      "Where do you do it, and who do you serve?",
      "Can you be trusted, and why should someone choose you?",
    ],
  },
];

export const ProblemSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0a0a0a] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <header className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              The gap
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your business may be better than your website makes it look
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-pretty text-lg leading-relaxed text-[#737373]">
              An outdated website rarely fails loudly. It fails quietly, in three
              places at once: how much people trust you, how easily they
              understand you, and how clearly modern search can interpret you.
            </p>
          </Reveal>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {harms.map((harm, index) => {
            const Icon = harm.icon;
            return (
              <Reveal key={harm.title} delay={0.1 + index * 0.12}>
                <div className="group flex h-full flex-col gap-5 border border-[#1a1a1a] bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_18px_40px_-24px_rgba(212,175,55,0.35)]">
                  <div className="relative flex h-12 w-12 items-center justify-center border border-[#D4AF37]/30 bg-[#0b0b0b]">
                    <span
                      aria-hidden="true"
                      className="animate-pulse-ring absolute inset-0 border border-[#D4AF37]/30"
                      style={{
                        ["--animation-delay" as string]: `${index * 0.6}s`,
                      }}
                    />
                    <Icon
                      className="animate-bounce-soft h-5 w-5 text-[#D4AF37]"
                      style={{
                        ["--animation-delay" as string]: `${index * 0.4}s`,
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white">{harm.title}</h3>
                  <p className="text-sm leading-relaxed text-[#737373]">
                    {harm.body}
                  </p>

                  <ul className="mt-auto flex flex-col gap-2 border-t border-[#1a1a1a] pt-5">
                    {harm.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-[#a3a3a3]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#D4AF37]"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="w-full max-w-3xl">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-pretty text-lg font-medium text-white">
              You may never hear about it. People simply decide you are not the
              safest choice and move on.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
