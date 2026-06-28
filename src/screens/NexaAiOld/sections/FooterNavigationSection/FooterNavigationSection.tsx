import { Card, CardContent } from "../../../../components/ui/card";

const primaryLinks = ["Solutions", "Pricing", "Resources", "About", "Contact"];

const socialLinks = ["Instagram", "YouTube", "Twitter", "LinkedIn"];

const contactDetails = ["support@nexaai.com", "+91 9876543210"];

export const FooterNavigationSection = (): JSX.Element => {
  return (
    <footer
      className="relative w-full self-stretch bg-[linear-gradient(180deg,rgba(68,49,73,0.2)_0%,rgba(14,10,15,0)_100%)] px-4 pb-0 pt-[60px] sm:px-8 lg:px-16"
      aria-label="Footer navigation"
    >
      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="p-0">
          <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
            <section className="flex max-w-[520px] flex-1 flex-col items-start justify-center gap-6">
              <div className="inline-flex items-center gap-6">
                <img
                  className="h-[42px] w-[51px] shrink-0"
                  alt="NexaAI logo"
                  src="/vector-1.svg"
                />
                <span className="mt-[-1.00px] flex items-center text-3xl font-normal leading-[normal] tracking-[0] text-white [font-family:'Alexandria',Helvetica] sm:text-4xl">
                  NexaAI
                </span>
              </div>
              <p className="flex items-center self-stretch text-base font-light leading-[normal] tracking-[0] text-white [font-family:'Alexandria',Helvetica]">
                Leverage next-gen AI to streamline operations, uncover insights,
                and accelerate growth empowering modern enterprises to make
                smarter, faster, and data-driven decisions.
              </p>
            </section>
            <nav aria-label="Footer links" className="w-full lg:w-auto">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-16 lg:grid-cols-3 lg:gap-x-[120px]">
                <ul className="flex flex-col items-start justify-center gap-8">
                  {primaryLinks.map((link) => (
                    <li key={link} className="w-full">
                      <button
                        type="button"
                        className="flex h-auto w-full items-center gap-2 text-left"
                      >
                        <span className="mt-[-1.00px] flex items-center text-base font-normal leading-[normal] tracking-[0] text-white [font-family:'Alexandria',Helvetica]">
                          {link}
                        </span>
                        <img
                          className="h-3 w-3 shrink-0"
                          alt=""
                          src="/frame.svg"
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col items-start justify-center gap-8">
                  {socialLinks.map((link) => (
                    <li key={link} className="w-full">
                      <button
                        type="button"
                        className="flex h-auto w-full items-center gap-2 text-left"
                      >
                        <span className="mt-[-1.00px] flex items-center text-base font-normal leading-[normal] tracking-[0] text-white [font-family:'Alexandria',Helvetica]">
                          {link}
                        </span>
                        <img
                          className="h-3 w-3 shrink-0"
                          alt=""
                          src="/frame.svg"
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
                <address className="not-italic">
                  <ul className="flex flex-col items-start justify-center gap-8">
                    {contactDetails.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center text-base font-normal leading-[normal] tracking-[0] text-white [font-family:'Alexandria',Helvetica]"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </address>
              </div>
            </nav>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};
