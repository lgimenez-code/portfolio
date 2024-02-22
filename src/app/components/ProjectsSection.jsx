"use client"
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Project 1 decription',
    // image: '/images/projects/1.png',
    image: 'https://picsum.photos/200',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Potography Portfolio Website',
    description: 'Project 2 decription',
    // image: '/images/projects/2.png',
    image: 'https://picsum.photos/300',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'E-commenrce Application',
    description: 'Project 3 decription',
    // image: '/images/projects/3.png',
    image: 'https://picsum.photos/502',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'React Firebase Template',
    description: 'Authentication and CRUD operations',
    // image: '/images/projects/4.png',
    image: 'https://picsum.photos/620',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Full-stack Roadmap',
    description: 'Project 5 decription',
    // image: '/images/projects/5.png',
    image: 'https://picsum.photos/630',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Calculator',
    description: 'Project 6 decription',
    // image: '/images/projects/6.png',
    image: 'https://picsum.photos/657',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section>
      <h2 className="text-center text-4xl font-bold tet-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={ handleTagChange }
          name="All"
          isSelected={tag == "All"}
        />
        <ProjectTag
          onClick={ handleTagChange }
          name="Web"
          isSelected={tag == "Web"}
        />
        <ProjectTag
          onClick={ handleTagChange }
          name="Mobile"
          isSelected={tag == "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {
          filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index* 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}

export default ProjectsSection