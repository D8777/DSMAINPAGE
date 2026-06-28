import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const actions = [
  {
    label: "Get Started",
    iconSrc: "/frame.svg",
    iconAlt: "Get Started icon",
    variant: "primary" as const,
  },
  {
    label: "Watch Demo",
    iconSrc: "/frame-5.svg",
    iconAlt: "Watch Demo icon",
    variant: "secondary" as const,
  },
];

export const PlatformOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden px-6 py-20 sm:px-10 md:px-16 lg:px-[120px] xl:px-[220px] xl:py-[120px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[377px] w-full max-w-[1304px] -translate-x-1/2 -translate-y-1/2 rounded-[652px/188.5px] blur-[30.65px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(228,160,247,0.3)_0%,rgba(14,10,15,0)_100%)]" />
        <img
          className="absolute inset-x-0 top-0 h-full max-h-[471px] w-full object-cover"
          alt="Grid pattern"
          src="/grid-pattern.svg"
        />
      </div>
      <Card className="relative mx-auto w-full max-w-[852px] border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col items-center gap-4 p-0 text-center">
          <header className="flex flex-col items-center gap-4">
            <h2 className="max-w-[852px] bg-[linear-gradient(150deg,rgba(255,255,255,1)_37%,rgba(228,160,247,0.9)_100%)] bg-clip-text text-3xl font-medium leading-tight tracking-[-0.96px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [font-family:'Anybody',Helvetica] sm:text-4xl lg:text-5xl lg:leading-[55.2px]">
              Unlock Intelligent, Data‑Driven Growth with Our NexaAI&apos;s
              All‑In‑One AI Automation Platform
            </h2>
            <p className="max-w-[720px] [font-family:'Alexandria',Helvetica] text-sm font-medium leading-normal tracking-[-0.32px] text-[#f8e9fecc] sm:text-base">
              Leverage the power of AI automation to streamline operations,
              enhance customer satisfaction, and drive exponential business
              growth.
            </p>
          </header>
          <nav
            aria-label="Platform overview actions"
            className="flex flex-wrap items-center justify-center gap-[10px] py-5"
          >
            {actions.map((action) => (
              <Button
                key={action.label}
                type="button"
                className={
                  action.variant === "primary"
                    ? "h-auto rounded-md bg-[#af2ecb] px-5 py-[11px] [font-family:'Alexandria',Helvetica] text-base font-normal text-white shadow-[inset_0px_0px_9px_1px_#dc7ff3] hover:bg-[#af2ecb]/90"
                    : "h-auto rounded-md border border-solid border-[#f1d2fc] bg-transparent px-5 py-[11px] [font-family:'Alexandria',Helvetica] text-base font-medium text-[#f1d2fc] shadow-[inset_0px_0px_9px_1px_#f1d2fc] hover:bg-white/5"
                }
              >
                <span>{action.label}</span>
                <img
                  className={
                    action.variant === "primary" ? "h-4 w-4" : "h-6 w-6"
                  }
                  alt={action.iconAlt}
                  src={action.iconSrc}
                />
              </Button>
            ))}
          </nav>
        </CardContent>
      </Card>
      <img
        className="pointer-events-none absolute left-1/2 top-[178px] hidden h-[46px] w-[154px] -translate-x-1/2 lg:block"
        alt="Decorative frame"
        src="/frame-5-1.svg"
      />
    </section>
  );
};
