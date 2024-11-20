"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, animate } from "framer-motion";
// import { preconnect } from "next/dist/server/app-render/entry-base";
const featuredProjectSlideShow = [
  { image: "/images/projects/4.png" },
  { image: "/images/projects/5.png" },
  { image: "/images/projects/6.png" },
  { image: "/images/projects/7.png" },
  // { image: "/images/projects/4.png" },
  // { image: "/images/projects/4.png" },
];
const features = [
  { feature: "Snapping Base Building Mechanics" },
  { feature: "First Person Combat" },
  { feature: "Minecraft Inpsired Crafting System" },
  { feature: "Enemy Pathfinding AI" },
  { feature: "Drag and Drop Inventory" },
  { feature: "Player and map save system" },
  { feature: "Low-Poly Cartoon Art Style" },
];
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
  {
    id: 3,
    title: "Single Threat",
    description:
      "Duis in dolor exercitation eiusmod ullamco tempor ut id aliquip consectetur mollit laboris. Labore occaecat nisi incididunt proident. Consectetur eiusmod proident dolore commodo consectetur minim duis sunt commodo eiusmod pariatur minim ex.",
    image: "/images/projects/4.png",
    tag: ["All", "Games"],
    previewUrl: "#",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [previewImg, setPreviewImg] = useState(
    featuredProjectSlideShow[0].image
  );
  const [selected, setSelected] = useState(-1);
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

        className="lg:w-[20%] sm:w-[100%] py-2 mx-auto text-center text-4xl font-bold text-lightest mt-4 z-20 top-[40px] border border-b-2 border-l-0 border-r-0 border-t-0 border-light"
      >
        My Projects
      </h2>
      <h2 className="text-center text-3xl font-bold text-custom2 mt-4 z-20 top-[40px]">
        Latest Project
      </h2>
      <div className="flex flex-col justify-center bg-cardbg w-full max-w-[1400px] lg:px-4 mx-auto rounded-md my-3">
        <h1 className="text-center text-2xl md:text-3xl text-lightest py-4 font-bold">
          SINGLE THREAT
        </h1>
        <div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full md:w-3/5"
          >
            <div className="text-center flex justify-center flex-col mx-auto rounded">
              <Link href="#"></Link>
              <div className="flex flex-col w-full">
                <Image
                  src={previewImg}
                  width={900}
                  height={100}
                  className="w-full object-cover max-h-[500px] mx-auto transition-all duration-500 lg:px-3 sm:px-0"
                />
                <div className="flex flex-row flex-wrap justify-around md:justify-center mx-auto py-3 my-auto">
                  {featuredProjectSlideShow.map((e, i) => (
                    <Image
                      onClick={(event) => {
                        console.log(e.image);
                        setSelected(i);
                        setPreviewImg(e.image);
                      }}
                      className={` py-3 w-full max-w-[120px] lg:max-w-[180px] my-auto ${
                        selected === i
                          ? "border-2 border-light rounded-md transition-all duration-100"
                          : ""
                      }`}
                      src={e.image}
                      key={i}
                      width={300}
                      height={120}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="w-full md:w-2/5 flex flex-col px-3 pb-3">
            <Image
              src={"/images/thumbnail-single-threat.png"}
              className="hidden sm:block w-full object-cover max-h-[300px] md:max-h-[500px]"
              width={300}
              height={0}
            />
            <p className="w-full mx-auto py-3 text-sm md:text-base">
              Single Threat is a survival base building game focused on not
              getting killed. By who? Zombies of course. This project is built
              in Unity using C# and Unity Asset Store. This is a work in
              progress as it is a massive project. Currently there are no
              playable builds as the game is in a very early development stage.
            </p>
            <div className="w-full flex flex-col align-middle">
              <h3 className="font-semibold text-lg md:text-xl">Features</h3>
              <ul className="list-disc px-3 text-sm md:text-base">
                {features.map((e, i) => (
                  <li key={i}>{e.feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
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
