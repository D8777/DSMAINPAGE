import { Card, CardContent } from "../../../../components/ui/card";

const metrics = [
  { value: "4.8+", label: "Stars Rating" },
  { value: "24k+", label: "Satisfied Customer" },
];

export const PerformanceMetricsSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch">
      <div className="flex w-full items-center justify-between gap-4 rounded-none px-4 sm:px-6 md:px-[37px]">
        <dl className="flex items-center gap-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <dt className="sr-only">{metric.label}</dt>
              <dd className="[font-family:'Alexandria',Helvetica] text-4xl font-normal leading-9 tracking-[0] text-[#e7e7e7]">
                <span className="block leading-[57.6px]">{metric.value}</span>
                <span className="block text-base leading-[25.6px] text-[#888888]">
                  {metric.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <Card className="relative border-0 bg-[#0e0a0f] shadow-[inset_0px_0px_20px_-5px_#443149] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-lg before:bg-[linear-gradient(270deg,rgba(78,54,86,0.1)_0%,rgba(68,49,73,1)_100%)] before:p-px before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]">
          <CardContent className="relative z-[2] flex items-start gap-2.5 p-[18px]">
            <img className="shrink-0" alt="Frame" src="/frame-13.svg" />
            <div className="flex flex-col items-start justify-center">
              <h3 className="mt-[-1.00px] w-fit whitespace-nowrap [font-family:'Alexandria',Helvetica] text-xl font-medium leading-8 tracking-[0] text-[#e7e7e7]">
                BEST AI TOOLS
              </h3>
              <p className="w-[190px] [font-family:'Alexandria',Helvetica] text-[10px] font-normal leading-4 tracking-[0] text-[#e7e7e7]">
                Harness the power of ai to optimize every facet of your business
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
