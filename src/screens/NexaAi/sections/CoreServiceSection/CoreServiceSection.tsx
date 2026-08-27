import { Reveal } from "../../components/Reveal";

const pillars = [
  {
    tag: "Reputation",
    title: "A first impression that matches your work",
    body: "Modern layout, confident typography, real photography, and a presentation standard that signals an established, active business.",
  },
  {
    tag: "Reputation",
    title: "Proof placed where it changes minds",
    body: "Reviews, credentials, experience, guarantees, and completed work presented as evidence rather than decoration.",
  },
  {
    tag: "Clarity",
    title: "Services people can understand instantly",
    body: "Each service explained in plain language, with scope, expectations, and who it is right for, on its own dedicated page.",
  },
  {
    tag: "Clarity",
    title: "Mobile-first experience",
    body: "Fast, readable, thumb-friendly pages, because most people will judge your business on a phone screen first.",
  },
  {
    tag: "Visibility",
    title: "Content organized for interpretation",
    body: "Clean hierarchy, descriptive headings, structured answers, and consistent business details so search and AI systems can read you correctly.",
  },
  {
    tag: "Visibility",
    title: "Clear service, area, and expertise signals",
    body: "Who you are, what you do, where you do it, and why you are qualified, stated explicitly instead of implied.",
  },
];

const tagColor: Record<string, string> = {
  Reputation: "text-[#D4AF37] border-[#D4AF37]/30",
  Clarity: "text-[#c9a4e0] border-[#c9a4e0]/30",
  Visibility: "text-[#8fb7d9] border-[#8fb7d9]/30",
};

export const CoreServiceSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0a0a0a] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <header className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              What we do
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Website modernization built on three outcomes
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-pretty text-lg leading-relaxed text-[#737373]">
              We rebuild the parts of your website that shape trust, remove
              friction, and make your business legible to modern search. Every
              decision serves one of those three outcomes.
            </p>
          </Reveal>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.06 * index}>
              <div className="group flex h-full flex-col gap-4 border border-[#1a1a1a] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40">
                <span
                  className={`w-fit border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${tagColor[pillar.tag]}`}
                >
                  {pillar.tag}
                </span>
                <h3 className="text-lg font-bold leading-snug text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#737373]">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <button className="h-14 rounded-none bg-[#D4AF37] px-10 text-base font-semibold uppercase tracking-wider text-[#0b0b0b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c4a030] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]">
            Review My Current Website
          </button>
        </Reveal>
      </div>
    </section>
  );
};
