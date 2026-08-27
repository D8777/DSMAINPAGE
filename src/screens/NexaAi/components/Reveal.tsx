import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds before the reveal transition starts. */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Reveals its children with a subtle upward fade once scrolled into view.
 * Respects prefers-reduced-motion through the .reveal styles in tailwind.css.
 */
export const Reveal = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps): JSX.Element => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};
