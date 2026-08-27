import { Reveal } from "../../components/Reveal";

const faqs = [
  {
    q: "Do I need a completely new website?",
    a: "Not always. Some businesses need a full modernization, while others need focused improvements to messaging, page structure, mobile experience, or how clearly their services are explained.",
  },
  {
    q: "What does website modernization include?",
    a: "It can include visual design, plain-language messaging, service page structure, proof and credentials placement, mobile-first layouts, navigation, and content organization for modern search.",
  },
  {
    q: "What is AEO?",
    a: "Answer Engine Optimization. It means structuring your content so answer engines can identify clear, self-contained answers to the questions your customers actually ask.",
  },
  {
    q: "What is GEO?",
    a: "Generative Engine Optimization. It means making your business information, services, service areas, and expertise easy for generative AI systems to interpret and describe accurately.",
  },
  {
    q: "Why does conversational search change anything?",
    a: "People increasingly describe a situation to an assistant instead of typing a short keyword. Assistants answer by summarizing sources they can interpret confidently, so vague or unstructured websites are simply left out of the answer.",
  },
  {
    q: "Can you guarantee rankings or AI recommendations?",
    a: "No. No credible provider can. We improve the clarity, structure, and quality of your website so that both people and machines can understand your business correctly.",
  },
  {
    q: "Is this just adding keywords to my site?",
    a: "No. Modern systems respond to specificity and structure, not keyword density. Stating what you do, who it is for, and where you do it clearly matters far more.",
  },
  {
    q: "Do you only work with auto detailers?",
    a: "Auto detailing is one area of focus, but the same reputation, clarity, and visibility problems affect contractors, home service companies, professional services, and other local businesses.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the number of pages, the content required, and how quickly business information is available. A specific timeline is agreed before work begins.",
  },
  {
    q: "What happens after launch?",
    a: "Ongoing work may include new service pages, service-area content, additional question-and-answer content, and continued clarity improvements.",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0a0a0a] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-4 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Frequently asked questions
            </h2>
          </Reveal>
        </header>

        <div className="flex w-full flex-col gap-6">
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} delay={Math.min(index, 5) * 0.06}>
              <div className="border border-[#1a1a1a] bg-[#111111] p-6 transition-colors duration-300 hover:border-[#D4AF37]/30">
                <h3 className="mb-3 flex items-start gap-3 text-lg font-bold text-white">
                  <span className="text-lg leading-none text-[#D4AF37]">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="flex items-start gap-3 text-sm leading-relaxed text-[#a3a3a3]">
                  <span className="text-lg leading-none text-[#525252]">A.</span>
                  <span>{faq.a}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
