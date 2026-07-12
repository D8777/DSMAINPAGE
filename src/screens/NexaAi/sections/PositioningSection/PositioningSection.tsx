export const PositioningSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 flex flex-col gap-6">
          <h2
            className="animate-fade-up text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            BUILT FOR AUTO DETAILERS
          </h2>
          <div 
            className="animate-fade-up flex flex-col gap-4 text-[#737373] leading-relaxed text-lg"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <p>Your business should not be marketed like a plumber, restaurant, or generic local service.</p>
            <p>Detailing customers make decisions differently.</p>
            <p>They want to see the quality of your work. They want to understand the difference between services. They want to know whether you can solve their specific problem without damaging their vehicle or wasting their money.</p>
          </div>
        </div>

        <div className="flex-1 w-full bg-[#111111] border border-[#1a1a1a] p-8 relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] to-[#280D3D]" />
          <h3 className="text-xl font-bold text-white mb-6">Your website needs to communicate:</h3>
          <ul className="flex flex-col gap-4 text-[#a3a3a3]">
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">●</span>
              <span>What services you provide</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">●</span>
              <span>Which vehicles and customers you serve</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">●</span>
              <span>Why your process is different</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">●</span>
              <span>What results customers can reasonably expect</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">●</span>
              <span>What happens after they request a quote</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] mt-1">●</span>
              <span>Why they should trust your shop with their vehicle</span>
            </li>
          </ul>
          <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
            <p className="text-[#D4AF37] font-medium">DS Automations builds your website around those decisions—not around a generic template.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
