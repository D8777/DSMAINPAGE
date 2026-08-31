import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Reveal } from "../../components/Reveal";

/* Apex Auto Detail prototype data (mirrors the live build) */
const sizes = [
  { label: "Coupe / Sedan", add: 0 },
  { label: "Midsize SUV / Truck", add: 150 },
  { label: "Full-Size SUV / EV", add: 250 },
];
const goals = [
  { label: "3–5 Year Ceramic", price: 895 },
  { label: "Lifetime Ceramic Tint", price: 349 },
  { label: "PNW Winter Defense", price: 1195 },
];
const TINT_ADD = 349;

type TargetKey = "size" | "goal" | "tint" | "submit" | null;

/* Auto-play script: which control the cursor targets at each beat */
const script: { target: TargetKey; hold: number }[] = [
  { target: null, hold: 900 },
  { target: "size", hold: 1100 },
  { target: "goal", hold: 1100 },
  { target: "tint", hold: 1100 },
  { target: "submit", hold: 3200 },
];

const highlights = [
  "5-step guided intake that never overwhelms the customer",
  "Live pricing that adjusts to vehicle size and services",
  "Instant text-back the moment an estimate is requested",
];

export const ShowcaseSection = (): JSX.Element => {
  const [step, setStep] = useState(0);
  const [size, setSize] = useState(0);
  const [goal, setGoal] = useState(0);
  const [addTint, setAddTint] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50, show: false });

  const frameRef = useRef<HTMLDivElement | null>(null);
  const sizeRef = useRef<HTMLButtonElement | null>(null);
  const goalRef = useRef<HTMLButtonElement | null>(null);
  const tintRef = useRef<HTMLButtonElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);

  const tintPrice = addTint && goal !== 1 ? TINT_ADD : 0;
  const min = goals[goal].price + sizes[size].add + tintPrice;
  const max = min + (goal === 2 ? 400 : 300);

  /* Reduced motion + in-view detection */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const node = frameRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.25 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  /* Static filled state when motion is reduced */
  useEffect(() => {
    if (!reduced) return;
    setSize(1);
    setGoal(2);
    setAddTint(true);
    setSubmitted(false);
    setCursor((c) => ({ ...c, show: false }));
  }, [reduced]);

  /* Drive the auto-play state machine */
  useEffect(() => {
    if (reduced || !inView) return;
    const beat = script[step];

    // Apply the selection for the current beat, then advance.
    const clickTimer = window.setTimeout(() => {
      if (beat.target) {
        setClicking(true);
        window.setTimeout(() => setClicking(false), 260);
      }
      if (beat.target === "size") setSize(1);
      if (beat.target === "goal") setGoal(2);
      if (beat.target === "tint") setAddTint(true);
      if (beat.target === "submit") setSubmitted(true);
    }, 620);

    const nextTimer = window.setTimeout(() => {
      if (step === script.length - 1) {
        // reset for the next loop
        setSize(0);
        setGoal(0);
        setAddTint(false);
        setSubmitted(false);
        setStep(0);
      } else {
        setStep((s) => s + 1);
      }
    }, beat.hold + 620);

    return () => {
      window.clearTimeout(clickTimer);
      window.clearTimeout(nextTimer);
    };
  }, [step, reduced, inView]);

  /* Move the cursor toward the active control */
  useLayoutEffect(() => {
    if (reduced || !inView) return;
    const beat = script[step];
    const frame = frameRef.current;
    if (!frame) return;
    const refMap: Record<Exclude<TargetKey, null>, typeof sizeRef> = {
      size: sizeRef,
      goal: goalRef,
      tint: tintRef,
      submit: submitRef,
    };
    if (!beat.target) {
      setCursor({ x: 50, y: 46, show: true });
      return;
    }
    const el = refMap[beat.target].current;
    if (!el) return;
    const fr = frame.getBoundingClientRect();
    const tr = el.getBoundingClientRect();
    const x = ((tr.left + tr.width / 2 - fr.left) / fr.width) * 100;
    const y = ((tr.top + tr.height / 2 - fr.top) / fr.height) * 100;
    setCursor({ x, y, show: true });
  }, [step, reduced, inView, submitted]);

  return (
    <section className="relative w-full overflow-hidden bg-[#080808] px-6 py-24 sm:px-10 lg:px-16">
      {/* ambient cyan glow to signal a live product */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full opacity-40 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(0,210,255,0.18) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: narrative */}
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="w-fit rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7fe6ff]">
              Systems in action
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              A system that removes friction
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-pretty text-base leading-relaxed text-[#a3a3a3]">
              This is a real intake system we built for a Seattle auto-detailing
              studio. Watch it work: a customer picks their vehicle, chooses a
              protection goal, and gets an instant estimate with an automated
              text-back — the kind of clear, modern experience that earns trust.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="flex flex-col gap-3">
              {highlights.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#d4d4d4]"
                >
                  <span
                    aria-hidden="true"
                    className="animate-bounce-soft mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D2FF]"
                    style={{ ["--animation-delay" as string]: `${index * 0.18}s` }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right: auto-playing device frame */}
        <Reveal delay={0.1}>
          <div
            ref={frameRef}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
          >
            {/* browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 truncate rounded-md bg-black/40 px-3 py-1 text-center text-[11px] text-slate-400">
                apex-studio.demo/estimate
              </div>
            </div>

            {/* estimator body */}
            <div className="relative p-5 sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-500">Protection estimator</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Build your starting point
                  </p>
                </div>
                <div className="rounded-full bg-slate-800 px-3 py-1 text-[10px] text-[#7fe6ff]">
                  {submitted ? "Sent" : "Step 1 of 3"}
                </div>
              </div>

              {submitted ? (
                <div className="py-4 text-center">
                  <div className="mx-auto grid size-14 place-items-center rounded-full bg-[#00D2FF] text-[#0a0d14]">
                    <CheckIcon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    Your estimate is on its way.
                  </h3>
                  <div className="mx-auto mt-6 max-w-xs rounded-2xl border border-slate-700 bg-[#0a0d14] p-4 text-left">
                    <p className="text-[10px] tracking-wide text-slate-500">
                      MESSAGES · NOW
                    </p>
                    <p className="mt-3 text-xs leading-5 text-slate-300">
                      Hey there, Marcus here from the bay. Got your request — we
                      have 2 coating bays open this Thursday. Your estimate:{" "}
                      <span className="font-semibold text-[#7fe6ff]">
                        ${min.toLocaleString()}–${max.toLocaleString()}
                      </span>
                      .
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* vehicle size */}
                  <p className="mb-3 text-xs font-medium text-slate-300">
                    Vehicle size
                  </p>
                  <div className="mb-6 grid grid-cols-3 gap-2">
                    {sizes.map((item, i) => (
                      <button
                        key={item.label}
                        ref={i === 1 ? sizeRef : undefined}
                        type="button"
                        className={`rounded-lg border p-2.5 text-left text-[11px] leading-tight transition ${
                          size === i
                            ? "border-[#00D2FF] bg-[#00D2FF]/10 text-[#bff0ff]"
                            : "border-slate-700 text-slate-400"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* protection objective */}
                  <p className="mb-3 text-xs font-medium text-slate-300">
                    Protection objective
                  </p>
                  <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {goals.map((item, i) => (
                      <button
                        key={item.label}
                        ref={i === 2 ? goalRef : undefined}
                        type="button"
                        className={`flex min-h-14 items-center rounded-lg border p-3 text-left text-xs font-medium leading-snug transition ${
                          goal === i
                            ? "border-[#00D2FF] bg-[#00D2FF]/10 text-[#bff0ff]"
                            : "border-slate-700 text-slate-400"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* tint add-on */}
                  {goal !== 1 && (
                    <button
                      ref={tintRef}
                      type="button"
                      className={`mb-6 flex w-full items-center justify-between gap-3 rounded-lg border p-3 text-left text-xs transition ${
                        addTint
                          ? "border-[#00D2FF] bg-[#00D2FF]/10 text-[#bff0ff]"
                          : "border-slate-700 text-slate-400"
                      }`}
                    >
                      <span>+ Add Ceramic Window Tint (+${TINT_ADD})</span>
                      <span
                        className={`grid size-5 place-items-center rounded-full border text-[10px] ${
                          addTint
                            ? "border-[#00D2FF] bg-[#00D2FF] text-[#0a0d14]"
                            : "border-slate-600"
                        }`}
                      >
                        {addTint ? "✓" : ""}
                      </span>
                    </button>
                  )}

                  {/* running estimate */}
                  <div className="mb-5 flex items-end justify-between rounded-lg border border-slate-800 bg-black/30 px-4 py-3">
                    <span className="text-[11px] text-slate-500">
                      Estimated investment
                    </span>
                    <span className="text-lg font-semibold text-[#7fe6ff]">
                      ${min.toLocaleString()}–${max.toLocaleString()}
                    </span>
                  </div>

                  <button
                    ref={submitRef}
                    type="button"
                    className="w-full rounded-lg bg-[#00D2FF] py-3 text-sm font-semibold text-[#0a0d14] transition hover:bg-[#38dcff]"
                  >
                    Get my estimate
                  </button>
                </>
              )}

              {/* animated cursor */}
              {cursor.show && !reduced && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute z-20 transition-all duration-500 ease-out"
                  style={{
                    left: `${cursor.x}%`,
                    top: `${cursor.y}%`,
                    transform: "translate(-20%, -10%)",
                  }}
                >
                  {clicking && (
                    <span className="absolute -left-2 -top-2 h-8 w-8 animate-pulse-ring rounded-full border-2 border-[#00D2FF]" />
                  )}
                  <CursorIcon />
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

function CheckIcon(): JSX.Element {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CursorIcon(): JSX.Element {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="white"
      stroke="#0a0d14"
      strokeWidth="1.5"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
    >
      <path d="M5 3l14 8-6 1.5L10 19 5 3z" />
    </svg>
  );
}
