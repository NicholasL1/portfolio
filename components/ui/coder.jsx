"use client";

import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import Lottie from "lottie-react";
import { ThemeContext } from "@/app/context/Theme";
import codingBoyDark from "@/public/assets/coding-boy-dark.json";
import codingBoyLight from "@/public/assets/coding-boy-light.json";

const Coder = () => {
  const { darkMode } = useContext(ThemeContext);
  const [key, setKey] = useState(0); // State to force re-render
  const [codingBoy, setCodingBoy] = useState(
    darkMode ? codingBoyDark : codingBoyLight
  );

  useEffect(() => {
    setCodingBoy(darkMode ? codingBoyDark : codingBoyLight);
    setKey((prevKey) => prevKey + 1); // Update key to force re-render
  }, [darkMode]);

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.3, duration: 0.8, ease: "easeInOut" },
        }}
      >
        <Lottie
          key={key}
          animationData={codingBoy}
          loop={true}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Coder;
