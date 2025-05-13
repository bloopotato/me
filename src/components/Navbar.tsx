"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Terminal from "./Terminal";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState<string | undefined>();
  const [disableScrollSpy, setDisableScrollSpy] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // Set active section
  useEffect(() => {
    if (pathname === "/") {
      setActive("home");
    }
  }, [pathname]);

  const scrollToSection = (sectionId: string, offset = 100) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", `#${sectionId}`); // Update URL hash
    }
  }

  // Navbar navigation
  const handleNavClick = (sectionId: string) => {
    setActive(sectionId);
    setDisableScrollSpy(true); // Disable scroll when navigating
    if (pathname !== "/aboutme") {
      router.push("/aboutme");
      setTimeout(() => {
        scrollToSection(sectionId, 100);
      }, 200);
      setTimeout(() => setDisableScrollSpy(false), 800);
    } else {
      scrollToSection(sectionId, 100);
      setTimeout(() => setDisableScrollSpy(false), 600);
    }
  };

  const useScrollSpy = (sectionIDs: string[], disable: boolean) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!disable && entry.isIntersecting) {
              const id = entry.target.id; // ID of intersecting element
              setActive(id);
              history.replaceState(null, "", `#${id}`);
            }
          });
        },
        {
          threshold: 0.6, // Percentage of element visible
        }
      );
      sectionIDs.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el); // Observe each section
      });
      return () => observer.disconnect();
    }, [sectionIDs, disable]);
  };

  useScrollSpy(["about", "projects", "contact"], disableScrollSpy);

  return (
    <div className="flex flex-row flex-wrap bg-background border-[2px] border-navT items-center rounded-full justify-center p-[10px] transition-theme">
      <Terminal activeSection={active} />
      <nav className="flex items-center justify-center flex-col">
        <div
          className="lg:hidden flex justify-center items-center cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        >
          <RxHamburgerMenu className="text-navT text-[20px]" />
        </div>
        <ul
          className={`${
            openNav ? "flex" : "hidden"
          } flex-col items-center text-[18px] px-[10px] py-[10px] gap-[10px] lg:flex lg:flex-row lg:py-0 lg:gap-[20px]`}
        >
          <li className="min-w-[80px] py-[5px] text-center group">
            <button 
              onClick={() => {
                router.push("/");
                setOpenNav(false);
              }}
              className={`relative cursor-pointer hover:font-semibold hover:text-navA hover:-translate-y-[3px] transition-all duration-300
                ${active === "home" ? "text-navA font-semibold" : "text-navT"}
              `}
            >
              Home
              <span
                className={`absolute left-0 bottom-0 w-full h-[4px] bg-navA transform transform-gpu scale-x-0 
                group-hover:scale-x-100 transition-transform duration-300 origin-left
                ${active === "home" ? "scale-x-100" : ""}`}
              />
            </button>
          </li>
          <li className="min-w-[80px] py-[5px] text-center group">
            <button
              onClick={() => {
                handleNavClick("about");
                setOpenNav(false);
              }}
              className={`relative cursor-pointer hover:font-semibold hover:text-navA hover:-translate-y-[3px] transition-all duration-300
                ${active === "about" ? "text-navA font-semibold" : "text-navT"}
              `}
            >
              About
              <span
                className={`absolute left-0 bottom-0 w-full h-[4px] bg-navA transform transform-gpu scale-x-0 
                group-hover:scale-x-100 transition-transform duration-300 origin-left
                ${active === "about" ? "scale-x-100" : ""}`}
              />
            </button>
          </li>
          <li className="min-w-[80px] py-[5px] text-center group">
            <button
              onClick={() => {
                handleNavClick("projects");
                setOpenNav(false);
              }}
              className={`relative cursor-pointer hover:font-semibold hover:text-navA hover:-translate-y-[3px] transition-all duration-300
                ${
                  active === "projects"
                    ? "text-navA font-semibold"
                    : "text-navT"
                }
              `}
            >
              Projects
              <span
                className={`absolute left-0 bottom-0 w-full h-[4px] bg-navA transform transform-gpu scale-x-0 
                group-hover:scale-x-100 transition-transform duration-300 origin-left
                ${active === "projects" ? "scale-x-100" : ""}`}
              />
            </button>
          </li>
          <li className="min-w-[80px] py-[5px] text-center group">
            <button
              onClick={() => {
                handleNavClick("contact");
                setOpenNav(false);
              }}
              className={`relative cursor-pointer hover:font-semibold hover:text-navA hover:-translate-y-[3px] transition-all duration-300
                ${
                  active === "contact" ? "text-navA font-semibold" : "text-navT"
                }
              `}
            >
              Contact
              <span
                className={`absolute left-0 bottom-0 w-full h-[4px] bg-navA transform transform-gpu scale-x-0 
                group-hover:scale-x-100 transition-transform duration-300 origin-left
                ${active === "contact" ? "scale-x-100" : ""}`}
              />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
