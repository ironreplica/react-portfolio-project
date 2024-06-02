"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./Navlink";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, XmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { duration } from "moment";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
// https://www.youtube.com/watch?v=Kb1f5bvF6f4 2:18:00
const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-bg bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl text-lightest font-semibold"
        >
          Trevor Childs
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button // * On open navbar
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-light hover:text-lightest hover:border-lightest text-light"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button // * On close navbar
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-light hover:text-lightest hover:border-lightest text-light"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {navBarOpen && <MenuOverlay links={navLinks} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
