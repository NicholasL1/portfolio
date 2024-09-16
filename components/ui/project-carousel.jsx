import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
      className="w-full min-h-[70vh] flex flex-col justify-between bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center p-8 text-center">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-white text-sm sm:px-12 lg:px-24 py-4">
          {description}
        </p>

        {/* Skill Icons */}
        <div className="flex flex-wrap justify-center gap-6 py-4">
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
            <p className="text-white">No skills available</p>
          )}
        </div>

        {/* Icons for GitHub and Live Link */}
        <div className="flex justify-center space-x-6 pt-4">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-white hover:text-gray-400 transition-colors" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="text-2xl text-white hover:text-gray-400 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
