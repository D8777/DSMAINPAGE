import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const billingOptions = ["Monthly", "Yearly"] as const;

const plans = [
  {
    name: "Starter",
    icon: "/frame-8.svg",
    price: "$29",
    period: "/mo",
    description: "For Small Businesses",
    features: ["Up to 3 users", "Basic AI modules", "Email support"],
    cta: "Choose Starter",
    featured: false,
  },
  {
    name: "Growth",
    icon: "/frame-22.svg",
    price: "$79",
    period: "/mo",
    description: "For Growing Businesses",
    features: [
      "Up to 10 users",
      "All modules + API access",
      "Priority support",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Enterprise",
    icon: "/frame-24.svg",
    price: "$99",
    period: "/mo",
    description: "For Established Businesses",
    features: [
      "Unlimited Users",
      "Dedicated workflows + SLA",
      "24/7 white-glove",
    ],
    cta: "Get Enterprise",
    featured: false,
  },
] as const;

export const PricingPlansSection = (): JSX.Element => {
  const [billingCycle, setBillingCycle] =
    useState<(typeof billingOptions)[number]>("Monthly");

  return (
    <section className="relative flex w-full flex-col items-stretch px-0 pt-6 pb-[60px]">
      <header className="flex w-full flex-col items-center gap-4 px-6 py-16 text-center sm:px-10 lg:px-24 xl:px-[220px] 2xl:px-[385px]">
        <h2 className="max-w-[520px] bg-[linear-gradient(150deg,rgba(255,255,255,1)_37%,rgba(228,160,247,0.9)_100%)] bg-clip-text text-center [font-family:'Anybody',Helvetica] text-4xl font-medium leading-[normal] tracking-[-0.96px] text-transparent [-webkit-text-fill-color:transparent] [text-fill-color:transparent] sm:text-5xl">
          Flexible Pricing for Every Growth Stage
        </h2>
        <p className="max-w-[760px] [font-family:'Alexandria',Helvetica] text-base font-medium leading-[normal] tracking-[-0.32px] text-[#f8e9fe]">
          Select your NexaAI plan—transparent tiers, scalable AI‑powered
          features, and premium support—designed to maximize ROI and empower
          growth‑driven decisions.
        </p>
      </header>
      <div className="flex w-full flex-col items-stretch gap-9">
        <div className="flex w-full justify-center gap-6">
          {billingOptions.map((option) => {
            const isActive = billingCycle === option;

            return (
              <Button
                key={option}
                type="button"
                variant="ghost"
                onClick={() => setBillingCycle(option)}
                className={`h-9 w-[99px] rounded-md px-4 py-0 [font-family:'Alexandria',Helvetica] text-sm font-normal tracking-[0] ${
                  isActive
                    ? "bg-[#af2ecb] text-white shadow-[inset_0px_0px_9px_1px_#dc7ff3] hover:bg-[#af2ecb] hover:text-white"
                    : "border border-solid border-[#f1d2fc] bg-transparent text-[#f8e9fe] shadow-[inset_0px_0px_9px_1px_#dc7ff3] hover:bg-transparent hover:text-[#f8e9fe]"
                }`}
              >
                {option}
              </Button>
            );
          })}
        </div>
        <div className="grid w-full grid-cols-1 justify-center gap-8 px-6 sm:px-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-12 xl:px-16 2xl:px-[130px]">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative w-full rounded-2xl border-0 p-0 text-white shadow-none ${
                plan.featured
                  ? "bg-[linear-gradient(180deg,rgba(68,49,73,1)_0%,rgba(14,10,15,1)_100%)] before:absolute before:inset-0 before:z-[1] before:rounded-2xl before:bg-[linear-gradient(158deg,rgba(113,76,125,1)_0%,rgba(162,128,176,1)_100%)] before:p-px before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]"
                  : "bg-[#0e0a0f] before:absolute before:inset-0 before:z-[1] before:rounded-2xl before:bg-[linear-gradient(158deg,rgba(68,49,73,1)_0%,rgba(113,76,125,1)_100%)] before:p-px before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]"
              }`}
            >
              <CardContent className="relative z-[2] flex h-full flex-col gap-6 p-6">
                <div className="flex flex-col gap-4 border-b border-[#454545] pb-8">
                  <div className="flex items-center justify-center gap-2.5 self-stretch">
                    <img className="h-6 w-6" alt={plan.name} src={plan.icon} />
                    <h3 className="flex-1 [font-family:'Inter',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white">
                      {plan.name}
                    </h3>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2.5 self-stretch">
                    <p className="w-full [font-family:'Inter',Helvetica] text-4xl font-normal leading-[normal] tracking-[0] text-white">
                      <span className="font-bold">{plan.price} </span>
                      <span className="text-xl font-medium">{plan.period}</span>
                    </p>
                    <p className="w-full [font-family:'Inter',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-white">
                      {plan.description}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2.5 pt-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex min-h-6 items-start gap-6"
                    >
                      <img
                        className="h-6 w-6"
                        alt=""
                        aria-hidden="true"
                        src="/frame-9.svg"
                      />
                      <span className="[font-family:'Inter',Helvetica] text-base font-normal leading-[normal] tracking-[0] whitespace-nowrap text-white">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-1.5 pb-3">
                  <Button
                    type="button"
                    className={`h-[46px] w-full rounded-md px-5 py-0 [font-family:'Alexandria',Helvetica] text-base leading-[normal] tracking-[0] ${
                      plan.featured
                        ? "bg-[#af2ecb] font-normal text-white shadow-[inset_0px_0px_9px_1px_#dc7ff3] hover:bg-[#af2ecb]"
                        : "border border-solid border-[#f1d2fc] bg-transparent font-medium text-[#f1d2fc] shadow-[inset_0px_0px_9px_1px_#f1d2fc] hover:bg-transparent hover:text-[#f1d2fc]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {plan.cta}
                      <img
                        className="h-[22.63px] w-[22.63px]"
                        alt=""
                        aria-hidden="true"
                        src="/frame-15.svg"
                      />
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
