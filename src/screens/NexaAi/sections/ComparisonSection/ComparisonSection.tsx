import { Reveal } from "../../components/Reveal";

const outdated = [
  "Looks years behind competitors",
  "Services described in vague slogans",
  "Key details buried or missing entirely",
  "Important information locked inside images",
  "Frustrating to read on a phone",
  "Ambiguous page subjects and headings",
  "Business details inconsistent across the web",
];

const modernized = [
  "Presents an established, active business",
  "Services explained in plain, specific language",
  "Proof and credentials placed where they matter",
  "Details stated in readable text",
  "Fast, effortless mobile experience",
  "One clear subject per page, descriptive headings",
  "Consistent details people and AI can rely on",
];

export const ComparisonSection = (): JSX.Element => {
  return (
    <section className="relative w-full border-t border-[#1a1a1a] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <header className="flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              An outdated website{" "}
              <span className="text-[#525252]">vs.</span> a modernized one
            </h2>
          </Reveal>
        </header>

        <div className="flex w-full flex-col gap-8 md:flex-row">
          <Reveal className="flex-1">
            <div className="flex h-full flex-col gap-6 border border-[#1a1a1a] bg-[#0b0b0b] p-8">
              <h3 className="border-b border-[#1a1a1a] pb-4 text-center text-xl font-bold text-[#737373]">
                Outdated
              </h3>
              <ul className="flex flex-col gap-4 text-[#a3a3a3]">
                {outdated.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-1 text-[#333]">
                      &times;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex-1">
            <div className="relative flex h-full flex-col gap-6 overflow-hidden border border-[#D4AF37]/30 bg-[#111111] p-8">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-32 w-32 bg-[#D4AF37]/5 blur-3xl"
              />
              <h3 className="border-b border-[#1a1a1a] pb-4 text-center text-xl font-bold text-[#D4AF37]">
                Modernized by DS
              </h3>
              <ul className="flex flex-col gap-4 text-white">
                {modernized.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="animate-bounce-soft mt-1 text-[#D4AF37]"
                      style={{
                        ["--animation-delay" as string]: `${index * 0.15}s`,
                      }}
                    >
                      &#10003;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
