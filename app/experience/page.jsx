import schoolIcon from "@/public/assets/school.svg";
import workIcon from "@/public/assets/work.svg";

import Image from "next/image";

const timelineElements = [
  {
    id: 1,
    title: "Graduated from University",
    location: "City1, State1",
    description: "Completed my degree in Computer Science",
    buttonText: "Details",
    date: "2014-2018",
    icon: "school",
    color: "blue",
    tech: ["JavaScript", "HTML", "CSS", "Java"],
  },
  {
    id: 2,
    title: "Software Developer Internship",
    location: "City2, State2",
    description: "Worked on web development projects",
    buttonText: "Details",
    date: "2018-2019",
    icon: "work",
    color: "purple",
    tech: ["JavaScript", "React", "Node.js", "SQL"],
  },
  {
    id: 3,
    title: "Front-end Developer Job",
    location: "City3, State3",
    description: "Joined a tech company as a front-end developer",
    buttonText: "Details",
    date: "2019-2021",
    icon: "work",
    color: "yellow",
    tech: ["React", "HTML", "CSS", "JavaScript", "Angular"],
  },
  {
    id: 4,
    title: "Back-end Developer Job",
    location: "City4, State4",
    description: "Transitioned to back-end development role",
    buttonText: "Details",
    date: "2021-2023",
    icon: "work",
    color: "red",
    tech: ["Node.js", "JavaScript", "SQL", "Python"],
  },
  {
    id: 5,
    title: "Started Freelancing",
    location: "City5, State5",
    description: "Began working as a freelance developer",
    buttonText: "Details",
    date: "2023-present",
    icon: "work",
    color: "orange",
    tech: ["JavaScript", "React", "HTML", "CSS", "Python"],
  },
];

// Implemented Experience and education section,
// need to still made them alternate sides, update colors, add picture svgs for each
// and make them fade in and out like the landing page image
const Experience = ({ defaultColor }) => {
  return (
    <div>
      {timelineElements.map((element) => {
        const colors = [
          "bg-red-500",
          "bg-blue-500",
          "bg-yellow-500",
          "bg-purple-500",
          "bg-orange-500",
        ];

        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div key={element.id} className="flex m-4 relative">
            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
              {/* // if needed, add text-gray-500 to classname here */}
              <div className="w-4/5 text-gray-500">{element.date}</div>{" "}
              <div
                className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
              ></div>
              <Image
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-10 p-1 rounded-lg z-20`}
              />
              <div
                className={`${color} h-px w-8 translate-y-5 opacity-30`}
              ></div>
            </div>
            <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96">
              <div className="text-xl font-medium">{element.title}</div>
              <div className=" mb-6 sm:mb-8 sm:text-xs">
                {element.location}{" "}
                <span className="sm:hidden ">{element.date}</span>
              </div>
              <div className="mb-4 text-left">{element.description}</div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <Image
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
              />
              <a
                className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`}
              >
                {element.buttonText}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
