import { Reveal } from "../../components/Reveal";

const decisions = [
  "Is this business credible and still active?",
  "Do they clearly offer what I need?",
  "Do they serve my area?",
  "Do they have real proof and reviews?",
  "Do they explain their expertise and process?",
  "Is it obvious how to reach them?",
];

export const PositioningSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              What we do
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              We fix the gap between the business you are and the business people see online
            </h2>
          </Reveal>
          <Reveal
            delay={0.16}
            className="flex flex-col gap-4 text-lg leading-relaxed text-[#737373]"
          >
            <p>
              People rarely evaluate a website on design alone. They are deciding
              whether your business is trustworthy, relevant, and easy to deal
              with.
            </p>
            <p>
              Every unanswered question adds friction. Every unclear page weakens
              confidence. And anything left ambiguous is also ambiguous to the
              search and AI systems trying to describe you.
            </p>
            <p className="text-white">
              We organize your website around those decisions, so the answer is
              obvious to a person and interpretable by a machine.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="w-full flex-1">
          <div className="relative border border-[#1a1a1a] bg-[#111111] p-8">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#D4AF37] to-[#280D3D]"
            />
            <h3 className="mb-6 text-xl font-bold text-white">
              What every visitor is silently asking
            </h3>
            <ul className="flex flex-col gap-4 text-[#a3a3a3]">
              {decisions.map((item, index) => (
                <li
                  key={item}
                  className="group flex items-start gap-3 transition-colors hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="animate-bounce-soft mt-1 text-[#D4AF37]"
                    style={{
                      ["--animation-delay" as string]: `${index * 0.25}s`,
                    }}
                  >
                    ●
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-[#1a1a1a] pt-6">
              <p className="font-medium text-[#D4AF37]">
                Answer these clearly and your reputation, your customer
                experience, and your discoverability all improve at once.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
