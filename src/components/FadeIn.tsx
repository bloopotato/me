"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 0 }: FadeInProps) => {
  const el = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!el.current) return;

      gsap.fromTo(
        el.current,
        {
          opacity: 0,
          x: -100,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 2,
          delay: delay / 1000,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el.current,
            start: "top 80%",
            end: "top 30%",
            scrub: false,
            toggleActions: "play reverse play reverse", // animate in and out
            onLeave: () => {
              gsap.to(el.current, {
                opacity: 0,
                x: 100,
                filter: "blur(4px)",
                duration: 2,
                ease: "power3.in",
              });
            },
            onEnterBack: () => {
              gsap.to(el.current, {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                duration: 1,
                ease: "power3.out",
              });
            },
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return <div ref={el}>{children}</div>;
};

export default FadeIn;
