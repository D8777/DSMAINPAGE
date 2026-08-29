const focusAreas = [
  "Website Modernization",
  "Reputation",
  "Search & AI Visibility",
  "Conversion & Clarity",
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full border-t border-[#1a1a1a] bg-[#0b0b0b] px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#D4AF37]/30 bg-[#280D3D]/40">
              <span className="bg-gradient-to-br from-[#D4AF37] to-[#a8892a] bg-clip-text text-sm font-bold leading-none tracking-tight text-transparent [-webkit-background-clip:text]">
                DS
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                DS
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                Automations
              </span>
            </div>
          </div>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#737373]">
            Website modernization for local businesses whose reputation has
            outgrown their website.
          </p>
        </div>

        {/* Focus */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">
            Focus
          </h4>
          <ul className="flex flex-col gap-3">
            {focusAreas.map((item) => (
              <li key={item} className="text-sm text-[#737373]">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Principles */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">
            How we work
          </h4>
          <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[#737373]">
            <li>Reputation before decoration</li>
            <li>Clarity before cleverness</li>
            <li>Specifics before slogans</li>
            <li>No guaranteed-ranking promises</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between border-t border-[#1a1a1a] pt-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-[#525252]">
          &copy; {new Date().getFullYear()} DS Automations &amp; AI Solutions. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};
