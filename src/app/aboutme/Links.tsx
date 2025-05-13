import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Links = () => {
  return (
    <div className="flex gap-[30px] p-[40px] justify-center text-[40px] text-colour2">
      <div className="flex flex-col justify-center items-center group relative">
        <div className="flex flex-col items-center absolute bottom-[60px] opacity-0 translate-y-[40px] translate-x-[15px] rotate-45 group-hover:opacity-100 group-hover:translate-y-[20px] group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-300">
          <span className="bg-colour2 text-background text-[14px] px-[10px] py-[5px] rounded-full">
            GitHub
          </span>
          <span className="h-0 w-0 border-r-[8px] border-l-[8px] border-t-[10px] border-t-colour2 border-l-transparent border-r-transparent" />
        </div>
        <a
          title="GitHub"
          href="https://github.com/bloopotato"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[40px] text-colour2"
        >
          <IoLogoGithub className="transition-transform duration-500 animate-spinfast" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center group relative">
        <div className="flex flex-col items-center absolute bottom-[60px] opacity-0 translate-y-[40px] translate-x-[15px] rotate-45 group-hover:opacity-100 group-hover:translate-y-[20px] group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-300">
          <span className="bg-colour2 text-background text-[14px] px-[10px] py-[5px] rounded-full">
            LinkedIn
          </span>
          <span className="h-0 w-0 border-r-[8px] border-l-[8px] border-t-[10px] border-t-colour2 border-l-transparent border-r-transparent" />
        </div>
        <a
          title="GitHub"
          href="https://www.linkedin.com/in/yu-hui-neo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[40px] text-colour2"
        >
          <FaLinkedin className="transition-transform duration-500 animate-spinfast" />
        </a>
      </div>
    </div>
  );
};

export default Links;
