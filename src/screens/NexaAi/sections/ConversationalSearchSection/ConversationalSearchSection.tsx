import { Reveal } from "../../components/Reveal";

const oldSearches = ["detailer near me", "ceramic coating price", "car wash 90210"];

const newSearches = [
  "Who is the best ceramic coating shop near me for a daily driver I keep long term?",
  "I need a trustworthy detailer in my area that works on lifted trucks. Who should I call?",
  "Compare paint correction options near me and tell me which one is worth the money.",
];

const signals = [
  { label: "Services", detail: "Named, scoped, explained" },
  { label: "Locations", detail: "Real service areas" },
  { label: "Expertise", detail: "Experience and process" },
  { label: "Proof", detail: "Reviews and results" },
  { label: "Answers", detail: "Direct Q&A content" },
  { label: "Details", detail: "Hours, contact, policies" },
];

export const ConversationalSearchSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] px-6 py-24 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 opacity-20"
        style={{
          background: "radial-gradient(ellipse at top, #280D3D 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16">
        <header className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              The way customers find businesses is changing
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              It used to be simple. Search, click, compare, call.
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="flex flex-col gap-3 text-pretty text-lg leading-relaxed text-[#737373]">
            <p>
              That behavior isn&apos;t disappearing. But it is changing. People are
              asking AI for answers, recommendations, comparisons, and help
              making decisions.
            </p>
            <p>
              Instead of searching through business after business themselves,
              they can ask &ldquo;who&apos;s the best company near me for what I
              need?&rdquo; and let AI narrow the field.
            </p>
            <p className="text-white">
              That creates a new problem: if your business is difficult to
              understand online, why would it be easy for AI to recommend?
            </p>
          </Reveal>
        </header>

        {/* Old vs new search behavior */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-5 border border-[#1a1a1a] bg-[#0b0b0b] p-8">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#525252]">
                Then: keyword search
              </h3>
              <div className="flex flex-col gap-3">
                {oldSearches.map((q) => (
                  <div
                    key={q}
                    className="border border-[#1a1a1a] px-4 py-2.5 text-sm text-[#737373]"
                  >
                    {q}
                  </div>
                ))}
              </div>
              <p className="mt-auto border-t border-[#1a1a1a] pt-5 text-sm leading-relaxed text-[#525252]">
                Short queries. Ten blue links. The customer did the comparing.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-5 border border-[#D4AF37]/30 bg-[#111111] p-8">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Now: conversational search
              </h3>
              <div className="flex flex-col gap-3">
                {newSearches.map((q, index) => (
                  <div
                    key={q}
                    className="animate-float rounded-sm border border-[#333] bg-[#0b0b0b] px-4 py-3 text-sm leading-relaxed text-[#e5e5e5]"
                    style={{
                      ["--animation-delay" as string]: `${index * 0.9}s`,
                    }}
                  >
                    {q}
                    {index === 0 && (
                      <span
                        aria-hidden="true"
                        className="animate-caret ml-1 inline-block h-4 w-[2px] translate-y-0.5 bg-[#D4AF37]"
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-auto border-t border-[#1a1a1a] pt-5 text-sm leading-relaxed text-[#a3a3a3]">
                Full sentences with context and intent. The assistant does the
                comparing, then recommends a short list.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Flow diagram */}
        <Reveal delay={0.1} className="w-full">
          <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-center">
            {/* Question */}
            <div className="flex-1 border border-[#1a1a1a] bg-[#111111] p-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#525252]">
                Step 1 — The question
              </p>
              <p className="text-pretty text-base leading-relaxed text-white">
                &ldquo;I want a detailer near me who has actually worked on
                ceramic coating for daily drivers. Who is reputable?&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-[#737373]">
                Asked in ChatGPT, not a search bar
              </p>
            </div>

            {/* Connector */}
            <div
              aria-hidden="true"
              className="relative mx-auto h-16 w-px shrink-0 overflow-hidden bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent lg:h-px lg:w-24 lg:bg-gradient-to-r"
            >
              <span
                className="animate-signal absolute left-0 top-0 h-3 w-full bg-[#D4AF37] lg:h-full lg:w-3"
                style={{ ["--animation-delay" as string]: "0s" }}
              />
            </div>

            {/* Signals */}
            <div className="flex-1 border border-[#D4AF37]/30 bg-[#0b0b0b] p-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Step 2 — What the model reads
              </p>
              <div className="grid grid-cols-2 gap-3">
                {signals.map((signal, index) => (
                  <div
                    key={signal.label}
                    className="animate-bounce-soft border border-[#1a1a1a] bg-[#111111] px-3 py-2.5"
                    style={{
                      ["--animation-delay" as string]: `${index * 0.35}s`,
                    }}
                  >
                    <p className="text-xs font-bold text-white">
                      {signal.label}
                    </p>
                    <p className="text-[11px] leading-snug text-[#737373]">
                      {signal.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector */}
            <div
              aria-hidden="true"
              className="relative mx-auto h-16 w-px shrink-0 overflow-hidden bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent lg:h-px lg:w-24 lg:bg-gradient-to-r"
            >
              <span
                className="animate-signal absolute left-0 top-0 h-3 w-full bg-[#D4AF37] lg:h-full lg:w-3"
                style={{ ["--animation-delay" as string]: "1.1s" }}
              />
            </div>

            {/* Answer */}
            <div className="flex-1 border border-[#1a1a1a] bg-[#111111] p-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#525252]">
                Step 3 — The answer
              </p>
              <p className="text-pretty text-base leading-relaxed text-white">
                A short, confident recommendation naming the businesses the model
                could clearly understand and verify.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-[#D4AF37]">
                Clarity decides who gets named
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="max-w-3xl">
          <div className="border border-[#280D3D] bg-[#280D3D]/20 p-6 text-center">
            <p className="text-sm leading-relaxed text-[#a3a3a3]">
              <span className="font-bold text-[#D4AF37]">The shift:</span> search
              used to reward pages that matched words. Conversational search
              rewards businesses that are genuinely easy to understand. That is a
              content and structure problem, and it is fixable.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
