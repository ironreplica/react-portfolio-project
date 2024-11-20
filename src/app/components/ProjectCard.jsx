import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "./styles/ComponentStyles.modules.css";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const cardVariants = {
    hover: {
      scale: 1,
      transition: {
        type: "linear",
        duration: 0.9,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="project-card h-[450px] sm:h-[600px] w-[1000px] rounded-xl bg-bg border-transparent">
      <div
        className="card-image "
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px", // Adjust as needed
        }}
      ></div>
      <div className="card-content bg-bg p-4 h-full">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="mb-4 h-fit ">{description}</p>
        <div className="flex justify-center align-bottom">
          {gitUrl && (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-light hover:border-lightest group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-lightest" />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-light hover:border-lightest group/link"
            >
              <EyeIcon className="h-10 w-10 text-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-lightest" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
