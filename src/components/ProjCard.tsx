import React from "react";
import Tool from "./Tool";

interface ProjCardProps {
  title: string;
  desc: string;
  tools: string[];
  link?: string;
}

const ProjCard = ({ title, desc, tools, link }: ProjCardProps) => {
  return (
    <div className="relative group w-fit">
      <div className="absolute inset-0 bg-colour2 rounded-[30px] z-0" />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex flex-col border-[4px] border-colour2 rounded-[30px] p-[30px] gap-[20px] transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 bg-background"
      >
        <h1 className="text-colour2 text-[24px] font-semibold">{title}</h1>
        <p className="text-colour2 text-[20px]">{desc}</p>
        <div className="flex flex-wrap gap-[20px] justify-around">
          {tools.map((tool, index) => (
            <Tool key={index} text={tool} />
          ))}
        </div>
      </a>
    </div>
  );
};

export default ProjCard;
