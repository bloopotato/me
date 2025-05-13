import React from "react";

interface EduCardProps {
  school: string;
  degree: string;
  date: string;
  desc?: string[];
}

const EduCard = ({ school, degree, date, desc }: EduCardProps) => {
  return (
    <div className="relative group w-fit">
    <div className="absolute inset-0 bg-colour2 rounded-[20px] z-0" />
    <div className="relative flex flex-col gap-[10px] p-[30px] min-w-[300px] bg-background border-[4px] border-colour2 rounded-[20px] transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
      <div className="flex flex-col lg:flex-row md:justify-between lg:gap-[20px] lg:items-center">
        <h1 className="text-[20px] lg:text-[24px] text-colour2 font-bold break-words whitespace-normal leading-tight">{school}</h1>
        <p className="text-[18px] lg:text-[20px] text-colour3 font-bold">{date}</p>
      </div>
      <h2 className="text-[16px] lg:text-[18px] text-colour1 font-semibold">{degree}</h2>
      {desc && (
        <ul className="text-[16px] text-colour2 list-disc ml-6">
          {desc.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default EduCard;
