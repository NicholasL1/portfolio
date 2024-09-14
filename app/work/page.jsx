import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCarousel from "@/components/ui/project-carousel";
import projects from "@/public/projects";
import { filterSkills } from "@/lib/utils"; // Import the filterSkills function

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3); // Default is 3 for large screens
  const totalProjects = projects.length;

  // Effect to handle responsive design
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setProjectsPerPage(3); // 3 cards for large and extra-large screens
      } else if (window.innerWidth >= 768) {
        setProjectsPerPage(2); // 2 cards for medium screens
      } else {
        setProjectsPerPage(1); // 1 card for small screens
      }
    };

    // Set initial state based on window width
    handleResize();

    // Add event listener to update state on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to go to the previous set of projects
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? totalProjects - projectsPerPage
        : prevIndex - projectsPerPage
    );
  };

  // Function to go to the next set of projects
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + projectsPerPage >= totalProjects
        ? 0
        : prevIndex + projectsPerPage
    );
  };

  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-4xl pb-8">/work</h1>
      <div>
        {/* Project Carousel */}
        <div className="w-full h-[70vh]">
          <ProjectCarousel
            title={projects[0].title}
            description={projects[0].des}
            image={projects[0].img}
            skillsList={projects[0].skills}
            github={projects[0].github}
            link={projects[0].link}
          />
        </div>
        <div className="relative flex items-center justify-center">
          {/* Left arrow for navigation */}
          <BsChevronCompactLeft
            onClick={handlePrev}
            className="absolute left-0 cursor-pointer text-4xl text-gray-500 hover:text-gray-700"
          />
          {/* Projects Container */}
          <div className="flex flex-col md:flex-row gap-8 p-4 mt-10 items-center justify-center">
            {projects
              .slice(currentIndex, currentIndex + projectsPerPage)
              .map(({ id, title, des, img, skills, github, link }) => {
                // Use the filterSkills function to get filtered skills
                const filteredSkills = filterSkills(skills);

                return (
                  <div
                    key={id}
                    className="flex flex-col items-center justify-center h-[25rem] sm:w-80 w-[50vw] rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer dark:bg-[#0f182b] bg-[#d3d6de]"
                  >
                    <div className="relative flex items-center justify-center sm:w-80 w-[80vw] overflow-hidden h-[25vh] mb-10 rounded-2xl">
                      <img
                        src={img}
                        alt={title}
                        className="z-10 absolute items-center justify-center h-auto max-w-full"
                      />
                    </div>
                    <h1 className="w-full font-bold lg:text-2xl md:text-xl text-left px-4">
                      {title}
                    </h1>
                    <p className="font-light text-sm line-clamp-2 text-gray-600 mt-2 px-4 text-left">
                      {des}
                    </p>
                    <div className="flex items-center justify-between mt-4 mb-3 w-full px-4">
                      <div className="flex items-center gap-6">
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
                        </a>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="text-2xl hover:text-gray-400 transition-colors" />
                        </a>
                      </div>
                      <div className="flex items-center gap-6">
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
                                className="w-6 h-6 object-cover"
                              />
                            </a>
                          ))
                        ) : (
                          <p>----</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* Right arrow for navigation */}
          <BsChevronCompactRight
            onClick={handleNext}
            className="absolute right-0 cursor-pointer text-4xl text-gray-500 hover:text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
