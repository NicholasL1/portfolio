import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Social from "@/components/ui/social";
import { MdConnectWithoutContact } from "react-icons/md";

const Interact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.75, duration: 0.25, ease: "easeIn" },
      }}
      className="flex flex-col xl:flex-row items-center gap-8"
    >
      <a href="#contact">
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2 border border-accent"
        >
          <span>Say hello!</span>
          <MdConnectWithoutContact className="text-xl" />
        </Button>
      </a>
      <div className="mb-8 xl:mb-0">
        <Social
          containerStyles="flex gap-6"
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        />
      </div>
    </motion.div>
  );
};

export default Interact;
