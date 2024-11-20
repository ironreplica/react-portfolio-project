"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";
import { animate, color, motion } from "framer-motion";
import { duration } from "moment";

const HeroSection = () => {
  const buttonVariants = {
    hover: {
      scale: 1.2,

      backgroundColor: ["#77bdfb", "#cea5fb"],

      // color: ["#161b22", "#ecf2f8"],
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duraction: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left z-10 "
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
                  "a Game Developer",
                  1500,
                  "a Learner",
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
            <motion.button
              variants={buttonVariants}
              initial={{
                scale: 1,
                backgroundColor: "#77bdfb",
                color: "#0d1117",
              }}
              whileHover={"hover"}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br font-bold"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="80"
                height="80"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg> */}
              <Link target="_blank" href="https://github.com/ironreplica/">
                <h1>GitHub</h1>
              </Link>
              {/* //! Add link to connnect section */}
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
                duration: 0.5,
                backgroundColor: ["#77bdfb", "#cea5fb"],
              }}
              initial={{ backgroundColor: "#77bdfb", scale: 1 }}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  hover:bg-slate-800 text-lightest mt-3"
            >
              <motion.span
                // initial={{ backgroundColor: "#161b22" }}
                // whileHover={{
                //   backgroundColor: ["#161b22", "#4b2f56"],
                //   duration: 0.9,
                // }}
                className="block bg-dark hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Contact Me
                {/* //! Download resume button */}
              </motion.span>
            </motion.button>
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
