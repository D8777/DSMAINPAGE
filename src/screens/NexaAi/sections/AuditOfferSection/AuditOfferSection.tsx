import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export const AuditOfferSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 bg-[#0b0b0b]">
      {/* Purple left glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 opacity-15"
        style={{ background: "radial-gradient(ellipse at left, #280D3D 0%, transparent 70%)" }}
      />
      
      <div className="relative mx-auto flex max-w-6xl flex-col lg:flex-row gap-16">
        
        {/* Left Side: Info */}
        <div className="flex-1 flex flex-col gap-8">
          <header className="flex flex-col gap-5">
            <p className="animate-fade-up text-xs font-semibold tracking-[0.3em] uppercase text-[#D4AF37]">
              START HERE
            </p>
            <h2 className="animate-fade-up text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Get a free website and lead-flow audit.
            </h2>
            <p className="animate-fade-up text-base leading-relaxed text-[#737373]">
              We will review how effectively your current online presence helps local customers find you, understand your offer, and contact your shop.
            </p>
          </header>

          <div className="flex flex-col gap-8 mt-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Your audit may cover:</h3>
              <div className="flex flex-wrap gap-2 text-sm text-[#a3a3a3]">
                {["Homepage clarity", "Service positioning", "Calls to action", "Mobile experience", "Local search structure", "AEO and GEO readiness", "Trust and proof", "Quote-request process", "Website speed and usability", "Lead-capture gaps", "Opportunities for a website assistant"].map(item => (
                  <span key={item} className="bg-[#111111] border border-[#1a1a1a] px-3 py-1.5 rounded-sm">{item}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">What you will receive:</h3>
              <p className="text-sm text-[#737373] mb-3">A clear explanation of:</p>
              <ul className="flex flex-col gap-2 text-[#a3a3a3] text-sm">
                <li className="flex items-start gap-2"><span className="text-[#D4AF37]">✓</span> What is already working</li>
                <li className="flex items-start gap-2"><span className="text-[#D4AF37]">✓</span> Where visitors may be dropping off</li>
                <li className="flex items-start gap-2"><span className="text-[#D4AF37]">✓</span> Which improvements should come first</li>
                <li className="flex items-start gap-2"><span className="text-[#D4AF37]">✓</span> Whether a new website is necessary</li>
                <li className="flex items-start gap-2"><span className="text-[#D4AF37]">✓</span> Whether automation would meaningfully improve your lead flow</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 bg-[#111111] border border-[#1a1a1a] p-8">
          <h3 className="text-xl font-bold text-white mb-2 text-center">Tell us about your detailing business</h3>
          <p className="text-xs text-center text-[#737373] mb-8">No generic website pitch. We start by reviewing what your business actually needs.</p>
          
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#a3a3a3]">Name</label>
                <input type="text" placeholder="Your name" className="bg-[#0b0b0b] border border-[#333] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#a3a3a3]">Business name</label>
                <input type="text" placeholder="Your detailing business" className="bg-[#0b0b0b] border border-[#333] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#a3a3a3]">Email</label>
                <input type="email" placeholder="Your best email" className="bg-[#0b0b0b] border border-[#333] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#a3a3a3]">Phone</label>
                <input type="tel" placeholder="Your phone number" className="bg-[#0b0b0b] border border-[#333] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#a3a3a3]">Website</label>
              <input type="url" placeholder="Your current website, if available" className="bg-[#0b0b0b] border border-[#333] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#a3a3a3]">Primary service area</label>
              <input type="text" placeholder="City, region, or service radius" className="bg-[#0b0b0b] border border-[#333] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#a3a3a3]">Which services do you want to grow?</label>
              <input type="text" placeholder="For example: ceramic coating, paint correction, mobile detailing" className="bg-[#0b0b0b] border border-[#333] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#a3a3a3]">What is the biggest issue with your current website or lead flow?</label>
              <textarea placeholder="Tell us what is not working" rows={3} className="bg-[#0b0b0b] border border-[#333] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" />
            </div>

            <Button
              type="button"
              className="mt-4 h-12 rounded-none bg-[#D4AF37] px-8 text-sm font-bold tracking-wider text-[#0b0b0b] uppercase transition-all hover:bg-[#c4a030]"
            >
              Request My Audit
            </Button>

            <p className="text-[10px] text-[#525252] text-center mt-2 leading-relaxed">
              By submitting this form, you agree that DS Automations may contact you about your audit request. Your information will not be sold.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
