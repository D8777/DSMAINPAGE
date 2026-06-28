import { Card, CardContent } from "../../../../components/ui/card";

const solutionCards = [
  {
    title: "Smart-AI Marketing",
    description:
      "Automate campaign creation, segmentation, and A/B testing with predictive targeting",
    icon: {
      src: "/component-2-2.svg",
      alt: "Smart-AI Marketing icon",
      className: "h-auto w-auto",
    },
  },
  {
    title: "Sales Acceleration",
    description:
      "Forecast deals, prioritize leads, and automate outreach for higher conversion",
    icon: {
      src: "/component-2.svg",
      alt: "Sales Acceleration icon",
      className: "h-auto w-auto",
    },
  },
  {
    title: "Customer Insights",
    description:
      "Unify data from CRM, support, and social channels to understand behavior patterns",
    icon: {
      src: "/component-2-1.svg",
      alt: "Customer Insights icon",
      className: "h-auto w-auto",
    },
  },
  {
    title: "Operational Analytics",
    description:
      "Monitor KPIs in real time, detect anomalies, and receive proactive alerts",
    icon: {
      src: "/vector-2.svg",
      alt: "Operational Analytics icon",
      className: "h-[19.5px] w-[21px]",
    },
  },
  {
    title: "Intelligent Workflows",
    description:
      "Design drag‑and‑drop automations for repetitive tasks across departments",
    icon: {
      src: "/vector.svg",
      alt: "Intelligent Workflows icon",
      className: "h-[16.5px] w-[22.5px]",
    },
  },
  {
    title: "Secure Data Hub",
    description:
      "Enterprise‑grade encryption and governance for all your AI workloads",
    icon: {
      src: "/vector-4.svg",
      alt: "Secure Data Hub icon",
      className: "h-[18.75px] w-[18px]",
    },
  },
];

export const SolutionsOverviewSection = (): JSX.Element => {
  return (
    <section className="relative flex w-full justify-center px-4 py-16 sm:px-6 lg:px-10">
      <div className="flex w-full max-w-[1048px] flex-col items-center gap-4">
        <header className="flex w-full max-w-[760px] flex-col items-center gap-4">
          <h2 className="bg-[linear-gradient(150deg,rgba(255,255,255,1)_37%,rgba(228,160,247,0.9)_100%)] bg-clip-text text-center [font-family:'Anybody',Helvetica] text-4xl font-medium leading-[1.05] tracking-[-0.96px] text-transparent [-webkit-text-fill-color:transparent] sm:text-5xl">
            AI-Powered Solutions for Accelerated Business Growth
          </h2>
          <p className="[font-family:'Alexandria',Helvetica] text-center text-base font-medium leading-[normal] tracking-[-0.32px] text-[#f8e9fe]">
            Our AI suite unifies marketing, sales, and operations—automating
            workflows, delivering real‑time insights, integrating seamlessly to
            optimize performance and accelerate growth.
          </p>
        </header>
        <div className="grid w-full grid-cols-1 gap-8 py-8 md:grid-cols-2 xl:grid-cols-3">
          {solutionCards.map((card) => (
            <Card
              key={card.title}
              className="relative overflow-hidden rounded-xl border-0 bg-[linear-gradient(172deg,rgba(14,10,15,1)_0%,rgba(68,49,73,1)_100%)] shadow-none before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:p-px before:content-[''] before:[background:linear-gradient(132deg,rgba(78,54,86,0.8)_0%,rgba(68,49,73,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]"
            >
              <CardContent className="relative z-[1] flex h-full flex-col items-start justify-start gap-6 p-8">
                <div className="inline-flex items-center justify-center rounded bg-[#4431495c] p-2">
                  <img
                    className={card.icon.className}
                    alt={card.icon.alt}
                    src={card.icon.src}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                  <h3 className="[font-family:'Alexandria',Helvetica] text-xl font-medium leading-[normal] tracking-[-0.40px] text-white">
                    {card.title}
                  </h3>
                  <p className="max-w-[306px] [font-family:'Alexandria',Helvetica] text-sm font-medium leading-[normal] tracking-[-0.28px] text-white">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
