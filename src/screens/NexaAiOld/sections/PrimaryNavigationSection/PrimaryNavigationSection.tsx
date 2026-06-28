import { Button } from "../../../../components/ui/button";

const navigationItems = [
  "Solutions",
  "Pricing",
  "Resources",
  "About",
  "Contact",
];

export const PrimaryNavigationSection = (): JSX.Element => {
  return (
    <header className="relative w-full border-b border-[#44314999] bg-[#0e0a0f]">
      <div className="mx-auto flex min-h-[100px] w-full max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-20">
        <a href="#" className="flex shrink-0 items-center gap-3">
          <img
            className="h-7 w-[34px] object-contain"
            alt="NexaAI logo"
            src="/vector-1.svg"
          />
          <span className="[font-family:'Alexandria',Helvetica] text-[28px] font-normal leading-[normal] tracking-[0] text-white">
            NexaAI
          </span>
        </a>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigationItems.map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center [font-family:'Alexandria',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white transition-opacity hover:opacity-80"
            >
              {item}
            </a>
          ))}
        </nav>
        <Button
          type="button"
          className="h-auto shrink-0 rounded-md bg-[#af2ecb] px-5 py-[13px] [font-family:'Alexandria',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white shadow-[inset_0px_0px_9px_1px_#dc7ff3] hover:bg-[#af2ecb]/90"
        >
          <span>Get Started</span>
          <img className="h-4 w-4" alt="Arrow icon" src="/frame.svg" />
        </Button>
      </div>
    </header>
  );
};
