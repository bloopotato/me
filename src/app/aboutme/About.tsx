import React from "react";
import Skill from "@/components/Skill";
import Scramble from "@/components/Scramble";
import EduCard from "@/components/EduCard";
import FadeIn from "@/components/FadeIn";

const About = () => {
  const aboutText = `
    I'm an undergraduate at Nanyang Technological University pursuing a 
    double degree in Business Analytics and Computer Engineering. I enjoy 
    picking up new skills in software development and solving real-world 
    problems with the tech I learn. Whether it's coding, analysing data, 
    or just experimenting with new ideas, I’m always looking to learn 
    more and apply what I know in practical ways.`;

  const skills = [
    "JavaScript",
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
    "HTML & CSS",
    "Figma",
    "Java",
    "C",
    "SQL",
    "MongoDB",
    "Django",
    "Python",
    "R-Studio",
    "Tableau",
  ];

  const educationData = [
    {
      school: "Nanyang Technological University",
      degree:
        "Bachelor of Business (Business Analytics) and Bachelor of Engineering (Computer Engineering)",
      date: "2023 - Present",
      desc: ["CGPA: 4.57/5.00 and 4.52/5.00"],
    },
    {
      school: "Hwa Chong Junior College",
      degree: "GCE A-Level PCME and H3 Chem",
      date: "2021 - 2022",
    },
  ];

  return (
    <div
      id="about"
      className="flex flex-col w-full h-full pt-[100px] md:pt-[130px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-[20px] lg:gap-[50px]">
        <h1 className="relative text-title text-[48px] md:text-[96px] font-bold leading-none">
          About Me
          <span className="absolute top-0 left-0 h-full bg-colour2 animate-blockInOut" />
        </h1>
        <div className="flex flex-col gap-[25px]">
          <div className="flex items-center justify-between">
            <div className="text-[24px] md:text-[48px]">
              <Scramble input="Hi, I'm Yu Hui" fontWeight={700} />
            </div>
            <a
              className={`text-[16px] text-colour1 bg-background p-[10px] border-[3px] border-colour1 rounded-full
              hover:text-background hover:bg-colour1 transition-colors duration-500 ease-in-out`}
              href="/assets/NeoYuHui_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          <p className="text-[18px]">{aboutText}</p>
        </div>
      </div>
      {/* Skills */}
      <div className="flex flex-col py-[40px] gap-[20px]">
        <h2 className="text-[24px] md:text-[36px] font-bold">
          <Scramble input="Stuff I Know" />
        </h2>
        <div className="flex flex-wrap md:px-[40px] md:justify-between justify-center gap-x-[30px] gap-y-[20px]">
          {skills.map((skill, index) => (
            <Skill key={index} title={skill} />
          ))}
        </div>
      </div>
      {/* Education */}
      <div className="flex flex-col py-[40px] gap-[20px]">
        <h2 className="text-[24px] md:text-[36px] text-title font-bold">
        <Scramble input="Education"/>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[50px]">
          {educationData.map((edu, index) => (
            <FadeIn key={index} delay={index * 100}>
              <EduCard
                key={index}
                school={edu.school}
                degree={edu.degree}
                date={edu.date}
                desc={edu.desc}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
