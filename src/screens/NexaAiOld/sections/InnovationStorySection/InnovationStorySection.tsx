import { ArrowRight as ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const storyCards = [
  {
    eyebrow: "Our Mission",
    title: "Empowering Enterprises with Responsible AI",
    description:
      "Empowering businesses of all sizes with intelligent automation, seamless integration, and real-time insights to scale smarter and faster.",
  },
  {
    eyebrow: "Our Vision",
    title: "Charting a New Era of Intelligent Business",
    description:
      "Empowering every organization to harness AI for transformative growth through seamless automation and human-centric innovation.",
  },
];

export const InnovationStorySection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch px-4 pb-[60px] md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center gap-6">
        <header className="flex w-full flex-col items-center gap-4 px-4 py-12 text-center md:px-10 md:py-16">
          <h2 className="max-w-[520px] bg-[linear-gradient(150deg,rgba(255,255,255,1)_37%,rgba(228,160,247,0.9)_100%)] bg-clip-text text-center text-4xl font-medium leading-none tracking-[-0.96px] text-transparent [-webkit-text-fill-color:transparent] [font-family:'Anybody',Helvetica] sm:text-5xl">
            Purpose-Driven AI Innovation for Growth
          </h2>
          <p className="max-w-[574px] text-center text-base font-medium leading-normal tracking-[-0.32px] text-[#f8e9fe] [font-family:'Alexandria',Helvetica]">
            Uniting our Vision and Mission to propel human-centric AI
            transformation and drive lasting business impact.
          </p>
        </header>
        <article className="relative flex min-h-[480px] w-full items-end overflow-hidden rounded-3xl px-6 pb-10 pt-0 md:px-12 lg:px-[72px]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            alt="Pexels fauxels"
            src="/pexels-fauxels-3184360-1.png"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,10,15,0)_38%,rgba(14,10,15,1)_100%)]" />
          <div className="relative z-10 flex max-w-[874px] flex-col items-start gap-1.5">
            <p className="text-base font-medium leading-normal tracking-[-0.32px] text-[#fcf5fe] [font-family:'Alexandria',Helvetica]">
              OUR VISION
            </p>
            <h3 className="text-[24px] font-light leading-tight tracking-[-0.64px] text-[#fcf5fe] [font-family:'Alexandria',Helvetica] md:text-[32px]">
              Forging a Future of Intelligent Enterprise Transformation and
              Sustainable Growth
            </h3>
          </div>
        </article>
        <div className="grid w-full grid-cols-1 gap-6 py-4 md:grid-cols-2 md:py-9">
          {storyCards.map((card) => (
            <Card
              key={card.eyebrow}
              className="relative overflow-hidden rounded-xl border-0 bg-[linear-gradient(172deg,rgba(14,10,15,1)_0%,rgba(68,49,73,1)_100%)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-xl before:p-px before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[background:linear-gradient(132deg,rgba(78,54,86,0.8)_0%,rgba(68,49,73,0.5)_100%)] before:[mask-composite:exclude]"
            >
              <CardContent className="relative z-10 flex h-full flex-col items-start justify-between gap-[42px] p-9">
                <div className="text-lg font-medium leading-normal tracking-[-0.36px] text-white [font-family:'Alexandria',Helvetica]">
                  {card.eyebrow}
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                  <h4 className="max-w-[523px] text-[28px] font-medium leading-tight tracking-[-0.64px] text-white [font-family:'Alexandria',Helvetica] lg:text-[32px]">
                    {card.title}
                  </h4>
                  <p className="text-[15px] font-medium leading-normal tracking-[-0.30px] text-white [font-family:'Alexandria',Helvetica]">
                    {card.description}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-left"
                >
                  <span className="text-base font-medium leading-normal tracking-[-0.32px] text-white underline [font-family:'Alexandria',Helvetica]">
                    Learn more
                  </span>
                  <ArrowRightIcon className="h-6 w-6 text-white" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          type="button"
          className="h-auto rounded-md bg-[#af2ecb] px-5 py-[11px] text-base font-normal tracking-[0] text-white shadow-[inset_0px_0px_9px_1px_#dc7ff3] hover:bg-[#af2ecb]/90 [font-family:'Alexandria',Helvetica]"
        >
          <span>Get Started</span>
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};
