import { Button } from "../../../../components/ui/button";

export const FinalCTASection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-32 sm:px-10 lg:px-16 bg-[#0b0b0b]">
      {/* Central glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{ background: "radial-gradient(ellipse, #280D3D 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <h2
          className="animate-fade-up text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl uppercase"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          YOUR NEXT CUSTOMER MAY ALREADY BE SEARCHING
        </h2>
        <p
          className="animate-fade-up max-w-2xl text-lg leading-relaxed text-[#737373] sm:text-xl"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Make it easier for them to find you, trust you, and take the next step.
          <br /><br />
          Start with a clear review of your website and lead flow. We will identify the biggest opportunities, explain what should be fixed first, and show where search strategy or automation may help.
        </p>

        <div
          className="animate-fade-up flex flex-col items-center gap-4 pt-4 sm:flex-row"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <Button
            type="button"
            className="h-14 rounded-none bg-[#D4AF37] px-10 text-base font-semibold tracking-wider text-[#0b0b0b] uppercase transition-all duration-300 hover:bg-[#c4a030] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
          >
            Get My Free Website Audit
          </Button>
          <a
            href="#"
            className="text-sm font-medium tracking-wide text-[#737373] underline-offset-4 transition-colors hover:text-white hover:underline uppercase"
          >
            Ask About the Website Assistant
          </a>
        </div>
        
        <p className="animate-fade-up text-[#525252] text-xs font-medium tracking-wide mt-4" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          Built for detailers. Focused on qualified inquiries—not vanity metrics.
        </p>
      </div>
    </section>
  );
};
