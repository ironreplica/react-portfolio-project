import React from "react";
import NavLink from "./Navlink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links }) => {
  //* Pass in props
  return (
    <motion.div
      className="bg-none"
      initial={{ scaleX: 0, scaleY: 0.1 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.ul
        initial={{ opacity: 0, scale: 0, rotateX: 90 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        exit={{
          scale: 0,
          rotateX: 90,
          transition: { duration: 0.3, type: "tween" },
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.7,
        }}
        className="flex flex-col py-4 items-center z-10 bg-none"
      >
        {links.map((link, index) => (
          <li key={index} className="bg-none">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MenuOverlay;
