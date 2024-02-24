"use client"
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const listSkills = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2">
        <li className="flex">
          <img src="../../javascript-icon.svg" width="20px" height="20px"></img>
          <label className="ml-2">JavaScript</label>
        </li>
        <li className="flex mt-1">
          <img src="../../react-icon.svg" width="20px" height="20px"></img>
          <label className="ml-2">React</label>
        </li>
        <li className="flex mt-1">
          <img src="../../vue-icon.svg" width="20px" height="20px"></img>
          <label className="ml-2">Vue</label>
        </li>
        <li className="flex mt-1">
          <img src="../../database-icon.png" width="20px" height="20px"></img>
          <label className="ml-2">SQL/Oracle</label>
        </li>
        <li className="flex mt-1">
          <img src="../../csharp-icon.png" width="20px" height="20px"></img>
          <label className="ml-2">C# .Net</label>
        </li>
        <li className="flex mt-1">
          <img src="../../figma-icon.png" width="20px" height="20px"></img>
          <label className="ml-2">Figma</label>
        </li>
        <li className="flex mt-1">
          <img src="../../postman-icon.png" width="20px" height="20px"></img>
          <label className="ml-2">Postman</label>
        </li>
        <li className="flex mt-1">
          <img src="../../cypress-icon.png" width="20px" height="20px" className="bg-white rounded-full"></img>
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
          <img src="../../utn-icon.ico" width="20px"></img>
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
        <Image className="rounded-xl" src="/images/laptop-blue.png" width={500} height={500} alt=""/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iure maxime voluptatum, voluptas praesentium amet quos officiis tenetur incidunt reiciendis excepturi animi totam eveniet natus minima ipsum, aliquam repellat exercitationem.</p>
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