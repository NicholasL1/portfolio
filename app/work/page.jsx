const projects = [
  {
    id: 1,
    title: "StayFit",
    Description:
      "A fitness web application intended to provide users with the tools to excel on their fitness journey.",
    img: "@/public/assets/stayfit.png",
    skills: "React, S3, Springboot, MUI,",
    github: "https://github.com/NicholasL1/StayFit-WebApp",
    link: "https://stayfit-app.netlify.app/",
  },
  {
    id: 2,
    title: "PlanIt",
    Description:
      "PlanIt is an online, free, and easy-to-use project management tool.",
    img: "@/public/assets/planit.png",
    skills: "MongoDB, Express, React, Node, Redux, Node",
    github: "https://github.com/NicholasL1/Planit-Project-Management-System",
    link: "https://planit-48af813661a2.herokuapp.com/",
  },
  {
    id: 3,
    title: "SamePage",
    Description:
      "A social media platform that allows users to connect with each other, find new books, and share their thoughts.",
    img: "@/public/assets/samepage.png",
    skills: "Java, MySQL, JUnit, Docker",
    github: "https://github.com/NicholasL1/SamePage",
    link: "",
  },
  {
    id: 4,
    title: "Resource Manager",
    Description:
      "A replication of an operating system's resource manager capable of using an optimistic managing algorithm and banker's algorithm.",
    img: "@/public/assets/resourcemanager.png",
    skills: "C",
    github: "https://github.com/NicholasL1/Resource-Manager",
    link: "",
  },
  {
    id: 5,
    title: "QuantumBot-Chatbot",
    Description: "An online chat web application.",
    img: "@/public/assets/quantumbot.png",
    skills: "Next.js, Node.js, Express, Firebase, Ant-Design",
    github: "https://github.com/NicholasL1/QuantumBot-Core",
    link: "https://quantum-bot-core.vercel.app/",
  },
  {
    id: 6,
    title: "Employee Management System",
    Description: "A system used to manage current employee profiles.",
    img: "@/public/assets/employeemanagement.png",
    skills: "C#, ASP.NET, SQL Server,",
    github: "https://github.com/NicholasL1/EmployeeManagementApp",
    link: "",
  },
  {
    id: 7,
    title: "Investigating Student Engagement",
    Description:
      "Using pandas, numpy, matplotlib, and seaborn to investigate the factors that affect student engagement across America with respect to locale and ethnicity.",
    img: "@/public/assets/investigate.png",
    skills: "Python, Pandas, Numpy, Matplotlib, Seaborn",
    github: "https://github.com/NicholasL1/Investigating-Student-Engagement",
    link: "https://github.com/NicholasL1/Investigating-Student-Engagement/blob/main/Investigating_Student_Engagement.ipynb/",
  },
  {
    id: 8,
    title: "SearchMyPDF",
    Description:
      "A multi-lingual AI PDF search app built with Python, Cohere, LangChain, and Bubble",
    img: "@/public/assets/search.png",
    skills: "Python, Cohere, LangChain, Bubble",
    github: "https://github.com/NicholasL1/SearchMyPDF",
    link: "",
  },
  {
    id: 9,
    title: "CosmoChat",
    Description: "An AI chatbot with Rex, an AI powered with OpenAI",
    img: "@/public/assets/cosmochat.png",
    skills: "Next.js, Node.js, OpenAI",
    github: "https://github.com/NicholasL1/CosmoChat-UI",
    link: "",
  },
  {
    id: 10,
    title: "FCFS-RR-SJRF-Scheduler",
    Description:
      "A operating system's scheduler with First Come First Served, Round Robin, and Short Job Remaining First algorithms.",
    img: "@/public/assets/scheduler.png",
    skills: "C",
    github: "https://github.com/NicholasL1/FCFS-RR-SJRF-Scheduling",
    link: "",
  },
  {
    id: 11,
    title: "Meals That Care",
    Description:
      "A web application that will match the user with the closest food bank in their area that accepts a certain donation.",
    img: "@/public/assets/mnealsthatcare.png",
    skills: "Javascript, HTML, CSS",
    github: "https://github.com/NicholasL1/Meals-that-Care",
    link: "https://thanushanp.github.io/Meals-that-Care/",
  },
  {
    id: 12,
    title: "Weather App",
    Description:
      "A weather application allowing users to find weather data from any location in the world.",
    img: "@/public/assets/weather.png",
    skills: "Python, Flask, OpenWeatherMap API",
    github: "https://github.com/NicholasL1/Weather-App",
    link: "https://nicholasl1.pythonanywhere.com/",
  },
];

const Work = () => {
  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-4xl pb-8">/ projects</h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project) => (
          <div>{project.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Work;
