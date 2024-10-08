"use client";

import schoolIcon from "@/public/assets/school.svg";
import workIcon from "@/public/assets/work.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import timelineElements from "@/public/timelineElements";

const expVariants = {
  initial: (isEven) => ({
    x: isEven ? "-15vw" : "15vw",
    opacity: 0,
  }),
  exit: { x: "15vw" },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeInOut" },
  },
};

const skillVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const timelineVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const Experience = ({ defaultColor }) => {
  return (
    <div className="w-full h-full pr-6">
      <h1 className="font-bold text-4xl pb-8">/experience</h1>
      {timelineElements.map((element, index) => {
        const colors = [
          "bg-red-500",
          "bg-blue-500",
          "bg-yellow-500",
          "bg-purple-500",
          "bg-orange-500",
        ];

        const color = defaultColor || `bg-${element.color}-500`;
        const isEven = index % 2 === 0; // determines side for alternating

        return (
          <div
            key={element.id} // Ensure each top-level div has a unique key
            className={`flex justify-between ${
              isEven ? "flex-row-reverse" : "flex-row"
            } m-4 w-full relative`}
          >
            <motion.div
              className={`hidden items-start ${
                isEven ? "flex-row-reverse" : "flex-row"
              } w-44 pt-0.5 relative sm:flex`}
              variants={timelineVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div
                className={`w-4/5 ${
                  isEven ? "ml-3" : ""
                } text-gray-500 text-sm`}
              >
                {element.date}
              </div>
              <div
                className={`${color} w-px h-full ${
                  isEven ? "-translate-x-5" : "translate-x-5"
                } translate-y-10 opacity-30`}
              ></div>
              <Image
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-10 p-1 rounded-lg z-20`}
              />
              <div
                className={`${color} h-px w-72 ${
                  isEven ? "lg:-translate-x-40" : "lg:translate-x-40"
                } lg:absolute translate-y-5 opacity-30`}
              ></div>
            </motion.div>
            <motion.div
              className={`inter-var dark:bg-[#0f182b] bg-[#d3d6de] rounded-lg px-8 py-4 text-center z-10 flex-1 ${
                isEven ? "lg:mr-56" : "lg:ml-56"
              } rounded-md shadow-md shadow-gray-800`}
              variants={expVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={isEven}
              whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
            >
              <div
                className={`text-xl ${
                  isEven ? "text-left" : "text-right rtl:ml-0"
                } font-extrabold`}
              >
                {element.title}
              </div>
              <div
                className={`mb-6 sm:mb-8  ${
                  isEven ? "text-left" : "text-right"
                } sm:text-xs`}
              >
                <p className="dark:text-blue-400 text-blue-600 font-bold">
                  {element.location}{" "}
                </p>
                <span className="sm:hidden ">{element.date}</span>
              </div>
              <div
                className={`mb-4 ${
                  isEven ? "text-left" : "text-right"
                } text-xs`}
              >
                {element.description.split("^").map(
                  (
                    line,
                    lineIndex // Use unique key here
                  ) => (
                    <div key={lineIndex}>
                      {" "}
                      {/* Change this to a div and add key */}
                      <li>{line}</li>
                      <br />
                    </div>
                  )
                )}
              </div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, techIndex) => {
                  // Use unique key for tech items
                  return (
                    <motion.span
                      key={techIndex} // Change to a unique key if possible
                      className="dark:bg-[#0272C3] bg-blue-400 rounded-xl px-2 py-1 text-sm m-1"
                      variants={skillVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={techIndex}
                    >
                      {tech}
                    </motion.span>
                  );
                })}
              </div>
              <Image
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-8 p-1 rounded-lg z-20 sm:hidden absolute ${
                  isEven ? "right-4" : "left-4"
                } top-4`} // Add mt-2 for small screens, remove on larger screens
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
