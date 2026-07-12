export const ComparisonSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 border-t border-[#1a1a1a]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <header className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl uppercase">
            A website that exists <span className="text-[#525252]">vs.</span> a website built to generate business
          </h2>
        </header>
        
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-[#0b0b0b] border border-[#1a1a1a] p-8 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[#737373] text-center border-b border-[#1a1a1a] pb-4">Generic website</h3>
            <ul className="flex flex-col gap-4 text-[#a3a3a3]">
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>Focused mainly on appearance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>Uses broad, interchangeable messaging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>Lists services without explaining value</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>Relies on one contact form</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>Gives every visitor the same path</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>Has little visibility into lead behavior</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>Stops working once the form is submitted</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-[#111111] border border-[#D4AF37]/30 p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 blur-3xl" />
            <h3 className="text-xl font-bold text-[#D4AF37] text-center border-b border-[#1a1a1a] pb-4">DS detailer website</h3>
            <ul className="flex flex-col gap-4 text-white">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Built around customer decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Positions your shop clearly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Gives priority services dedicated pages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Creates clear quote and contact paths</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Supports local and AI-assisted discovery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Tracks meaningful actions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Can be expanded with a booking assistant and follow-up automation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
