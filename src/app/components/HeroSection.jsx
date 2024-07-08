"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duraction: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left z-10"
        >
          <h1 className="text-lightest mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-custom1 to-custom2">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <div className="h-[90px] w-fit flex mx-auto my-auto md:mx-0 md:my-0">
              <TypeAnimation
                sequence={[
                  "Trevor",
                  2000,
                  "a Web Developer",
                  1500,
                  "a Critical Thinker",
                  1500,
                  "a Tech Enthusiast",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-light text-base sm:text-lg mb-6 lg:text-xl z-10">
            Welcome to my Portfolio! Feel free to look around, or contact me!
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-custom1 to-custom2 hover:bg-light text-dark">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-custom1 to-custom2 hover:bg-slate-800 text-lightest mt-3">
              <span className="block bg-dark hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ scaleY: -1, scale: 0.25 }}
            animate={{ scaleY: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-dark w-[250px] h-[250px] lg:w-[370px] lg:h-[370px] relative z-10"
          >
            <Image
              src="/images/hero-pic.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-auto"
              width={300}
              height={0}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
