import { Reveal } from "../../components/Reveal";

const definitions = [
  {
    term: "SEO",
    full: "Search Engine Optimization",
    body: "Helping traditional search engines find, crawl, and rank your pages. Still the foundation, still necessary.",
  },
  {
    term: "AEO",
    full: "Answer Engine Optimization",
    body: "Structuring your content so answer engines can lift a clear, correct answer straight from your site when someone asks a question.",
  },
  {
    term: "GEO",
    full: "Generative Engine Optimization",
    body: "Making your business understandable enough that generative assistants such as ChatGPT can describe and reference it accurately.",
  },
];

const practices = [
  {
    title: "Plain-language service explanations",
    body: "Each service described the way customers actually talk about it, including what it solves and who it suits.",
  },
  {
    title: "Answer-shaped content",
    body: "Real questions answered directly, in full sentences, without forcing the reader through a sales page first.",
  },
  {
    title: "Genuine local relevance",
    body: "Your services connected to the areas you truly serve, with substance instead of duplicated location filler.",
  },
  {
    title: "Clean, readable structure",
    body: "Logical hierarchy, meaningful headings, and organized pages that people, crawlers, and models can all follow.",
  },
  {
    title: "Consistent credibility signals",
    body: "Experience, process, policies, reviews, and contact details presented clearly and identically across the site.",
  },
];

export const AeoGeoSection = (): JSX.Element => {
  return (
    <section className="relative w-full border-t border-[#1a1a1a] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16">
        <header className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Visibility
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              If your website is hard to understand, it is hard to find
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-pretty text-lg leading-relaxed text-[#737373]">
              Discovery no longer happens in one place. Search engines, answer
              engines, AI assistants, maps, and voice tools all read your website
              differently, and all of them need clarity.
            </p>
          </Reveal>
        </header>

        {/* Definitions */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {definitions.map((item, index) => (
            <Reveal key={item.term} delay={0.08 * index}>
              <div className="group flex h-full flex-col gap-3 border border-[#1a1a1a] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40">
                <span
                  className="animate-float text-3xl font-black tracking-tight text-[#D4AF37]"
                  style={{ ["--animation-delay" as string]: `${index * 0.7}s` }}
                >
                  {item.term}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#a3a3a3]">
                  {item.full}
                </span>
                <p className="text-sm leading-relaxed text-[#737373]">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Practices */}
        <div className="flex w-full flex-col gap-12 lg:flex-row">
          <div className="flex-1">
            <Reveal>
              <h3 className="mb-6 text-xl font-bold text-white">
                What these platforms need to understand
              </h3>
            </Reveal>
            <ul className="flex flex-col gap-4 text-[#a3a3a3]">
              {[
                "What your business actually does",
                "Which services you offer, and their scope",
                "Where you operate",
                "Who your services are for",
                "Why your expertise is credible",
                "How someone reaches you",
              ].map((item, index) => (
                <Reveal key={item} delay={0.05 * index}>
                  <li className="flex items-start gap-3">
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
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.15}>
              <p className="mt-8 border-l-2 border-[#D4AF37] py-1 pl-4 font-medium text-[#D4AF37]">
                We structure your content for traditional search, answer engines,
                and AI-driven discovery at the same time.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="flex-1">
            <div className="border border-[#1a1a1a] bg-[#111111] p-8">
              <h3 className="mb-8 text-xl font-bold text-white">
                What that means in practice
              </h3>
              <div className="flex flex-col gap-6">
                {practices.map((practice) => (
                  <div key={practice.title}>
                    <h4 className="mb-1 text-base font-bold text-white">
                      {practice.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[#737373]">
                      {practice.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="max-w-2xl">
          <div className="rounded-sm border border-[#280D3D] bg-[#280D3D]/20 p-6 text-center">
            <p className="text-sm leading-relaxed text-[#a3a3a3]">
              <span className="font-bold text-[#D4AF37]">Note:</span> we do not
              promise that a search engine will rank you first or that an AI
              platform will recommend you. We make your business a clearer, more
              credible source for those systems to understand.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
