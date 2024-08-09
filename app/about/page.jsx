import React from "react";
import Robot from "@/components/ui/robot";
import { ChevronRight } from "lucide-react";
import { animate, motion } from "framer-motion";

const recentTech = [
  "TypeScript",
  "Springboot",
  "Next.js",
  "Firebase",
  "Python",
  "MongoDB",
];

const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.75,
      delay: 0.5,
    },
  },
};

const techVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8 + 0.25 * index,
      duration: 0.45,
    },
  }),
};

const page = () => {
  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-4xl pb-8">/ about</h1>
      <section>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Robot />
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="font-bold text-3xl mb-4">About Me</h1>
            <p className="text-base md:text-md mb-4">
              I am a jack of all trades software engineer with a passion for
              creating innovative solutions to complex problems. With experience
              spanning various technologies and industries, I thrive on the
              challenge of learning new skills and applying them in unique ways.
              Whether it's developing sleek user interfaces, optimizing backend
              systems, or exploring emerging tech, I’m dedicated to delivering
              high-quality, efficient, and impactful results.{" "}
            </p>
            <p className="text-base md:text-md pb-2">
              Some technologies I've used recently:
            </p>
            <div>
              <div className="flex flex-wrap">
                {recentTech.map((name, index) => (
                  <motion.div
                    key={index}
                    className="w-1/2 py-1  flex items-center"
                    variants={techVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                  >
                    <ChevronRight className="h-6 w-6 text-green-500 mr-2" />
                    {name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default page;
