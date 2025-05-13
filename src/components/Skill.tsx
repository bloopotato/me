"use client";
import React from "react";
import { useRef, useState } from "react";

interface SkillProps {
  title: string;
}

const Skill = ({ title }: SkillProps) => {

  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const popSoundRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    setIsVisible(false);
    if (popSoundRef.current) {
      popSoundRef.current.currentTime = 0;
      popSoundRef.current.muted = false;
      popSoundRef.current
        .play()
        .catch((error) => {
          console.error("Autoplay blocked", error);
        });
      console.log("Sound played");
    }
    setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);

      setTimeout(() => setIsAnimating(false), 800);
    }, 1000);
  };
  return (
    <>
      <div
        className={`cursor-crosshair inline-block items-center justify-center px-[10px] py-[5px] md:px-[20px] md:py-[10px] border-colour2 border-[3px] rounded-full
         ${isVisible ? "" : "opacity-0 scale-80"}
         ${isAnimating ? "animate-popIn" : ""}
         transition-all duration-500 ease-in-out`}
        onMouseEnter={handleMouseEnter}
      >
        <p className={`text-[14px] md:text-[18px] text-colour2`}>{title}</p>
        <audio ref={popSoundRef} src="audio/bubble-pop.mp3" preload="auto" muted/>
      </div>
    </>
  );
};

export default Skill;
