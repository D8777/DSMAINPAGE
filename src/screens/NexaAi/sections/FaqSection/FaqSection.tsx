export const FaqSection = (): JSX.Element => {
  const faqs = [
    {
      q: "Do you only work with auto detailers?",
      a: "Auto detailing is our primary focus because the website, customer questions, service structure, visual proof, and sales process are different from those of other local businesses."
    },
    {
      q: "Do I need a completely new website?",
      a: "Not always. The audit may show that your existing site needs clearer copy, stronger service pages, better calls to action, or a more effective quote process rather than a complete rebuild."
    },
    {
      q: "What is AEO?",
      a: "Answer Engine Optimization helps structure your content so search platforms can more easily identify clear, useful answers to customer questions."
    },
    {
      q: "What is GEO?",
      a: "Generative Engine Optimization focuses on making your business information and expertise easier for AI-assisted search systems to understand and reference. Neither approach guarantees placement or recommendations. They improve the clarity, usefulness, and structure of your website."
    },
    {
      q: "Can you guarantee first-page rankings?",
      a: "No credible provider can guarantee a specific search position. Search performance depends on competition, location, website authority, reviews, content quality, technical factors, and other variables. We focus on building a stronger foundation and tracking meaningful improvement."
    },
    {
      q: "What does the website assistant do?",
      a: "The assistant can answer approved questions, collect vehicle and service information, qualify inquiries, and guide visitors toward the right next step. Its exact role is based on your services, pricing rules, and booking process."
    },
    {
      q: "Will the assistant give customers incorrect prices?",
      a: "It should only use pricing information and rules approved by your shop. For jobs that require inspection or judgment, it can provide a range, explain the factors involved, or collect information for a human estimate."
    },
    {
      q: "Can the assistant book appointments?",
      a: "It can be connected to a booking or consultation process when appropriate. Some shops may prefer the assistant to collect information first and send the lead to a team member for approval."
    },
    {
      q: "Will automation replace personal service?",
      a: "No. Good automation removes repetitive steps. It should create a faster path to human help when the customer needs it."
    },
    {
      q: "How long does a website project take?",
      a: "The timeline depends on the number of pages, content requirements, integrations, revisions, and how quickly the necessary business information is provided. A specific timeline is agreed upon before work begins."
    },
    {
      q: "Can you help after the website launches?",
      a: "Yes. Ongoing services may include new service pages, location content, conversion improvements, tracking, website maintenance, lead-generation support, and automation."
    }
  ];

  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-16">
        <header className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl uppercase">
            Frequently Asked Questions
          </h2>
        </header>

        <div className="w-full flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#111111] border border-[#1a1a1a] p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-[#D4AF37] text-lg leading-none">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed flex items-start gap-3">
                <span className="text-[#525252] text-lg leading-none">A.</span>
                <span>{faq.a}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
