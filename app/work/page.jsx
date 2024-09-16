import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx"; // Dot icon
import ProjectCarousel from "@/components/ui/project-carousel";
import projects from "@/public/projects";
import { filterSkills } from "@/lib/utils";

const Work = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const totalProjects = projects.length;

  const projectVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
      },
    }),
  };

  // Effect to handle responsive design
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setProjectsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(0);
      }
    };

    // Set initial state based on window width
    handleResize();

    // Add event listener to update state on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleCarouselNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselIndex]);

  // Handle functions for the project carousel
  const handleCarouselPrev = () => {
    const isFirstSlide = carouselIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : carouselIndex - 1;
    setCarouselIndex(newIndex);
  };

  const handleCarouselNext = () => {
    const isLastSlide = carouselIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : carouselIndex + 1;
    setCarouselIndex(newIndex);
  };

  // Handle function for project navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 2
        ? totalProjects - projectsPerPage
        : prevIndex - projectsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + projectsPerPage >= totalProjects
        ? 0
        : prevIndex + projectsPerPage
    );
  };

  // Dot selector logic
  const renderDots = () => {
    const maxDots = 5;
    let dots = [];

    // If the total number of projects is less than or equal to maxDots, show all dots
    if (totalProjects <= maxDots) {
      dots = projects.map((_, index) => (
        <RxDotFilled
          key={index}
          size={index === carouselIndex ? 24 : 16} // Larger for the selected, smaller for others
          className={`cursor-pointer transition-all duration-300 ${
            index === carouselIndex ? "text-blue-500" : "text-white"
          }`}
          onClick={() => setCarouselIndex(index)}
        />
      ));
    } else {
      // If totalProjects > maxDots, adjust the sliding behavior

      let start, end;

      if (carouselIndex <= 2) {
        // If the selected dot is near the start (first three projects), show the first few projects
        start = 0;
        end = maxDots - 1;
      } else if (carouselIndex >= totalProjects - 3) {
        // If the selected dot is near the end (last three projects), show the last few projects
        start = totalProjects - maxDots;
        end = totalProjects - 1;
      } else {
        // Otherwise, center the selected project in the middle of the dots
        start = carouselIndex - 2;
        end = carouselIndex + 2;
      }

      dots = projects.slice(start, end + 1).map((_, index) => {
        const actualIndex = start + index;
        return (
          <RxDotFilled
            key={actualIndex}
            size={actualIndex === carouselIndex ? 24 : 16} // Larger for the selected, smaller for others
            className={`cursor-pointer transition-all duration-300 ${
              actualIndex === carouselIndex ? "text-blue-500" : "text-white"
            }`}
            onClick={() => setCarouselIndex(actualIndex)}
          />
        );
      });
    }

    return dots;
  };

  return (
    <div className="w-full h-full relative">
      <h1 className="font-bold text-4xl sm:pb-8 md:pb-4">/work</h1>
      <h2 className="hidden md:block font-semibold text-gray-600 text-xl my-4 italic">
        Select a project to display:
      </h2>

      {/* Project Carousel */}
      <div className="relative w-full min-h-[70vh] overflow-hidden">
        <div
          className="flex min-h-[70vh] transition-transform duration-500"
          style={{
            transform: `translateX(-${carouselIndex * 100}%)`,
          }}
        >
          {projects.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-center bg-cover"
              style={{ width: "100%" }}
            >
              <ProjectCarousel
                title={slide.title}
                description={slide.des}
                image={slide.img}
                skillsList={slide.skills}
                github={slide.github}
                link={slide.link}
              />
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <div
          className="block absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/80 z-10"
          onClick={handleCarouselPrev}
        >
          <BsChevronCompactLeft size={30} />
        </div>

        {/* Right arrow */}
        <div
          className="block absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/80 z-10"
          onClick={handleCarouselNext}
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>

      {/* Dot selector */}
      <div className="flex justify-center mt-6 space-x-2">{renderDots()}</div>

      {/* Hidden project cards on small screens */}
      <div className="hidden md:flex relative items-center justify-center mt-10">
        {/* Left arrow for navigation */}
        <BsChevronCompactLeft
          onClick={handlePrev}
          className="absolute left-0 cursor-pointer text-4xl text-gray-500 hover:text-gray-700"
        />
        {/* Projects Container */}
        <div className="flex flex-col md:flex-row gap-8 p-4 items-center justify-center">
          {projects
            .slice(currentIndex, currentIndex + projectsPerPage)
            .map(({ id, title, des, img, skills, github, link }, index) => {
              // Use the filterSkills function to get filtered skills
              const filteredSkills = filterSkills(skills);

              return (
                <motion.div
                  key={id}
                  className="flex flex-col h-[15rem] sm:w-80 w-[50vw] rounded-2xl transition-all duration-300 hover:scale-110 hover:dark:bg-[#142038] hover:bg-[#b9bdc7] hover:shadow-lg cursor-pointer dark:bg-[#0f182b] bg-[#d3d6de]"
                  onClick={setCarouselIndex.bind(null, id - 1)}
                  variants={projectVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={id}
                >
                  {/* Title and icon */}
                  <div className="flex flex-row justify-between p-6">
                    <h1 className="w-full font-bold lg:text-2xl md:text-xl text-left">
                      {title}
                    </h1>
                    <MdWork className="text-4xl mr-1" />
                  </div>
                  {/* Description */}
                  <p className="font-light text-sm line-clamp-2 text-gray-600 mt-1 px-6 text-left flex-grow">
                    {des}
                  </p>
                  {/* Github and skill icons */}
                  <div className="flex items-center justify-between mt-3 mb-4 w-full px-6">
                    <div className="flex items-center gap-6">
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
                      </a>
                      <a href={link} target="_blank" rel="noopener noreferrer">
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
                </motion.div>
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
  );
};

export default Work;
