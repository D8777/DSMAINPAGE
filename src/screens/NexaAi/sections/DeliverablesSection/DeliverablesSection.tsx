import { Reveal } from "../../components/Reveal";

const groups = [
  {
    tag: "Reputation",
    items: [
      "Modern visual design",
      "Confident typography and hierarchy",
      "Real photography direction",
      "Proof, reviews, and credentials placement",
      "Consistent brand presentation",
    ],
  },
  {
    tag: "Clarity",
    items: [
      "Plain-language messaging",
      "Dedicated service pages",
      "Service-area explanation",
      "Mobile-first layouts",
      "Clean navigation and page structure",
    ],
  },
  {
    tag: "Visibility",
    items: [
      "Descriptive heading structure",
      "Question-and-answer content",
      "Explicit business and entity details",
      "AEO and GEO content organization",
      "Consistency across profiles and listings",
    ],
  },
];

const tagColor: Record<string, string> = {
  Reputation: "text-[#D4AF37] border-[#D4AF37]/30",
  Clarity: "text-[#c9a4e0] border-[#c9a4e0]/30",
  Visibility: "text-[#8fb7d9] border-[#8fb7d9]/30",
};

export const DeliverablesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0a0a0a] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14">
        <header className="flex max-w-2xl flex-col items-center gap-5 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              What a modernized website includes
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-pretty text-lg font-medium text-[#D4AF37]">
              Grouped by the three outcomes that matter.
            </p>
          </Reveal>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.tag} delay={groupIndex * 0.12}>
              <div className="flex h-full flex-col gap-6 border border-[#1a1a1a] bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40">
                <span
                  className={`w-fit border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${tagColor[group.tag]}`}
                >
                  {group.tag}
                </span>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#a3a3a3]"
                    >
                      <span
                        aria-hidden="true"
                        className="animate-bounce-soft mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#D4AF37]"
                        style={{
                          ["--animation-delay" as string]: `${(groupIndex * 5 + index) * 0.12}s`,
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="max-w-2xl text-center text-sm leading-relaxed text-[#737373]">
            Scope is agreed before any work begins, based on what your site
            actually needs.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
