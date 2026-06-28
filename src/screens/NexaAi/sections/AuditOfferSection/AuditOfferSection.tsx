import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

const auditFeatures = [
  {
    number: "01",
    title: "Process Mapping",
    description:
      "We identify where work stalls, what's handled manually, and where your tools don't communicate. Nothing generic — specific to how your operation actually runs.",
  },
  {
    number: "02",
    title: "Automation Priorities",
    description:
      "Concrete recommendations on what to automate first, ranked by revenue impact and implementation effort. You'll leave knowing exactly where to start.",
  },
  {
    number: "03",
    title: "Tool Stack Review",
    description:
      "A look at what you're using, what's redundant, and where consolidation could reduce cost and complexity without losing capability.",
  },
];

export const AuditOfferSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16">
      {/* Purple left glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 opacity-15"
        style={{ background: "radial-gradient(ellipse at left, #280D3D 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-16">
        <header className="flex max-w-2xl flex-col items-center gap-5 text-center">
          <p
            className="animate-fade-up text-xs font-semibold tracking-[0.3em] uppercase"
            style={{ color: "#D4AF37", animationDelay: "0.05s", animationFillMode: "both" }}
          >
            Free Automation Audit
          </p>
          <h2
            className="animate-fade-up text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            A clear look at what's
            <br />
            slowing your operation down
          </h2>
          <p
            className="animate-fade-up text-base leading-relaxed text-[#737373]"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            The audit is a 30-minute conversation. No pitch, no pressure. You walk away with
            honest recommendations you can act on immediately — with us or anyone else.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {auditFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="animate-fade-up group relative overflow-hidden rounded-none border border-[#1e1e1e] bg-[#111111] shadow-none transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(40,13,61,0.5)]"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "both" }}
            >
              {/* Gold top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="flex flex-col gap-5 p-8">
                <span className="font-mono text-xs font-bold tracking-widest text-[#D4AF37]">
                  {feature.number}
                </span>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[#737373]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          <Button
            type="button"
            className="h-14 rounded-none border border-[#D4AF37] bg-transparent px-10 text-sm font-semibold tracking-wider text-[#D4AF37] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0b0b0b] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            Request Your Audit
          </Button>
        </div>
      </div>
    </section>
  );
};
