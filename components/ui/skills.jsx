// To add another skill, find the svg of the logo of that technology and put it into figma, size it to w: 75 h:75
// Select the element -> right click -> plugins -> builder.io -> generate code
// Once you get the img element add it here, surround it with an a tag with link to documentation, add target="_blank" to open in new tag
// make sure to set the img alt to the skills name and className to 'max-w-none
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import skills from "@/public/skills";

export const Skills = () => {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 1, ease: "easeInOut" },
        }}
        className="flex space-x-16 overflow-hidden group"
      >
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {skills.map((skill, index) => (
            <Tooltip key={index} className="overflow-visible">
              <TooltipTrigger asChild>
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="max-w-none"
                    loading="lazy"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" align="top">
                <p>{skill.alt}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {skills.map((skill, index) => (
            <Tooltip key={index + skills.length}>
              <TooltipTrigger asChild>
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="max-w-none"
                    loading="lazy"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" align="top">
                <p>{skill.alt}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </TooltipProvider>
  );
};
