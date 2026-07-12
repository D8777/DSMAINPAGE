export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full border-t border-[#1a1a1a] bg-[#0b0b0b] px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#D4AF37]/30 bg-[#280D3D]/40">
              <span className="bg-gradient-to-br from-[#D4AF37] to-[#a8892a] bg-clip-text text-sm font-bold leading-none tracking-tight text-transparent [-webkit-background-clip:text]">
                DS
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold tracking-[0.15em] text-white uppercase">
                DS
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase">
                Automations
              </span>
            </div>
          </div>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#737373]">
            Websites, lead-generation systems, and website assistants for auto detailing businesses.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 lg:col-span-2">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                "Detailer Websites",
                "Local Search Strategy",
                "AEO and GEO",
                "Lead Generation",
                "Website Booking Assistants",
                "Conversion Automation"
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-[#737373] transition-colors hover:text-[#D4AF37]"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              {["About", "Contact", "Privacy Policy", "Terms"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-[#737373] transition-colors hover:text-[#D4AF37]"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase">
            Contact
          </h4>
          <div className="flex flex-col gap-2 text-sm text-[#737373]">
            <p>Email: <a href="mailto:contact@dsautomations.com" className="hover:text-[#D4AF37]">contact@dsautomations.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-[#D4AF37]">+1 (234) 567-890</a></p>
            <p>Service area: Remote services available</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between border-t border-[#1a1a1a] pt-8 sm:flex-row text-center sm:text-left">
        <p className="text-xs text-[#525252]">
          © {new Date().getFullYear()} DS Automations & AI Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
