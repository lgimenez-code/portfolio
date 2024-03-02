"use client"
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion } from "framer-motion";

const listSkills = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2">
        <li className="flex">
          <Image src="/javascript-icon.svg" width={20} height={20} alt="js icon" />
          <label className="ml-2">JavaScript</label>
        </li>
        <li className="flex mt-1">
          <Image src="/react-icon.svg" width={20} height={20} alt="react icon" />
          <label className="ml-2">React</label>
        </li>
        <li className="flex mt-1">
          <Image src="/vue-icon.svg" width={20} height={20} alt="vue icon" />
          <label className="ml-2">Vue</label>
        </li>
        <li className="flex mt-1">
          <Image src="/database-icon.png" width={20} height={20} alt="database icon" />
          <label className="ml-2">SQL/Oracle</label>
        </li>
        <li className="flex mt-1">
          <Image src="/csharp-icon.png" width={20} height={20} alt="csharp icon" />
          <label className="ml-2">C# .Net</label>
        </li>
        <li className="flex mt-1">
          <Image src="/figma-icon.png" width={20} height={20} alt="figma icon" />
          <label className="ml-2">Figma</label>
        </li>
        <li className="flex mt-1">
          <Image src="/postman-icon.png" width={20} height={20} alt="postman icon" />
          <label className="ml-2">Postman</label>
        </li>
        <li className="flex mt-1">
          <Image src="/cypress-icon.png" width={20} height={20} alt="cypress icon" className="bg-white rounded-full" />
          <label className="ml-2">Cypress Automation</label>
        </li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2">
        <li className="flex">
          <Image src="/utn-icon.ico" width={20} height={20} alt="utn icon" />
          <label className="ml-2">UTN - Facultad Regional Córdoba</label>
        </li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image className="rounded-xl" src="/images/laptop-blue.png" width={500} height={500} alt="laptop image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            With more than 5 years of experience, I have developed sites with best practices using Frontend and backend tools, prioritizing good performance.
            I am currently working with Javascript and Vue, and learning React among other tools demanded by the market.
            When I&apos;m not at the computer, I&apos;m usually drawing, reading or learning music.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}
            >
              {" "}
              Skills {" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab == "education"}
            >
              {" "}
              Education {" "}
            </TabButton>
          </div>
          <div className="mt-8">
            { listSkills.find((item) => item.id === tab).content }
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection;