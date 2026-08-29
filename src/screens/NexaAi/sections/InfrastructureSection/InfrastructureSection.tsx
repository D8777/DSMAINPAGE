import { Reveal } from "../../components/Reveal";

const infrastructureItems = [
  "Your services",
  "Your expertise",
  "Your service area",
  "Your reputation",
  "Your answers to common questions",
  "Your policies",
  "Your contact information",
  "Your booking process",
  "Your business identity",
];

export const InfrastructureSection = (): JSX.Element => {
  return (
    <section className="relative w-full border-t border-[#1a1a1a] bg-[#0a0a0a] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-14 text-center">
        <header className="flex max-w-3xl flex-col items-center gap-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              The bigger picture
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your website used to be a brochure. Now it&apos;s the source of truth.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-pretty text-lg leading-relaxed text-[#737373]">
              For years, a website was treated like a digital brochure: a few
              photos, an About page, a list of services, a phone number. Done.
              That version of the website is becoming a thing of the past.
            </p>
          </Reveal>
        </header>

        <Reveal delay={0.1} className="w-full">
          <div className="flex flex-col items-center gap-6 border-t border-[#1a1a1a] pt-10">
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white">
              Your website is increasingly becoming the source of truth for your
              business online, telling people, and the systems helping those
              people, what your business actually is.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-px pt-2">
              {infrastructureItems.map((item, index) => (
                <span
                  key={item}
                  className="animate-bounce-soft border border-[#1a1a1a] bg-[#111111] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37]"
                  style={{ ["--animation-delay" as string]: `${index * 0.2}s` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14} className="max-w-2xl">
          <p className="text-pretty text-lg font-medium leading-relaxed text-[#a3a3a3]">
            The future isn&apos;t about having a website because every business
            is supposed to have one. It&apos;s about building digital
            infrastructure that makes your business easy to understand and easy
            to choose.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
