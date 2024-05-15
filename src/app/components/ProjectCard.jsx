import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  // Props
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl flex-col relative group rounded-b-xl"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className=" overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-bg bg-opacity-0 hidden group-hover:grid grid-rows-2 group-hover:bg-opacity-90 transition-all duration-500">
          <div className="text-center px-10 py-5 lock my-auto justify-end">
            <p>{description}</p>
          </div>
          <div className=" flex  justify-center">
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-light hover:border-lightest group/link"
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
        </div>
        <div className="text-lightest w-auto rounded-b-xl mt-3 align-bottom bg-bg py-6 px-4 opacity-90">
          <h5 className="text-xl font-semibold text-center">{title}</h5>
          <p className="text-light"></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
