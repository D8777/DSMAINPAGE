export const AboutSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 border-t border-[#1a1a1a]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
        <header className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl uppercase">
            WHY DS AUTOMATIONS
          </h2>
          <p className="text-lg text-[#D4AF37] font-medium max-w-2xl">
            Strategy, conversion, search, and automation under one roof.
          </p>
        </header>
        
        <div className="w-full flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-[#111111] border border-[#1a1a1a] p-8 flex flex-col justify-center text-center relative overflow-hidden">
            <p className="text-lg text-[#737373] italic">
              "Most website providers stop when the site goes live. Most automation providers begin without fixing the weak website or lead path underneath."
            </p>
          </div>

          <div className="flex-[2] bg-[#0b0b0b] border border-[#D4AF37]/20 p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#280D3D]/20 blur-3xl" />
            <h3 className="text-2xl font-bold text-white">DS Automations connects the two.</h3>
            
            <p className="text-[#a3a3a3] leading-relaxed">
              We build the website foundation first: clear positioning, useful content, strong conversion paths, and a structure that supports local and AI-assisted search.
            </p>
            <p className="text-[#a3a3a3] leading-relaxed">
              Then, where it improves the customer experience, we add automation to answer questions, collect information, route leads, and support follow-up.
            </p>
            
            <div className="mt-4 pt-6 border-t border-[#1a1a1a]">
              <p className="text-[#D4AF37] font-medium text-lg leading-relaxed">
                The result is a system designed around how detailing customers discover, compare, and contact your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
