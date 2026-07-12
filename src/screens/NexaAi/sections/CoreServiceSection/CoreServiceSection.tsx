export const CoreServiceSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <header className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="animate-fade-up text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            THE DETAILER GROWTH WEBSITE
          </h2>
          <p className="animate-fade-up text-lg leading-relaxed text-[#737373]">
            Built to get found, build trust, and generate inquiries.<br/><br/>
            Your website becomes the foundation of your lead-generation system.<br/><br/>
            Every page has a job: attract the right customer, answer the right question, and move the visitor toward a clear next step.
          </p>
        </header>

        <div className="w-full">
          <h3 className="text-2xl font-bold text-center text-[#D4AF37] mb-12">What your website can include</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111]">
              <h4 className="text-lg font-bold text-white">Conversion-focused homepage</h4>
              <p className="text-sm text-[#737373]">A clear explanation of what you offer, who you help, why customers should trust you, and what they should do next.</p>
            </div>
            
            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111] row-span-2">
              <h4 className="text-lg font-bold text-white">Service pages</h4>
              <p className="text-sm text-[#737373] mb-4">Dedicated pages for services such as:</p>
              <ul className="text-sm text-[#a3a3a3] flex flex-col gap-2 mb-4 list-disc pl-4">
                <li>Ceramic coating</li>
                <li>Paint correction</li>
                <li>Interior detailing</li>
                <li>Exterior detailing</li>
                <li>Mobile detailing</li>
                <li>Paint protection film</li>
                <li>Maintenance detailing</li>
                <li>Fleet or commercial services</li>
              </ul>
              <p className="text-sm text-[#737373] mt-auto border-t border-[#1a1a1a] pt-4">Each page is written around customer intent rather than a list of features.</p>
            </div>

            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111]">
              <h4 className="text-lg font-bold text-white">Service-area pages</h4>
              <p className="text-sm text-[#737373]">Pages that clearly communicate the cities, neighborhoods, and areas you serve without relying on thin, repetitive location copy.</p>
            </div>

            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111]">
              <h4 className="text-lg font-bold text-white">Quote and booking paths</h4>
              <p className="text-sm text-[#737373]">Clear calls to action that guide visitors toward calling, requesting a quote, submitting vehicle details, or booking the next appropriate step.</p>
            </div>

            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111]">
              <h4 className="text-lg font-bold text-white">Portfolio and trust sections</h4>
              <p className="text-sm text-[#737373]">Before-and-after work, reviews, process explanations, frequently asked questions, and other proof organized to support the sale.</p>
            </div>

            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111]">
              <h4 className="text-lg font-bold text-white">Mobile-first experience</h4>
              <p className="text-sm text-[#737373]">A clear experience for customers searching from their phones, where most local buying decisions begin.</p>
            </div>

            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111]">
              <h4 className="text-lg font-bold text-white">Tracking foundation</h4>
              <p className="text-sm text-[#737373]">Analytics and conversion tracking can be set up so you can better understand which pages and offers are producing inquiries.</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="h-14 rounded-none bg-[#D4AF37] px-10 text-base font-semibold tracking-wider text-[#0b0b0b] uppercase transition-all duration-300 hover:bg-[#c4a030] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]">
            Request My Website Audit
          </button>
        </div>
      </div>
    </section>
  );
};
