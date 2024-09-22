"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import robot from "@/public/assets/robot.json";
import Lottie from "lottie-react";

const hiVariants = {
  initial: {
    opacity: 0,
    scale: 0.1,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 1.75,
      ease: "easeInOut",
    },
  },
};

const Robot = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        variants={hiVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Lottie animationData={robot} loop={true} className="object-contain" />
      </motion.div>
    </div>
  );
};

export default Robot;
