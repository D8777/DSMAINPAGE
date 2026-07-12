export const LeadGenerationSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16">
        <header className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="animate-fade-up text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            THE WEBSITE IS THE FOUNDATION
          </h2>
          <p className="animate-fade-up text-lg leading-relaxed text-[#737373]">
            Then we build a clearer path from search to inquiry.
            <br/><br/>
            A website should not sit online waiting for someone to stumble across it.
            <br/>
            Once the foundation is in place, DS Automations can help strengthen the lead flow around it.
          </p>
        </header>

        <div className="w-full flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 w-full bg-[#111111] border border-[#1a1a1a] p-8">
            <h3 className="text-lg font-bold text-white mb-6 text-center border-b border-[#1a1a1a] pb-4">Depending on your shop, that may include:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-[#a3a3a3]">
              <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">■</span> Local search content</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">■</span> Service-area expansion</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">■</span> Landing pages</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">■</span> Offer development</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">■</span> Google Business Profile support</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">■</span> Quote-request improvements</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">■</span> Lead tracking</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">■</span> Conversion testing</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">■</span> Review-generation workflows</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">■</span> Paid-traffic landing pages</div>
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <p className="text-xl font-medium text-white leading-relaxed">
              The goal is not simply to increase visitor numbers.
              <br/><br/>
              <span className="text-[#D4AF37]">
                The goal is to attract more of the right customers and make it easier for them to take action.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
