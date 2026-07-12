export const DeliverablesSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
        <header className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl uppercase">
            What You Receive
          </h2>
          <p className="text-lg text-[#D4AF37] font-medium">
            A working lead-generation foundation—not just a new design.
          </p>
        </header>
        
        <div className="w-full bg-[#111111] border border-[#1a1a1a] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#280D3D]/30 blur-3xl" />
          <h3 className="text-xl font-bold text-white mb-8">Your project may include:</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-[#a3a3a3]">
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Website strategy</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Positioning and offer development</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Custom website copy</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Mobile-responsive design</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Service-page structure</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Location-page structure</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Quote-request forms</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Calls-to-action</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Local search foundations</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> AEO and GEO content structure</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Basic analytics setup</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Conversion tracking</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Technical launch support</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37] text-xs">✓</span> Optional website assistant integration</div>
          </div>
          
          <p className="mt-10 pt-6 border-t border-[#1a1a1a] text-sm text-[#737373] text-center">
            Exact deliverables are agreed upon before the project begins.
          </p>
        </div>
      </div>
    </section>
  );
};
