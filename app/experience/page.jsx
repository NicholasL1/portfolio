import schoolIcon from "@/public/assets/school.svg";
import workIcon from "@/public/assets/work.svg";

import Image from "next/image";

const timelineElements = [
  {
    id: 1,
    title: "Computer Science BSc",
    location: "Toronto, Ontario, CA",
    description: "Completed CS undergrad at York University",
    buttonText: "YorkU",
    link: "https://www.yorku.ca/",
    date: "2020-Present",
    icon: "school",
    color: "blue",
    tech: ["Java", "Python", "C", "SQL", "DSA"],
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    location: "Mississauga, Ontario",
    description: "Built Apollo GraphQL API with Node.js",
    buttonText: "GoEasy Ltd.",
    link: "https://www.goeasy.com/",
    date: "2022",
    icon: "work",
    color: "purple",
    tech: ["Next.js", "Node.js", "Express.js", "GraphQL", "Contentful"],
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    location: "Oakville, Ontario",
    description: "Maps API and TWN Severe Weather Events w/ TypeScript",
    buttonText: "TheWeatherNetwork",
    link: "https://www.theweathernetwork.com/en/maps/radar",
    date: "2023",
    icon: "work",
    color: "yellow",
    tech: ["TypeScript", "React.js", "Docker", "Golang", "Kubernetes"],
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    location: "New York, NY",
    description: "Building Kai AI platform with Firebase, Node.js, Next.js",
    buttonText: "Radical AI",
    link: "https://lab.radicalai.app/#projects",
    date: "2024-Present",
    icon: "work",
    color: "red",
    tech: ["Node.js", "Firebase", "Next.js", "Redux"],
  },
  {
    id: 5,
    title: "Developer",
    location: "Toronto, Ontario",
    description: "yMatchu - Backend",
    buttonText: "LBA",
    link: "https://lassondeblockchain.vercel.app/",
    date: "2023-present",
    icon: "work",
    color: "orange",
    tech: ["Python", "S3", "Springboot"],
  },
];

// Implemented Experience and education section,
// need to still made them alternate sides, update colors, add picture svgs for each
// and make them fade in and out like the landing page image
const Experience = ({ defaultColor }) => {
  return (
    <div>
      {timelineElements.map((element, index) => {
        const colors = [
          "bg-red-500",
          "bg-blue-500",
          "bg-yellow-500",
          "bg-purple-500",
          "bg-orange-500",
        ];

        const color = defaultColor || `bg-${element.color}-500`;
        const isEven = index % 2 === 0; // determines side for alternating

        return (
          <div
            key={element.id}
            className={`flex ${
              isEven ? "flex-row-reverse" : "flex-row"
            } m-4 w-full relative`}
          >
            <div
              className={`hidden items-start ${
                isEven ? "flex-row-reverse" : "flex-row"
              } w-44 pt-0.5 relative sm:flex`}
            >
              {/* // if needed, add text-gray-500 to classname here */}
              <div className={`w-4/5 ${isEven ? "ml-5" : ""} text-gray-500`}>
                {element.date}
              </div>{" "}
              <div
                className={`${color} w-px h-full ${
                  isEven ? "-translate-x-5" : "translate-x-5"
                } translate-y-10 opacity-30`}
              ></div>
              <Image
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-10 p-1 rounded-lg z-20`}
              />
              <div
                className={`${color} h-px w-72 ${
                  isEven ? "lg:-translate-x-40" : "lg:translate-x-40"
                } lg:absolute translate-y-5 opacity-30`}
              ></div>
            </div>
            <div
              className={`border border-accent dark:bg-[#1b2536] bg-[#e6edfa] rounded-lg px-8 py-4 text-center z-10 flex-1 ${
                isEven ? "lg:mr-28" : "lg:ml-28"
              }`}
            >
              <div className="text-xl font-semibold">{element.title}</div>
              <div className=" mb-6 sm:mb-8 sm:text-xs">
                {element.location}{" "}
                <span className="sm:hidden ">{element.date}</span>
              </div>
              <div className="mb-4 text-center">{element.description}</div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="dark:bg-gray-900 bg-gray-300 rounded-xl px-2 py-1 text-sm m-1"
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
                className={`${color} text-gray-950 dark:text-gray-50 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white dark:hover:text-gray-950`}
                href=""
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
