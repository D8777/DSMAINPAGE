import { Reveal } from "../../components/Reveal";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="relative w-full border-t border-[#1a1a1a] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
        <header className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why DS Automations
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-pretty text-lg font-medium text-[#D4AF37]">
              We close the gap between the quality you deliver and the way you
              are represented online.
            </p>
          </Reveal>
        </header>

        <div className="flex w-full flex-col items-stretch gap-8 md:flex-row">
          <Reveal className="flex-1">
            <div className="flex h-full flex-col justify-center border border-[#1a1a1a] bg-[#111111] p-8 text-center">
              <p className="text-lg italic leading-relaxed text-[#737373]">
                &ldquo;Most website providers focus on how a site looks. Very few
                ask whether a customer, or an AI assistant, can actually
                understand the business behind it.&rdquo;
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex-[2]">
            <div className="relative flex h-full flex-col gap-6 overflow-hidden border border-[#D4AF37]/20 bg-[#0b0b0b] p-8">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-32 w-32 bg-[#280D3D]/20 blur-3xl"
              />
              <h3 className="text-2xl font-bold text-white">
                We work on three things, in order.
              </h3>

              <p className="leading-relaxed text-[#a3a3a3]">
                First, reputation: your website should look like it belongs to an
                established, active, credible business. Second, clarity: a
                visitor should understand your services, your service area, and
                your expertise without effort.
              </p>
              <p className="leading-relaxed text-[#a3a3a3]">
                Third, visibility: your content should be structured clearly
                enough that search engines, answer engines, and AI assistants can
                interpret and describe your business accurately.
              </p>

              <div className="mt-4 border-t border-[#1a1a1a] pt-6">
                <p className="text-lg font-medium leading-relaxed text-[#D4AF37]">
                  Your business may already be excellent. Your website should
                  make that obvious to everyone, and everything, that looks.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
