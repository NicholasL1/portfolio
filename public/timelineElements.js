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
    title: "Data Engineer Intern",
    location: "Canada Life",
    description:
      "Assisting in developing, optimizing, and maintaining data pipelines to support business intelligence and analytics initiatives",
    buttonText: "LBA",
    link: "https://lassondeblockchain.vercel.app/",
    date: "09/24 - Pres.",
    icon: "work",
    color: "orange",
    tech: ["Python", "Azure", "SQL", "Databricks"],
  },
];

export default timelineElements;