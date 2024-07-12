"use client";

import { motion } from "framer-motion";

// Components
import { Button } from "@/components/ui/button";
import Coder from "@/components/ui/coder";
import Social from "@/components/ui/Social";

import { MdConnectWithoutContact } from "react-icons/md";
import { splitStringUsingRegex } from "@/lib/utils";

const intro = "Hello I'm";
const name = "Nicholas Lachhman";
const description =
  "Driven by passion for knowledge, I build seamless digital experiences while continually expanding my expertise in various programming languages and emerging technologies.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Home = () => {
  const introChars = splitStringUsingRegex(intro);
  const nameChars = splitStringUsingRegex(name);
  const descChars = splitStringUsingRegex(description);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left inline-block">
            <motion.span className="text-xl">Software Engineer</motion.span>
            <motion.h1
              className="h1"
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.1 }}
            >
              {introChars.map((char) => (
                <motion.span
                  key={char}
                  transition={{ duration: 0.25 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}{" "}
              <br />{" "}
              <span className="text-accent">
                {nameChars.map((char) => (
                  <motion.span
                    key={char}
                    transition={{ duration: 0.5 }}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            <motion.p
              className="max-w-[500px] mb-9"
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.015 }}
            >
              {descChars.map((char) => (
                <motion.span
                  key={char}
                  transition={{ duration: 0.35 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-accent"
              >
                <span>Contact Me</span>
                <MdConnectWithoutContact className="text-xl" />
              </Button>
              <div className="mb-0 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            {/* Animation */}
            <Coder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
