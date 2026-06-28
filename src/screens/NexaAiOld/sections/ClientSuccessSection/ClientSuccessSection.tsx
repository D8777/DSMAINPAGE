import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const clientSuccessItems = [
  {
    title: "Transformative Impact with NexaAI&apos;s Automation Suite",
    description:
      "NexaAI has revolutionized our operations—in just weeks, we slashed manual workload by 60% and gained clarity into performance metrics we never had before.",
    image: "/mask-group.png",
    name: "Sarah Johnson",
    role: "COO, TechFlow Innovations",
  },
  {
    title: "Unmatched Insight from NexaAI&apos;s Analytics Dashboard",
    description:
      "With NexaAI, we moved from gut-feels to data-driven decisions. The real-time insights uncovered new growth channels, and our campaign ROI improved by 45% in the first month.",
    image: "/mask-group-2.png",
    name: "David Lee",
    role: "Head of Marketing, BrightWave Media",
  },
  {
    title: "Seamless Integration, Instant Results",
    description:
      "Integrating NexaAI into our legacy systems was effortless. Within days we automated critical workflows, reduced errors, and freed our team to focus on strategic initiatives. Simply outstanding.",
    image: "/mask-group-1.png",
    name: "Priya Kumar",
    role: "VP of Operations, Meridian Financial",
  },
  {
    title: "Scalable AI That Grows with Us",
    description:
      "As a fast-growing startup, we needed an AI partner that could scale. NexaAI&apos;s modular platform expanded alongside our business—delivering enterprise-grade features.",
    image: "/mask-group-3.png",
    name: "Carlos Ramirez",
    role: "CEO, NovaSolutions",
  },
];

export const ClientSuccessSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch px-0 py-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 px-4 sm:px-6 lg:px-0">
        <header className="flex w-full flex-col items-center justify-center">
          <h2 className="mt-[-1.00px] bg-[linear-gradient(150deg,rgba(255,255,255,1)_37%,rgba(228,160,247,0.9)_100%)] bg-clip-text text-center text-3xl font-medium tracking-[-0.96px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [font-family:'Anybody',Helvetica] [text-fill-color:transparent] sm:text-4xl lg:text-5xl">
            Real Results from our Clients
          </h2>
          <p className="max-w-[574px] text-center text-sm font-medium tracking-[-0.32px] text-[#f8e9fe] [font-family:'Alexandria',Helvetica] sm:text-base">
            Discover how leading businesses optimize performance, automate
            workflows, and achieve transformative growth with NexaAI.
          </p>
        </header>
        <div className="w-full rounded-2xl bg-[#4431491a] p-4 sm:p-6 lg:p-9">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {clientSuccessItems.map((item) => (
              <Card
                key={item.name}
                className="relative h-full rounded-xl border-0 bg-[linear-gradient(172deg,rgba(14,10,15,1)_0%,rgba(68,49,73,1)_100%)] shadow-none overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-xl before:p-px before:content-[''] before:[background:linear-gradient(132deg,rgba(78,54,86,0.8)_0%,rgba(68,49,73,0.5)_100%)] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]"
              >
                <CardContent className="relative z-[2] flex h-full flex-col items-start justify-between gap-[42px] px-6 py-8 sm:px-[42px] sm:py-12">
                  <div className="flex w-full flex-col items-start justify-center gap-2">
                    <h3 className="mt-[-1.00px] w-full text-left text-2xl font-normal tracking-[-0.56px] text-white [font-family:'Alexandria',Helvetica] lg:text-[28px]">
                      <span dangerouslySetInnerHTML={{ __html: item.title }} />
                    </h3>
                    <p className="w-full text-left text-base font-normal tracking-[-0.32px] text-white [font-family:'Alexandria',Helvetica]">
                      <span
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </p>
                  </div>
                  <div className="inline-flex items-center justify-center gap-6">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={item.image} alt={item.name} />
                      <AvatarFallback className="bg-[#443149] text-white [font-family:'Alexandria',Helvetica]"></AvatarFallback>
                    </Avatar>
                    <div className="inline-flex flex-col items-start justify-center gap-2">
                      <p className="mt-[-1.00px] w-fit text-base font-medium tracking-[-0.32px] text-white [font-family:'Alexandria',Helvetica]">
                        {item.name}
                      </p>
                      <p className="w-fit text-base font-light tracking-[-0.32px] text-white [font-family:'Alexandria',Helvetica]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
