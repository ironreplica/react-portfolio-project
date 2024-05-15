import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  // props
  const buttonStyles = isSelected
    ? "text-lightest border-custom2"
    : "text-light border-light hover:border-lightest ";
  return (
    <button
      onClick={() => onClick(name)}
      className={` ${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
