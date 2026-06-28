import { ArrowRight as ArrowRightIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

const faqItems = [
  {
    value: "item-1",
    question: "How does NexaAI protect my data?",
    answer: "",
  },
  {
    value: "item-2",
    question: "Can I change my subscription plan at any time?",
    answer:
      "Absolutely—you can upgrade or downgrade directly from your NexaAI dashboard. Prorated billing ensures you only pay for what you use, and changes take effect immediately with no downtime.",
  },
  {
    value: "item-3",
    question: "Are custom integrations available?",
    answer: "",
  },
  {
    value: "item-4",
    question: "What onboarding support does NexaAI provide?",
    answer: "",
  },
];

export const FAQSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-[60px] sm:px-6 lg:px-[120px]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        <header className="flex flex-col items-start gap-6">
          <h2 className="mt-[-1.00px] bg-[linear-gradient(150deg,rgba(255,255,255,1)_37%,rgba(228,160,247,0.9)_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [font-family:'Anybody',Helvetica] text-4xl font-medium tracking-[-0.96px] leading-[0.95] sm:text-5xl">
            Frequently
            <br />
            asked questions
          </h2>
          <p className="max-w-[385px] [font-family:'Alexandria',Helvetica] text-base font-medium tracking-[-0.32px] text-[#f8e9fe]">
            Discover how leading businesses optimize performance, automate
            workflows, and achieve transformative growth with NexaAI.
          </p>
          <Button
            type="button"
            className="h-auto rounded-md bg-[#af2ecb] px-5 py-3 shadow-[inset_0px_0px_9px_1px_#dc7ff3] hover:bg-[#af2ecb]/90 [font-family:'Alexandria',Helvetica] text-base font-normal text-white"
          >
            <span>Get Started</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </header>
        <div className="flex w-full flex-col items-start justify-center gap-6">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-2"
            className="flex w-full flex-col gap-6"
          >
            {faqItems.map((item) => {
              const isOpen = item.value === "item-2";

              return (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className={`relative overflow-hidden rounded-xl border-0 px-6 ${
                    isOpen
                      ? "bg-[linear-gradient(172deg,rgba(14,10,15,1)_0%,rgba(68,49,73,1)_100%)]"
                      : "bg-transparent"
                  } before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-xl before:p-px before:content-[''] before:[background:linear-gradient(132deg,rgba(78,54,86,0.8)_0%,rgba(68,49,73,0.5)_100%)] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]`}
                >
                  <AccordionTrigger className="relative z-[2] gap-6 py-6 pr-0 text-left hover:no-underline [&>svg]:hidden">
                    <div className="flex w-full items-start justify-between gap-9">
                      <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-4">
                        <span className="mt-[-1.00px] [font-family:'Alexandria',Helvetica] text-xl font-normal tracking-[-0.40px] text-white">
                          {item.question}
                        </span>
                        {isOpen && item.answer ? (
                          <AccordionContent className="pb-0 pt-0">
                            <p className="[font-family:'Alexandria',Helvetica] text-sm font-light tracking-[-0.28px] text-white">
                              {item.answer}
                            </p>
                          </AccordionContent>
                        ) : null}
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                        <img
                          className="h-9 w-9"
                          alt={isOpen ? "Collapse item" : "Expand item"}
                          src={isOpen ? "/frame-28.svg" : "/frame-16.svg"}
                        />
                      </span>
                    </div>
                  </AccordionTrigger>
                  {!isOpen && item.answer ? (
                    <AccordionContent className="relative z-[2] pb-6 pt-0">
                      <p className="[font-family:'Alexandria',Helvetica] text-sm font-light tracking-[-0.28px] text-white">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  ) : null}
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
