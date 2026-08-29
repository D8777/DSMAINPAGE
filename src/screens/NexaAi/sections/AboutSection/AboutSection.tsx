import { Reveal } from "../../components/Reveal";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="relative w-full border-t border-[#1a1a1a] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <header className="flex max-w-3xl flex-col gap-4">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
              About us
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              We tailor your website so people and AI both find it easy to trust.
            </h2>
          </Reveal>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.5fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-[#a3a3a3]">
                As a business owner, you are constantly balancing life, family,
                and the daily grind of running your company. Who actually has
                the time to rebuild a website, let alone make sure it still
                makes sense to Google, AI, and everyone in between?
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-pretty text-lg leading-relaxed text-[#a3a3a3]">
                That question alone is a headache…
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-pretty text-lg leading-relaxed text-[#a3a3a3]">
                The reality is that most agencies use slapped-together templates
                and generic AI prompts. They swap in your logo, change the
                colors, but those generic setups are practically invisible to
                the way customers and AI actually search today.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-pretty text-lg leading-relaxed text-[#a3a3a3]">
                We do things differently. We take the time to understand your
                brand vision and services. We tailor your site around the quality
                of your work and the questions your customers have before
                booking, making it easier for them to take the next step.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="w-full">
            <div className="relative mx-auto w-full max-w-[320px] overflow-hidden border border-[#D4AF37]/40 bg-[#0b0b0b] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.4)] lg:mx-0">
              <div className="relative aspect-square overflow-hidden bg-[#111111]">
                <img
                  src="/derek-founder.png"
                  alt="Derek, founder of DS Automations"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/80 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 font-mono text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
                  Meet Derek
                </p>
              </div>
              <p className="px-2 pb-2 pt-5 text-center text-xl font-medium text-white sm:text-2xl">
                &quot;Your Business is My Business&quot;
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="border-t border-[#1a1a1a] pt-8">
            <p className="max-w-4xl text-pretty text-xl font-medium leading-relaxed text-[#D4AF37] sm:text-2xl">
              This isn&apos;t just a tagline, it&apos;s our company culture. We
              treat your business with the exact care, focus, and attention to
              detail as if it were our own.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
