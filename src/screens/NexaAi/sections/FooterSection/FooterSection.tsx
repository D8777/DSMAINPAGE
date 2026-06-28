const footerLinks = ["Services", "Solutions", "About", "Contact"];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full border-t border-[#1a1a1a] bg-[#0b0b0b] px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-[#D4AF37]/30 bg-[#280D3D]/40">
              <span className="bg-gradient-to-br from-[#D4AF37] to-[#a8892a] bg-clip-text text-sm font-bold leading-none text-transparent [-webkit-background-clip:text]">
                DS
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">DS</span>
              <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase">Automations</span>
            </div>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-[#3a3a3a]">
            Systems that save time, make money,
            <br />
            and prevent lost revenue.
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-xs font-medium tracking-wide text-[#525252] uppercase transition-colors hover:text-[#D4AF37]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-1 text-right">
          <a
            href="mailto:hello@dsautomations.com"
            className="text-xs text-[#525252] transition-colors hover:text-[#D4AF37]"
          >
            hello@dsautomations.com
          </a>
          <p className="text-xs text-[#3a3a3a]">© 2025 DS Automations</p>
        </div>
      </div>
    </footer>
  );
};
