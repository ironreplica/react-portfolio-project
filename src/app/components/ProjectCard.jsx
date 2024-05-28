import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const RandomAngle = (min, max) => {
  var randomDeg = Math.floor(Math.random() * (max - min) + min); // Angle within range
  console.log(randomDeg);

  var newAngle = Math.random() < 0.5 ? randomDeg * -1 : randomDeg; // Chance for it to flip

  return parseInt(newAngle);
};

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  // Props
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <motion.div
        initial={{ rotateZ: 1 }}
        // initial={{ scale: 0.9 }}
        whileInView={{ scale: 0.9 }}
        // whileHover={{ scale: 1.1 }}
        whileHover={{ rotateZ: RandomAngle(5, 10), scale: 1 }}
        transition={{ duration: 0.3 }}
        className="h-40 md:h-72 rounded-t-xl flex-col relative group rounded-b-xl w-[100%]"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className=" bg-green absolute top-0 left-0 z-12"></div>
        <motion.div
          initial={{ opacity: 0 }}
          className="z-12 overlay items-center justify-center absolute top-0 left-0 w-[70%] h-full mx-auto bg-bg hidden group-hover:grid grid-rows-2 group-hover:bg-opcaity-50  transition-all duration-500"
        >
          <div className="text-center  pts-5 lock my-auto justify-end">
            <h5 className="text-xl font-semibold text-cenater">{title}</h5>

            <p>{description}</p>
          </div>
          <div className=" flex  justify-center">
            <Link
              href={gitUrl != null ? gitUrl : "#"} // If there is a gitUrl, show it
              className={
                gitUrl != null
                  ? "h-14 w-14 mr-2 border-2 relative rounded-full border-light hover:border-lightest group/link"
                  : "hidden"
              }
            >
              <CodeBracketIcon className="h-10 w-10 text-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-lightest" />
            </Link>
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-light hover:border-lightest group/link"
            >
              <EyeIcon className="h-10 w-10 text-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-lightest" />
            </Link>
          </div>
        </motion.div>
        {/* <div className="text-lightest w-auto rounded-b-xl mt-3 align-bottom bg-bg py-6 px-4 opacity-90">
          <p className="text-light"></p>
        </div> */}
      </motion.div>
    </div>
  );
};

export default ProjectCard;
