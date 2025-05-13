"use client";
import React, { useState, useEffect } from "react";
import { LuSunMedium, LuMoon } from "react-icons/lu";

const Toggle = () => {
  const [dark, setDark] = useState(true);

  // Set theme based on user preference
  const applyTheme = (theme: "dark" | "light") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Check for stored theme or system preference
  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (userTheme === "dark" || (!userTheme && systemPrefersDark)) {
      setDark(true);
      applyTheme("dark");
    } else {
      setDark(false);
      applyTheme("light");
    }
  }, []);

  const handleToggle = () => {
    const newTheme = dark ? "light" : "dark";
    setDark(!dark);
    applyTheme(newTheme);
  };

  return (
    <div className="flex items-center">
      <div className="hidden lg:flex min-w-[90px] h-[40px] bg-background border-[3px] border-navT rounded-full items-center relative box-border transition-theme">
        <button
          className={`${
            dark ? "left-[53px]" : "left-[3px]"
          } outline-none w-[28px] h-[28px] bg-navT cursor-pointer rounded-full border-none absolute transition-[left,background-color] duration-300 ease-in-out flex items-center justify-center`}
          onClick={handleToggle}
          role="switch"
          aria-checked={dark}
        />
      </div>
      <div className="flex lg:hidden p-[10px] bg-background text-navT justify-center items-center rounded-full border-[2px] border-navT cursor-pointer transition-theme">
        <button className="cursor-pointer text-[20px]" onClick={handleToggle}>{dark ? <LuMoon /> : <LuSunMedium />}</button>
      </div>
    </div>
  );
};

export default Toggle;
