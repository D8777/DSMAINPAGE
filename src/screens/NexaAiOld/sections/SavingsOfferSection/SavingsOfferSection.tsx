import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const savingsOfferContent = {
  eyebrow: "SUMMER DEAL SALES",
  title: "Unlock Exclusive Savings on AI‑Driven Business Automation",
  description:
    "Leverage the power of AI automation to streamline operations, enhance customer satisfaction, and drive exponential business growth.",
  cta: "Get Started",
  arrowIcon: "/frame.svg",
  illustration: "/group-4.png",
};

export const SavingsOfferSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch px-4 pb-16 pt-8 sm:px-6 lg:px-[110px]">
      <Card className="relative overflow-hidden rounded-3xl border-0 bg-[linear-gradient(177deg,rgba(19,15,20,1)_0%,rgba(68,49,73,1)_100%)] shadow-none">
        <div className="pointer-events-none absolute bottom-[-12px] right-[-180px] h-[157px] w-[716px] rounded-[358px/78.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(66,7,75,1)_0%,rgba(147,35,168,0)_100%)] opacity-60" />
        <CardContent className="relative p-0">
          <div className="flex flex-col items-start gap-10 px-6 py-10 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:gap-9 lg:px-16 lg:pb-[38px] lg:pt-[54px]">
            <header className="flex w-full max-w-[678px] flex-1 flex-col items-start gap-5">
              <p className="mt-[-1.00px] flex items-center self-stretch [font-family:'Anybody',Helvetica] text-base font-medium leading-[normal] tracking-[-0.32px] text-[#f8e9fecc]">
                {savingsOfferContent.eyebrow}
              </p>
              <h2 className="max-w-[582px] bg-[linear-gradient(150deg,rgba(255,255,255,1)_37%,rgba(228,160,247,0.9)_100%)] bg-clip-text [font-family:'Anybody',Helvetica] text-3xl font-medium leading-tight tracking-[-0.96px] text-transparent [-webkit-text-fill-color:transparent] [text-fill-color:transparent] sm:text-4xl lg:text-5xl lg:leading-[55.2px]">
                Unlock Exclusive
                <br />
                Savings on AI‑Driven Business Automation
              </h2>
              <p className="max-w-[582px] [font-family:'Alexandria',Helvetica] text-sm font-medium leading-[normal] tracking-[-0.32px] text-[#f8e9fecc] sm:text-base">
                {savingsOfferContent.description}
              </p>
              <div className="inline-flex flex-col items-start gap-2.5 py-4">
                <Button
                  type="button"
                  className="h-auto rounded-md bg-[#af2ecb] px-5 py-[11px] [font-family:'Alexandria',Helvetica] text-base font-normal text-white shadow-[inset_0px_0px_9px_1px_#dc7ff3] hover:bg-[#af2ecb]/90"
                >
                  <span>{savingsOfferContent.cta}</span>
                  <img
                    className="h-4 w-4"
                    alt="Arrow icon"
                    src={savingsOfferContent.arrowIcon}
                  />
                </Button>
              </div>
            </header>
            <div className="flex w-full justify-center lg:w-auto lg:justify-end">
              <img
                className="h-auto w-full max-w-[280px] object-contain sm:max-w-[340px] lg:mb-[-38px] lg:mt-[-14.99px] lg:w-[407.32px] lg:max-w-none"
                alt="Business automation growth illustration"
                src={savingsOfferContent.illustration}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
