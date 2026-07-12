export const ProblemSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-6 py-24 sm:px-10 lg:px-16 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16">
        <header className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2
            className="animate-fade-up text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            YOUR WEBSITE SHOULD DO MORE THAN LOOK PROFESSIONAL
          </h2>
          <p
            className="animate-fade-up text-lg leading-relaxed text-[#737373]"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            A good-looking website is not enough if it does not bring customers closer to booking.
            <br/><br/>
            Your potential customers are searching for ceramic coatings, paint correction, interior detailing, mobile detailing, and protection services in their area.
            <br/><br/>
            They may compare several shops within minutes.
            <br/><br/>
            When your website is difficult to find, slow to understand, or unclear about the next step, they leave without calling, requesting a quote, or booking.
            <br/><br/>
            You may never know the opportunity was there.
          </p>
        </header>

        <div className="w-full flex flex-col gap-10 max-w-4xl">
          <h3 className="text-2xl font-bold text-center text-[#D4AF37]">Common website problems we see</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111]">
              <h4 className="text-lg font-bold text-white">Your services are difficult to find</h4>
              <p className="text-sm text-[#737373]">Your website may mention what you offer without giving search engines enough context about each service or location.</p>
            </div>
            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111]">
              <h4 className="text-lg font-bold text-white">Your message sounds like every other detailer</h4>
              <p className="text-sm text-[#737373]">"Quality work," "great service," and "attention to detail" do not give customers a strong reason to choose you.</p>
            </div>
            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111]">
              <h4 className="text-lg font-bold text-white">Visitors have to work too hard</h4>
              <p className="text-sm text-[#737373]">Important details are buried. Quote forms ask the wrong questions. Calls to action are weak or inconsistent.</p>
            </div>
            <div className="flex flex-col gap-3 p-6 border border-[#1a1a1a] bg-[#111111]">
              <h4 className="text-lg font-bold text-white">Your website stops at lead capture</h4>
              <p className="text-sm text-[#737373]">A visitor fills out a form and waits. You still have to respond, ask the same questions, and manually move the conversation forward.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-4 text-center">
          <p className="text-lg text-white font-medium">
            More traffic will not fix a website that leaks attention, trust, and inquiries.
          </p>
          <button className="h-14 rounded-none border border-[#D4AF37] bg-transparent px-10 text-base font-semibold tracking-wider text-[#D4AF37] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0b0b0b]">
            Find the Leaks on My Website
          </button>
        </div>
      </div>
    </section>
  );
};
