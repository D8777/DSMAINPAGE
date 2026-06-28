import { Card, CardContent } from "../../../../components/ui/card";

const partnerLogos = [
  { alt: "Trusted companies", src: "/trusted-companies.svg" },
];

export const TrustPartnersSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch px-0 py-0">
      <Card className="w-full border-x-0 rounded-none border-y border-[#3c2146] bg-[#09030f] shadow-none">
        <CardContent className="flex w-full flex-col items-center gap-5 px-4 py-4 sm:px-6 sm:py-5">
          <header className="flex flex-col items-center">
            <h2 className="[font-family:'Alexandria',Helvetica] text-[12px] font-normal leading-[19.2px] tracking-[0] text-[#f8e9fe] sm:text-sm sm:leading-[22.4px]">
              Trusted By
            </h2>
          </header>
          <div className="flex w-full items-center justify-center">
            {partnerLogos.map((logo, index) => (
              <img
                key={`partner-logo-${index}`}
                className="block h-auto max-w-full object-contain"
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
