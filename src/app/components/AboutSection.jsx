"use client";
import React, { useTransition } from "react";
import Image from "next/image";
import { useState } from "react";
import TabButton from "./TabButton";
import ProjectsSection from "./ProjectsSection";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex">
        <ul className="list-disc pl-2">
          <li>Next.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>React</li>
          <li>Javascript</li>
          <li>Java</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>C#</li>
          <li>Unity</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Tooele Technical College : Software Development</li>
        <li>Stansbury High School : High School Diploma</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Codes To Success : Web Developer</li>
        <li>Unity Game Programmer</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Hobbiest Web Developer 2 years</li>
        <li>Hobbiest Unity Indie Game Developer 2 years</li>
        <li>Hobbiest Java Android Developer 1 years</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills"); // Default tab is skills
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    //! Dissapearing about section on small screens
    <section className="z-10" id="about">
      <div className="text-lightest z-10">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 sm:z-10">
          <Image
            src="/images/computer.jpg"
            width={500}
            height={500}
            className="z-10"
          />
          <div className="mt-4 md:mt-0 text-left flex-col h-full max-h-500 z-10">
            <h2 className="text-4xl font-bold text-lightest mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              Since I was eight years old, I have had a profound connection with
              computers. My fascination with video games led me to explore how
              they worked, fueling my interest in both art and math. During high
              school, I discovered the harmony between art and math through
              coding. I completed various coding courses, including Java,
              Android Development, Web Development, C#, and Unity Game
              Development. The summer before my senior year, I participated in
              an online web development bootcamp, which solidified my passion
              for coding. Since then, I have dedicated a significant portion of
              my free time to exploring code and learning new technologies.
              Currently, I am enrolled in the Software Development program at
              Tooele Technical College. I am committed to continuing my journey
              in software development, constantly learning and growing as a
              developer.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                Experience
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
