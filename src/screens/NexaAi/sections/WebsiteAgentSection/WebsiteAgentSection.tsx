export const WebsiteAgentSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 opacity-10"
        style={{ background: "radial-gradient(ellipse at left, #280D3D 0%, transparent 70%)" }}
      />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 relative z-10">
        <header className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <p className="animate-fade-up text-sm font-semibold tracking-[0.3em] uppercase text-[#D4AF37]">
            OPTIONAL CONVERSION UPGRADE
          </p>
          <h2 className="animate-fade-up text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Give every website visitor someone to talk to.
          </h2>
          <p className="animate-fade-up text-lg leading-relaxed text-[#737373]">
            Some visitors are ready to book. Others still have questions:
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
          {[
            "Which service do I need?",
            "How much will it cost?",
            "Can you remove this stain?",
            "Is ceramic coating worth it?",
            "How long will the service take?",
            "Do you work on my type of vehicle?",
            "When is your next opening?"
          ].map(q => (
            <span key={q} className="bg-[#1a1a1a] text-[#a3a3a3] px-4 py-2 text-sm rounded-full border border-[#333]">
              {q}
            </span>
          ))}
        </div>

        <p className="text-center text-lg text-white max-w-2xl font-medium">
          When those answers are difficult to find, interested customers may leave or delay the decision.
          <br/><br/>
          <span className="text-[#D4AF37]">The DS Website Booking Assistant helps move the conversation forward while you stay focused on the vehicle in front of you.</span>
        </p>

        <div className="w-full mt-8">
          <h3 className="text-2xl font-bold text-center text-white mb-10">What the assistant can do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-bold text-[#D4AF37]">Answer common questions</h4>
              <p className="text-sm text-[#737373]">It can respond using information approved by your shop, including service details, preparation instructions, policies, and pricing ranges.</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-bold text-[#D4AF37]">Collect vehicle information</h4>
              <p className="text-sm text-[#737373] mb-2">The assistant can ask for:</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-[#a3a3a3]">
                <span>• Year, Make, Model</span>
                <span>• Vehicle size</span>
                <span>• Requested service</span>
                <span>• Current condition</span>
                <span>• Problem areas</span>
                <span>• Preferred date</span>
                <span>• Contact info</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-bold text-[#D4AF37]">Help customers choose a service</h4>
              <p className="text-sm text-[#737373]">It can guide visitors toward the most relevant service based on their vehicle, goals, and concerns.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-bold text-[#D4AF37]">Improve quote requests</h4>
              <p className="text-sm text-[#737373]">Instead of receiving a vague message such as "How much for a detail?", you receive a more complete inquiry with the information needed to respond.</p>
            </div>

            <div className="flex flex-col gap-3 md:col-span-2 md:w-1/2 md:mx-auto">
              <h4 className="text-lg font-bold text-[#D4AF37] text-center">Route qualified leads</h4>
              <p className="text-sm text-[#737373] text-center">
                Depending on your process, the assistant can direct customers toward: A quote request, a phone consultation, an inspection, an appointment calendar, a deposit step, a human team member, or work after business hours.
                <br/><br/>
                Visitors can receive help even when you are detailing, driving, closed for the day, or unable to answer immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-8 text-center border-t border-[#1a1a1a] pt-12 w-full">
          <p className="text-[#a3a3a3] max-w-2xl text-sm italic">
            The assistant does not replace your judgment. It handles repetitive questions and information collection before your expertise is needed.
          </p>
          <button className="h-14 rounded-none bg-[#D4AF37] px-10 text-base font-semibold tracking-wider text-[#0b0b0b] uppercase transition-all duration-300 hover:bg-[#c4a030] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]">
            Ask About the Website Assistant
          </button>
          <p className="text-[#525252] text-xs uppercase tracking-widest">
            Available as an upgrade to qualifying website projects.
          </p>
        </div>
      </div>
    </section>
  );
};
