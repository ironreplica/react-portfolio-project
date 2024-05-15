"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
// import { preconnect } from "next/dist/server/app-render/entry-base";

const projectsData = [
  {
    id: 1,
    title: "PictoJS",
    description:
      "PictoJS is a PictoChat inspired messenging app. Built with NodeJS, EJS, and Socket.io.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ironreplica/ServerSide-Final-Project",
    previewUrl: "https://serverside-final-project.onrender.com/",
  },
  {
    id: 2,
    title: "Blood Moon",
    description:
      "This game is about a little guy trying to navigate through a mysterious world, to reach a mysterious door at the end of the level, as fast as possible of course. This was my first game jam! (PS aim with the mouse and hold left click to deal damage). ",
    image: "/images/projects/2.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "https://ironreplica.itch.io/blood-moon",
  },
  {
    id: 3,
    title: "Title",
    description: "Description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Title",
    description: "Description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Title",
    description: "Description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Title",
    description: "Description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
    <>
      <h2 className="text-center text-4xl font-bold text-lightest mt-4">
        My Projects
      </h2>
      <div className="text-lightest flex flex-row justify-center items-center gap-2 pt-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Games"
          isSelected={tag === "Games"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
