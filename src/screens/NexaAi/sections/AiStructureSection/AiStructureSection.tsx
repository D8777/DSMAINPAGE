import { Reveal } from "../../components/Reveal";

const structureItems = [
  {
    title: "One clear subject per page",
    body: "A model needs to know what a page is about. One service, one location, or one topic per page removes ambiguity.",
  },
  {
    title: "Descriptive headings",
    body: "Headings should state the topic in plain words rather than a slogan. They form the outline a model uses to summarize you.",
  },
  {
    title: "Explicit entity details",
    body: "Business name, services, service areas, hours, contact methods, and credentials stated consistently in text, not hidden in an image.",
  },
  {
    title: "Direct question and answer content",
    body: "Real customer questions answered in short, self-contained paragraphs. This is the format assistants quote most comfortably.",
  },
  {
    title: "Specifics over adjectives",
    body: "\u201cCeramic coating for daily drivers, two-day turnaround, in Riverside County\u201d is usable. \u201cQuality you can trust\u201d is not.",
  },
  {
    title: "Consistent information everywhere",
    body: "When your site, profiles, and listings disagree, confidence drops. Consistency is a trust signal for people and machines alike.",
  },
];

export const AiStructureSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 opacity-10"
        style={{
          background: "radial-gradient(ellipse at left, #280D3D 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-16">
        <header className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              What AI looks for
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              AI systems look for structure, not marketing language
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-pretty text-lg leading-relaxed text-[#737373]">
              A language model cannot see your reputation. It reads your pages and
              tries to build a reliable understanding of your business. The more
              structured and specific your website is, the more confidently it can
              represent you.
            </p>
          </Reveal>
        </header>

        <div className="grid w-full grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {structureItems.map((item, index) => (
            <Reveal key={item.title} delay={0.06 * index}>
              <div className="group flex gap-5">
                <span
                  aria-hidden="true"
                  className="animate-bounce-soft mt-1 h-2 w-2 shrink-0 bg-[#D4AF37]"
                  style={{ ["--animation-delay" as string]: `${index * 0.3}s` }}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#D4AF37]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#737373]">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="w-full max-w-3xl">
          <div className="flex flex-col items-center gap-6 border-t border-[#1a1a1a] pt-12 text-center">
            <p className="max-w-2xl text-pretty text-sm italic leading-relaxed text-[#a3a3a3]">
              None of this is about tricking an algorithm. A website that a model
              can understand is the same website a customer can understand
              immediately.
            </p>
            <button className="h-14 rounded-none bg-[#D4AF37] px-10 text-base font-semibold uppercase tracking-wider text-[#0b0b0b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c4a030] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]">
              Check How Clear My Site Is
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
