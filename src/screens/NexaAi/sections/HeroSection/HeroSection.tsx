import { Button } from "../../../../components/ui/button";

const navLinks = ["Services", "Solutions", "About", "Contact"];

export const HeroSection = (): JSX.Element => {
  return (
    <>
      {/* Navigation */}
      <header className="relative z-20 flex w-full items-center justify-between border-b border-[#1a1a1a] bg-[#0b0b0b]/80 px-6 py-5 backdrop-blur-sm sm:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          {/* DS Monogram */}
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#D4AF37]/30 bg-[#280D3D]/40">
            <span className="bg-gradient-to-br from-[#D4AF37] to-[#a8892a] bg-clip-text text-lg font-bold leading-none tracking-tight text-transparent [-webkit-background-clip:text]">
              DS
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-[0.15em] text-white uppercase">
              DS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase">
              Automations
            </span>
          </div>
        </div>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium tracking-wide text-[#a3a3a3] transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
        <Button
          type="button"
          className="h-10 rounded-none border border-[#D4AF37] bg-transparent px-6 text-sm font-medium tracking-wider text-[#D4AF37] uppercase transition-all hover:bg-[#D4AF37] hover:text-[#0b0b0b]"
        >
          Book a Call
        </Button>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[88vh] w-full flex-col items-center justify-center px-6 py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-20"
          style={{ background: "radial-gradient(ellipse, #280D3D 0%, transparent 65%)" }}
        />
        <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
          {/* Eyebrow */}
          <p
            className="animate-fade-up text-sm font-semibold tracking-[0.3em] uppercase"
            style={{ color: "#D4AF37", animationDelay: "0.05s", animationFillMode: "both" }}
          >
            Automate. Scale. Grow.
          </p>

          {/* Headline */}
          <h1
            className="animate-fade-up text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
            style={{ animationDelay: "0.15s", animationFillMode: "both" }}
          >
            Systems that{" "}
            <span
              className="bg-gradient-to-r from-[#D4AF37] to-[#a8892a] bg-clip-text text-transparent [-webkit-background-clip:text]"
            >
              save time,
            </span>
            <br />
            <span
              className="bg-gradient-to-r from-[#D4AF37] to-[#a8892a] bg-clip-text text-transparent [-webkit-background-clip:text]"
            >
              make money,
            </span>
            <br />
            and{" "}
            <span
              className="bg-gradient-to-r from-[#D4AF37] to-[#a8892a] bg-clip-text text-transparent [-webkit-background-clip:text]"
            >
              prevent lost revenue.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up max-w-2xl text-lg leading-relaxed text-[#737373] sm:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "both" }}
          >
            We build AI agents, follow-up systems, and custom automations that turn missed
            opportunities into consistent revenue — without adding headcount.
          </p>

          {/* CTA */}
          <div
            className="animate-fade-up flex flex-col items-center gap-4 pt-4 sm:flex-row"
            style={{ animationDelay: "0.35s", animationFillMode: "both" }}
          >
            <Button
              type="button"
              className="h-14 rounded-none bg-[#D4AF37] px-10 text-base font-semibold tracking-wider text-[#0b0b0b] uppercase transition-all duration-300 hover:bg-[#c4a030] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              Request Automation Audit
            </Button>
            <a
              href="#"
              className="text-sm font-medium tracking-wide text-[#737373] underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              See our services
            </a>
          </div>

          {/* 3 value props */}
          <div
            className="animate-fade-up mt-8 grid grid-cols-1 gap-px sm:grid-cols-3"
            style={{ animationDelay: "0.45s", animationFillMode: "both" }}
          >
            {[
              { label: "Save Time", sub: "Eliminate manual tasks and time-wasters" },
              { label: "Make Money", sub: "Convert more leads and increase bookings" },
              { label: "Prevent Lost Revenue", sub: "Never miss another call, lead, or opportunity" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1.5 border-[#1a1a1a] px-8 py-6 sm:border-r last:border-r-0"
              >
                <span className="text-sm font-bold tracking-widest text-[#D4AF37] uppercase">
                  {item.label}
                </span>
                <span className="text-xs leading-relaxed text-[#525252]">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
