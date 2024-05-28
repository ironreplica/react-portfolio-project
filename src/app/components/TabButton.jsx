import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  //Props
  const buttonClasses = active ? "text-lightest" : "text-light";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-lightest z-10 ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-custom2 mt-2 mr-3 z-10"
      ></motion.div>
    </button>
  );
};

export default TabButton;
