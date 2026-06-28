import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const heroActions = [
  {
    label: "Start Free Trial",
    iconSrc: "/frame-27.svg",
    iconAlt: "Start Free Trial icon",
    variant: "primary" as const,
  },
  {
    label: "Watch Demo",
    iconSrc: "/frame-5.svg",
    iconAlt: "Watch Demo icon",
    variant: "secondary" as const,
  },
];

export const HeroLeadSection = (): JSX.Element => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-[120px]">
      <img
        className="pointer-events-none absolute inset-x-1/2 top-1/2 -z-10 h-auto w-full max-w-[1440px] -translate-x-1/2 -translate-y-1/2 object-cover"
        alt="Hero pattern"
        src="/hero-pattern.svg"
      />
      <div className="flex w-full max-w-[1000px] flex-col items-center justify-center gap-5">
        <Button
          variant="ghost"
          className="h-auto rounded-[122px] bg-[#ffffff1a] px-1.5 py-1 text-white hover:bg-[#ffffff24]"
        >
          <span className="flex items-center gap-2">
            <Badge className="rounded-[100px] bg-[#af2ecb] px-3 py-0.5 [font-family:'Alexandria',Helvetica] text-[13px] font-normal text-white shadow-[inset_0px_0px_3px_#f1d2fc] hover:bg-[#af2ecb]">
              New
            </Badge>
            <span className="[font-family:'Alexandria',Helvetica] text-xs font-normal tracking-[0] text-white">
              Check out the new Resources
            </span>
            <img className="h-3.5 w-3.5" alt="Arrow" src="/arrow.svg" />
          </span>
        </Button>
        <header className="flex w-full flex-col items-center gap-4">
          <h1 className="max-w-[900px] bg-[linear-gradient(150deg,rgba(255,255,255,1)_37%,rgba(228,160,247,0.9)_100%)] bg-clip-text text-center [font-family:'Anybody',Helvetica] text-4xl font-semibold leading-none tracking-[-1.44px] text-transparent [-webkit-text-fill-color:transparent] sm:text-5xl lg:text-7xl">
            Supercharge Your Business with Smart AI
          </h1>
          <p className="max-w-[760px] text-center [font-family:'Alexandria',Helvetica] text-base font-medium leading-normal tracking-[-0.40px] text-[#f8e9fecc] sm:text-lg lg:text-xl">
            Leverage the power of AI automation to streamline operations,
            enhance customer satisfaction, and drive exponential business
            growth.
          </p>
        </header>
        <nav
          aria-label="Hero actions"
          className="flex flex-wrap items-center justify-center gap-[10px]"
        >
          {heroActions.map((action) => (
            <Button
              key={action.label}
              type="button"
              variant="ghost"
              className={
                action.variant === "primary"
                  ? "h-auto rounded-md bg-[#e4a0f7] px-5 py-[11px] [font-family:'Alexandria',Helvetica] text-base font-medium text-[#0e0a0f] shadow-[inset_0px_0px_9px_1px_#f1d2fc] hover:bg-[#e4a0f7]/90"
                  : "h-auto rounded-md border border-solid border-[#f1d2fc] px-5 py-[11px] [font-family:'Alexandria',Helvetica] text-base font-medium text-[#f1d2fc] shadow-[inset_0px_0px_9px_1px_#f1d2fc] hover:bg-white/5"
              }
            >
              <span className="flex items-center gap-2">
                <span>{action.label}</span>
                <img
                  className={
                    action.variant === "primary" ? "h-4 w-4" : "h-6 w-6"
                  }
                  alt={action.iconAlt}
                  src={action.iconSrc}
                />
              </span>
            </Button>
          ))}
        </nav>
      </div>
    </section>
  );
};
