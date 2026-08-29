import { HeroSection } from "./sections/HeroSection";
import { ConversationalSearchSection } from "./sections/ConversationalSearchSection";
import { ProblemSection } from "./sections/ProblemSection";
import { PositioningSection } from "./sections/PositioningSection";
import { AboutSection } from "./sections/AboutSection";
import { CoreServiceSection } from "./sections/CoreServiceSection";
import { InfrastructureSection } from "./sections/InfrastructureSection";
import { AiStructureSection } from "./sections/AiStructureSection";
import { AeoGeoSection } from "./sections/AeoGeoSection";
import { ProcessSection } from "./sections/ProcessSection";
import { DeliverablesSection } from "./sections/DeliverablesSection";
import { FaqSection } from "./sections/FaqSection";
import { FinalCTASection } from "./sections/FinalCTASection";
import { FooterSection } from "./sections/FooterSection";

export const NexaAi = (): JSX.Element => {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#0b0b0b] text-white">
      {/* Purple radial glow at top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full opacity-30"
        style={{ background: "radial-gradient(ellipse at top, #280D3D 0%, transparent 70%)" }}
      />
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative z-10 flex w-full flex-col items-stretch">
        <HeroSection />
        <ConversationalSearchSection />
        <ProblemSection />
        <PositioningSection />
        <AboutSection />
        <CoreServiceSection />
        <InfrastructureSection />
        <AiStructureSection />
        <AeoGeoSection />
        <ProcessSection />
        <DeliverablesSection />
        <FaqSection />
        <FinalCTASection />
        <FooterSection />
      </div>
    </main>
  );
};
