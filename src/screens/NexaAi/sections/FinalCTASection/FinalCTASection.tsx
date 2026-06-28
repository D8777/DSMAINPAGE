import { Button } from "../../../../components/ui/button";

export const FinalCTASection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-4xl overflow-hidden border border-[#1e1e1e] bg-[#0f0f0f]">
        {/* Purple corner glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] opacity-30"
          style={{ background: "radial-gradient(circle, #280D3D 0%, transparent 65%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] opacity-20"
          style={{ background: "radial-gradient(circle, #280D3D 0%, transparent 65%)" }}
        />
        {/* Gold top line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-8 px-8 py-16 text-center sm:px-16 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
            Free. No Commitment.
          </p>
          <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Find out exactly what's costing you
            <br />
            time and revenue every week.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-[#737373]">
            30-minute call. Clear automation priorities.
            No sales pitch. No follow-up pressure.
            <br />
            You decide what to do with the information.
          </p>
          <Button
            type="button"
            className="mt-2 h-14 rounded-none bg-[#D4AF37] px-12 text-base font-bold tracking-wider text-[#0b0b0b] uppercase transition-all duration-300 hover:bg-[#c4a030] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]"
          >
            Request Automation Audit
          </Button>
          <p className="text-xs tracking-wide text-[#3a3a3a] uppercase">
            Free &mdash; takes 2 minutes to schedule
          </p>
        </div>
      </div>
    </section>
  );
};
