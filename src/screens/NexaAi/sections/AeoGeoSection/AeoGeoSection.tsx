export const AeoGeoSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 border-t border-[#1a1a1a]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16">
        <header className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="animate-fade-up text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            SEARCH IS CHANGING
          </h2>
          <p className="animate-fade-up text-lg leading-relaxed text-[#737373]">
            Help customers find your shop wherever they search.
            <br/><br/>
            Your customers may use Google, maps, voice search, or AI-assisted search tools to compare local detailing businesses.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 w-full">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-6">Your website should make it easy for those platforms to understand:</h3>
            <ul className="flex flex-col gap-4 text-[#a3a3a3]">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">●</span>
                <span>What your business does</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">●</span>
                <span>Which services you offer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">●</span>
                <span>Where you operate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">●</span>
                <span>Who your services are for</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">●</span>
                <span>What makes your process credible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-1">●</span>
                <span>How customers can take the next step</span>
              </li>
            </ul>
            <p className="mt-8 text-[#D4AF37] font-medium border-l-2 border-[#D4AF37] pl-4 py-1">
              DS Automations structures your content for traditional search and emerging AI-driven discovery.
            </p>
          </div>

          <div className="flex-1 bg-[#111111] border border-[#1a1a1a] p-8">
            <h3 className="text-xl font-bold text-white mb-8">What that means in practice</h3>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-base font-bold text-white mb-1">Clear service information</h4>
                <p className="text-sm text-[#737373]">Each service is explained using the language customers actually understand and search for.</p>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Helpful answers</h4>
                <p className="text-sm text-[#737373]">Frequently asked questions address pricing factors, service differences, preparation, timelines, vehicle condition, and aftercare.</p>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Strong local relevance</h4>
                <p className="text-sm text-[#737373]">Your website connects your services to the locations you genuinely serve.</p>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Structured content</h4>
                <p className="text-sm text-[#737373]">Pages are organized so people, search engines, and AI systems can more easily interpret the information.</p>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Credible business signals</h4>
                <p className="text-sm text-[#737373]">Your experience, process, service details, reviews, policies, and contact information are presented clearly and consistently.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl text-center bg-[#280D3D]/20 border border-[#280D3D] p-6 rounded-sm">
          <p className="text-[#a3a3a3] text-sm">
            <span className="text-[#D4AF37] font-bold">Note:</span> We do not promise that an AI platform will recommend your shop. We build a stronger source of information for search systems and customers to understand.
          </p>
        </div>
      </div>
    </section>
  );
};
