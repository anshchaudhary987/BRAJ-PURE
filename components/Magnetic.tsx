"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Magnetic({ children, style }: { children: React.ReactElement; style?: React.CSSProperties }) {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices to avoid layout glitches
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const el = magnetic.current;
    if (!el) return;

    // Use gsap.quickTo for hardware-accelerated coordinate updates
    const xTo = gsap.quickTo(el, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(el, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = el.getBoundingClientRect();
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      
      // Attract the button towards the mouse (35% coordinate strength)
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={magnetic} style={{ display: "inline-block", position: "relative", ...style }}>
      {children}
    </div>
  );
}
