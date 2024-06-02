"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "2",
    postfix: "",
  },
  {
    metric: "Certifications",
    value: "2",
    postfix: "",
  },
  {
    metric: "Languages",
    value: "5",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "3",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className=" z-12 py-8 px-4 xl:gap-16 sm:py-16 xl:px-15 ">
      <div className=" flex flex-col sm:flex-row items-center justify-between z-20">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 rounded-full "
            >
              <h2 className="text-white text-4xl font-bold flex flex-row z-10">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-lightest text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <div className="border border-light border-t-0 border-l-0 border-r-0 z-10">
                <p className="z-10 text-light text-base">
                  {achievement.metric}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AchievementsSection;
