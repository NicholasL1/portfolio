import { motion } from "framer-motion";
import { splitStringUsingRegex } from "@/lib/utils";

const intro = "Hello, I'm";
const name = "Nicholas Lachhman";
const description =
  "Driven by passion for knowledge, I build seamless digital experiences while continually expanding my expertise in various programming languages and emerging technologies.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const LandingPage = () => {
  const introChars = splitStringUsingRegex(intro);
  const nameChars = splitStringUsingRegex(name);
  const descChars = splitStringUsingRegex(description);

  return (
    <div>
      <motion.span
        className="text-xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.4, ease: "easeIn" },
        }}
      >
        Software Engineer
      </motion.span>
      <motion.h1
        className="h1"
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.05 }}
      >
        {introChars.map((char) => (
          <motion.span key={char} variants={charVariants}>
            {char}
          </motion.span>
        ))}{" "}
        <br />{" "}
        <span className="text-accent">
          {nameChars.map((char) => (
            <motion.span key={char} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </span>
      </motion.h1>
      <motion.p
        className="max-w-[500px] mb-9"
        whileInView="reveal"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.6, duration: 0.8, ease: "easeIn" },
        }}
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
    </div>
  );
};

export default LandingPage;
