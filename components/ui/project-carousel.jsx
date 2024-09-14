import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import skills from "@/public/skills";
import { filterSkills } from "@/lib/utils";

export default function ProjectCarousel({
  title,
  description,
  image,
  skillsList,
  github,
  link,
}) {
  const filteredSkills = filterSkills(skillsList);
  return (
    <div
      className="w-full h-full flex flex-col items-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50 hover:scale-105"></div>

      {/* Content */}
      <div className="w-full flex flex-col text-white z-0 text-center justify-end pb-8 h-full">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm px-64 py-4">{description}</p>
        {/* Skill Icons */}
        <div className="flex flex-wrap justify-center gap-12">
          {" "}
          {/* Adjusted gap */}
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-10 h-10 object-cover"
                />
              </a>
            ))
          ) : (
            <p>---------------------</p>
          )}
        </div>
        {/* Icons for GitHub and Live Link */}
        <div className="flex justify-center space-x-6 pt-4 gap-4">
          {/* GitHub Icon */}
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
          </a>

          {/* Live Link Icon */}
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="text-2xl hover:text-gray-400 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
