import schoolIcon from "@/public/assets/school.svg";
import workIcon from "@/public/assets/work.svg";
import { motion } from "framer-motion";

import Image from "next/image";

const timelineElements = [
  {
    id: 1,
    title: "Computer Science BSc",
    location: "York University",
    description:
      "Took courses such as Software Design, Database Management, \nData Structures and Algorithms, Computer Network Protocols\n^Extra‑Curriculars: Student Support Application Developer Club,\n Google Developer Student Club, Lassonde Week Zero, Lassonde Blockchain Association",
    buttonText: "YorkU",
    link: "https://www.yorku.ca/",
    date: "09/20 - Pres.",
    icon: "school",
    color: "blue",
    tech: ["Java", "Python", "C", "SQL", "DSA"],
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    location: "GoEasy Ltd.",
    description:
      "Led development of Node/Express middleware mapping dynamic and static data from RDS\n and Contentful CMS to provide a GraphQL one-stop solution to mobile and front-end devs\nin order to significantly improve user experience\n^Developed responsive Next.js pages from scratch in the redesign of official website\n ^Collaborated with senior engineers and product management to establishing coding standards, documentation, testing, source control, and continuous integration",
    buttonText: "GoEasy Ltd.",
    link: "https://www.goeasy.com/",
    date: "05/22 - 12/22",
    icon: "work",
    color: "purple",
    tech: ["Next.js", "Node.js", "Express.js", "GraphQL", "Contentful"],
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    location: "Pelmorex Corporation",
    description:
      "Revamped proxy server by restructuring account and user controllers in TypeScript,\n resulting in large reduction in login failures amongst users\n ^I established authorization token sanitization for users accessing LoginRadius accounts\n to mitigate security vulnerabilities\n ^Implemented full-stack logic for temperature and wind layers on web app with massive scale (40 million monthly users)",
    buttonText: "TheWeatherNetwork",
    link: "https://www.theweathernetwork.com/en/maps/radar",
    date: "05/23 - 08/23",
    icon: "work",
    color: "yellow",
    tech: ["TypeScript", "React.js", "Docker", "Golang", "Kubernetes"],
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    location: "Radical AI",
    description:
      "Optimized user search queries by redesigning Firebase DB schema and Node.js functions, including indexing and caching to enhance performance^ Designed reusable and responsive Next.js components on large-scale AI platform, utilizing Redux to minimize redundant data fetching^ Defined Role-Based Access Control and Firestore security rules, and conducted vigorous testing with Apache JMeter so ensure smooth user experience",
    buttonText: "Radical AI",
    link: "https://lab.radicalai.app/#projects",
    date: "04/24 - 08/24",
    icon: "work",
    color: "red",
    tech: ["Node.js", "Firebase", "Next.js", "Redux"],
  },
  {
    id: 5,
    title: "Developer",
    location: "Lassonde Blockchain Association",
    description:
      "Lassonde Blockchain Association is focused on converting current applications from web2 to web3^ I will be working on the backend of yMatchu, a room rental service allowing students to find comfortable living spaces",
    buttonText: "LBA",
    link: "https://lassondeblockchain.vercel.app/",
    date: "08/24 - Pres.",
    icon: "work",
    color: "orange",
    tech: ["Python", "S3", "Springboot"],
  },
];

const expVariants = {
  initial: (isEven) => ({
    x: isEven ? "-15vw" : "15vw",
    opacity: 0,
  }),
  exit: { x: "15vw" },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeInOut" },
  },
};

const skillVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const timelineVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

// Implemented Experience and education section,
// need to still made them alternate sides, update colors, add picture svgs for each
// and make them fade in and out like the landing page image
const Experience = ({ defaultColor }) => {
  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-4xl pb-8">myExperience</h1>
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
            className={`flex justify-between ${
              isEven ? "flex-row-reverse" : "flex-row"
            } m-4 w-full relative`}
          >
            <motion.div
              className={`hidden items-start ${
                isEven ? "flex-row-reverse" : "flex-row"
              } w-44 pt-0.5 relative sm:flex`}
              variants={timelineVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* // if needed, add text-gray-500 to classname here */}
              <div
                className={`w-4/5 ${
                  isEven ? "ml-3" : ""
                } text-gray-500 text-sm`}
              >
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
            </motion.div>
            <motion.div
              className={`inter-var dark:bg-dark bg-light rounded-lg px-8 py-4 text-center z-10 flex-1 ${
                isEven ? "lg:mr-56" : "lg:ml-56"
              } rounded-md shadow-md shadow-gray-800`}
              variants={expVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={isEven}
              whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
            >
              <div
                className={`text-xl ${
                  isEven ? "text-left" : "text-right"
                } font-extrabold`}
              >
                {element.title}
              </div>
              <div
                className={`mb-6 sm:mb-8  ${
                  isEven ? "text-left" : "text-right"
                } sm:text-xs`}
              >
                <p className="dark:text-blue-400 text-blue-600 font-bold">
                  {element.location}{" "}
                </p>
                <span className="sm:hidden ">{element.date}</span>
              </div>
              <div
                className={`mb-4 ${
                  isEven ? "text-left" : "text-right"
                } text-xs`}
              >
                {element.description.split("^").map((line, index) => (
                  <>
                    <li key={index}>{line}</li>
                    <br />
                  </>
                ))}
              </div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, index) => {
                  return (
                    <motion.span
                      key={index}
                      className="dark:bg-[#0272C3] bg-blue-400 rounded-xl px-2 py-1 text-sm m-1"
                      variants={skillVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                    >
                      {tech}
                    </motion.span>
                  );
                })}
              </div>
              <Image
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-8 p-1 rounded-lg z-20 absolute ${
                  isEven ? "right-4" : "left-4"
                } top-4 sm:hidden`}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
