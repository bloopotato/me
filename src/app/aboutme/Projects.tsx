import React from "react";
import ProjCard from "@/components/ProjCard";
import FadeIn from "@/components/FadeIn";
import Scramble from "@/components/Scramble";

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      desc: "Personal website built with React and Tailwind CSS to showcase my projects, skills, and experiences.",
      link: "https://github.com/bloopotato/me",
      tools: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      title: "BTO Management System",
      desc: "A command-line application built in Java to manage Build-To-Order (BTO) housing applications, approvals, and enquiries for different user roles.",
      link: "https://github.com/bloopotato/SC2002-BTO-Project",
      tools: ["Java"],
    },
    {
      title: "AI Healthcare Assistant",
      desc: "A mobile application featuring a chatbot assistant designed to help users manage their health and wellness. (Work in progress)",
      link: "https://github.com/bloopotato/binary-babes",
      tools: ["React Native", "TypeScript", "Django", "Python", "Rest API"],
    },
  ];
  return (
    <div
      id="projects"
      className="flex flex-col w-full h-full gap-[20px] py-[40px]"
    >
      <p className="text-[48px] md:text-[64px] text-title font-bold">
        <Scramble input="Projects" />
      </p>
      <div className="columns-1 sm:columns-2 gap-x-[40px] space-y-[30px]">
        {projectData.map((project, index) => (
          <FadeIn key={index} delay={index * 100}>
            <div className="break-inside-avoid mb-[30px]">
              <ProjCard
                key={index}
                title={project.title}
                desc={project.desc}
                tools={project.tools}
                link={project.link}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Projects;
