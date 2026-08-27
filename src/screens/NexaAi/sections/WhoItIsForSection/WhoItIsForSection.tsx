import { Reveal } from "../../components/Reveal";

const fit = [
  "Your website looks older than your business actually is",
  "Visitors ask questions your site should already answer",
  "Your services are hard to tell apart or understand",
  "Your reviews and reputation are stronger than your website suggests",
  "Your site is difficult to use on a phone",
  "AI assistants describe your business vaguely or inaccurately",
  "You have outgrown a basic template",
];

const notFit = [
  "You only want the cheapest possible website",
  "You want content copied from competitors",
  "You expect guaranteed rankings or AI recommendations",
  "You prefer not to share service, area, or business details",
  "You want vague marketing language instead of specifics",
];

export const WhoItIsForSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0a0a0a] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
        <header className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              A good fit for
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-pretty text-lg font-medium text-[#D4AF37]">
              Local businesses whose reputation has outgrown their website.
            </p>
          </Reveal>
        </header>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <div className="relative flex h-full flex-col gap-6 border border-[#1a1a1a] bg-[#111111] p-8">
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-1 w-full bg-[#D4AF37]/50"
              />
              <h3 className="text-xl font-bold text-white">
                This is likely a fit when:
              </h3>
              <ul className="flex flex-col gap-4 text-[#a3a3a3]">
                {fit.map((item, index) => (
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

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-6 border border-[#1a1a1a] bg-[#0b0b0b] p-8">
              <h3 className="text-xl font-bold text-[#737373]">
                This is likely not a fit when:
              </h3>
              <ul className="flex flex-col gap-4 text-[#737373]">
                {notFit.map((item) => (
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
        </div>
      </div>
    </section>
  );
};
