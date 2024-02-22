"use client"
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2">
        <li className="flex">
          <img src="../../javascript-icon.svg" width="20px" height="20px"></img>
          <label class="ml-2">JavaScript</label>
        </li>
        <li className="flex">
          <img src="../../react-icon.svg" width="20px" height="20px"></img>
          <label class="ml-2">React</label>
        </li>
        <li className="flex">
          <img src="../../vue-icon.svg" width="20px" height="20px"></img>
          <label class="ml-2">Vue</label>
        </li>
        <li className="flex">
          <img src="../../database-icon.png" width="20px" height="20px"></img>
          <label class="ml-2">SQL/Oracle</label>
        </li>
        <li className="flex">
          <img src="../../csharp-icon.png" width="20px" height="20px"></img>
          <label class="ml-2">C# .Net</label>
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
          <label class="ml-2">UTN - Facultad Regional Córdoba</label>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
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
            { TAB_DATA.find((item) => item.id === tab).content }
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;