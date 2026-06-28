import { ClientSuccessSection } from "./sections/ClientSuccessSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterLegalSection } from "./sections/FooterLegalSection/FooterLegalSection";
import { FooterNavigationSection } from "./sections/FooterNavigationSection";
import { HeroLeadSection } from "./sections/HeroLeadSection";
import { InnovationStorySection } from "./sections/InnovationStorySection";
import { PerformanceMetricsSection } from "./sections/PerformanceMetricsSection";
import { PlatformOverviewSection } from "./sections/PlatformOverviewSection";
import { PricingPlansSection } from "./sections/PricingPlansSection";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";
import { SavingsOfferSection } from "./sections/SavingsOfferSection";
import { SolutionsOverviewSection } from "./sections/SolutionsOverviewSection";
import { TrustPartnersSection } from "./sections/TrustPartnersSection/TrustPartnersSection";

const sectionOrder = [
  { key: "primary-navigation", Component: PrimaryNavigationSection },
  { key: "hero-lead", Component: HeroLeadSection },
  { key: "performance-metrics", Component: PerformanceMetricsSection },
  { key: "trust-partners", Component: TrustPartnersSection },
  { key: "solutions-overview", Component: SolutionsOverviewSection },
  { key: "platform-overview", Component: PlatformOverviewSection },
  { key: "savings-offer", Component: SavingsOfferSection },
  { key: "pricing-plans", Component: PricingPlansSection },
  { key: "innovation-story", Component: InnovationStorySection },
  { key: "client-success", Component: ClientSuccessSection },
  { key: "faq", Component: FAQSection },
  { key: "footer-navigation", Component: FooterNavigationSection },
  { key: "footer-legal", Component: FooterLegalSection },
];

export const NexaAiOld = (): JSX.Element => {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#0e0a0f] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[1138px] w-[1724px] -translate-x-1/2 rounded-[862px/569px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(175,46,203,0.28)_0%,rgba(14,10,15,0)_100%)]"
      />
      <div className="relative z-10 flex w-full flex-col items-stretch">
        {sectionOrder.map(({ key, Component }) => (
          <section key={key} className="relative w-full">
            <Component />
          </section>
        ))}
      </div>
    </main>
  );
};
