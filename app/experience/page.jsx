import schoolIcon from "@/public/assets/school.svg";
import workIcon from "@/public/assets/school.svg";

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

const Experience = ({ defaultColor }) => {
  return (
    <div>
      {timelineElements.map((element) => {
        const color = defaultColor || `bg-${element.color}-500`;

        return <div key={element.id}>{element.title}</div>;
      })}
    </div>
  );
};

export default Resume;
