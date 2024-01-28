"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

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

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <div>
      <h2>My Projects</h2>
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsSection