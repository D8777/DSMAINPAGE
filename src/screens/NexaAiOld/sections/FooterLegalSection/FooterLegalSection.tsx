import { Button } from "../../../../components/ui/button";

const legalLinks = [
  {
    label: "Terms of Service",
    href: "#",
  },
  {
    label: "Privacy Policy",
    href: "#",
  },
];

export const FooterLegalSection = (): JSX.Element => {
  return (
    <footer className="relative w-full overflow-hidden px-4 pb-5 pt-0 sm:px-8 lg:px-14">
      <div className="relative flex min-h-[439px] w-full items-end justify-between gap-6 pb-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center overflow-hidden"
        >
          <div className="select-none bg-[linear-gradient(180deg,rgba(113,76,125,1)_0%,rgba(14,10,15,0)_100%)] bg-clip-text text-center text-[clamp(88px,19vw,360px)] leading-none tracking-[0] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [font-family:'Alexandria',Helvetica] font-normal [text-fill-color:transparent]">
            NexaAI
          </div>
        </div>
        <div className="relative z-10 flex w-full flex-col items-start justify-end gap-4 pt-24 sm:pt-32 lg:flex-row lg:items-end lg:justify-between lg:pt-0">
          <p className="flex-1 [font-family:'Alexandria',Helvetica] text-sm font-light tracking-[0] text-[#888888] sm:text-base">
            ©2025 All Rights Reserved by NexaAI
          </p>
          <nav aria-label="Legal links" className="relative z-10">
            <ul className="flex flex-wrap items-center justify-start gap-x-8 gap-y-3 lg:justify-end">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Button
                    asChild
                    variant="ghost"
                    className="h-auto p-0 text-left hover:bg-transparent"
                  >
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 [font-family:'Alexandria',Helvetica] text-sm font-normal tracking-[0] text-[#888888] transition-colors hover:text-white sm:text-base"
                    >
                      <span>{link.label}</span>
                      <img
                        className="h-3 w-3"
                        alt=""
                        aria-hidden="true"
                        src="/frame.svg"
                      />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
