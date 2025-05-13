"use client";
import Typewriter from "typewriter-effect";

interface TerminalProps {
  activeSection?: string;
}

const Terminal = ({ activeSection }: TerminalProps) => {
  const format =
    activeSection === "home" ? `${activeSection}` : `/aboutme/${activeSection}`;

  return (
    <div className="hidden lg:flex items-center text-center h-[40px] px-[15px] border-[2px] border-navT rounded-full font-[16px] text-navT font-consolas">
      <p className="inline-block whitespace-pre">
        bloopotato@bloopotato.io:~{' '}
      </p>
      <span className="inline-block">
        <Typewriter
          options={{
            strings: [`less ${format}.txt`],
            autoStart: true,
            cursor: "_",
            delay: 40,
            deleteSpeed: 100000,
          }}
        />
      </span>
    </div>
  );
};

export default Terminal;
