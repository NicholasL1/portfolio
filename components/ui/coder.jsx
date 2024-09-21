import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "@/app/context/Theme";
import codingBoyDark from "@/public/assets/coding-boy-dark.json";
import codingBoyLight from "@/public/assets/coding-boy-light.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Coder = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isClient, setIsClient] = useState(false);
  const [codingBoy, setCodingBoy] = useState(codingBoyLight);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setCodingBoy(darkMode ? codingBoyDark : codingBoyLight);
    }
  }, [darkMode, isClient]);

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

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
          animationData={codingBoy}
          loop={true}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Coder;
