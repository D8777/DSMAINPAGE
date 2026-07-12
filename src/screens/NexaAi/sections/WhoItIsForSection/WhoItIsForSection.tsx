export const WhoItIsForSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
        <header className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl uppercase">
            A GOOD FIT FOR
          </h2>
          <p className="text-lg text-[#D4AF37] font-medium max-w-2xl">
            Detailers who are ready to treat their website like part of the sales process.
          </p>
        </header>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111111] border border-[#1a1a1a] p-8 flex flex-col gap-6 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]/50" />
            <h3 className="text-xl font-bold text-white">DS Automations may be a fit when:</h3>
            <ul className="flex flex-col gap-4 text-[#a3a3a3]">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Your current website feels dated or unclear</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>You rely heavily on social media or referrals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Your service pages do not rank or convert</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Customers repeatedly ask questions your site should answer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Your quote requests lack useful information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>Your shop has outgrown a basic template</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>You want a stronger foundation before spending more on advertising</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">✓</span>
                <span>You want to add automation without making the customer experience feel robotic</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#0b0b0b] border border-[#1a1a1a] p-8 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[#737373]">This may not be the right fit when:</h3>
            <ul className="flex flex-col gap-4 text-[#737373]">
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>You only need the cheapest possible website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>You want copied content from competing shops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>You expect guaranteed rankings or instant results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>You are unwilling to provide service, pricing, process, or business information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#333] mt-1">✕</span>
                <span>You want automation to replace every human interaction</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
