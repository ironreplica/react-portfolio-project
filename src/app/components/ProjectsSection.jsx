"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, animate } from "framer-motion";
// import { preconnect } from "next/dist/server/app-render/entry-base";

const projectsData = [
  {
    id: 3,
    title: "Game Dev Diaries",
    description:
      "Game Dev Diaries is an innovative application tailored for game developers—a dynamic platform designed for sharing their game-building journey! Boasting a sleek, modern UI and robust backend functionalities including account management, seamless post creation, secure authentication, and personalized user profiles. Built with NextJS, Firebase and Tailwind",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ironreplica/game-dev-diaries",
  },
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
      "This game is about a little guy trying to navigate through a mysterious world, to reach a mysterious door at the end of the level, as fast as possible. ",
    image: "/images/projects/2.png",
    tag: ["All", "Games"],
    previewUrl: "https://ironreplica.itch.io/blood-moon",
  },

  // {
  //   id: 3,
  //   title: "Title",
  //   description: "Description",
  //   image: "/images/projects/1.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 4,
  //   title: "Title",
  //   description: "Description",
  //   image: "/images/projects/1.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "Title",
  //   description: "Description",
  //   image: "/images/projects/1.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Title",
  //   description: "Description",
  //   image: "/images/projects/1.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="z-10 relative mb-20">
      <h2
        // duration={{ 0.}}

        className="text-center text-4xl font-bold text-lightest mt-4 z-20 top-[40px]"
      >
        My Projects
      </h2>
      <div className="text-lightest flex flex-row justify-center items-center gap-2 pt-6 z-10">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 z-10 mt-5">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
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
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
