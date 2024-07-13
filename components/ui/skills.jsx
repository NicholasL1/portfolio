// To add another skill, find the svg of the logo of that technology and put it into figma, size it to w: 75 h:75
// Select the element -> right click -> plugins -> builder.io -> generate code
// Once you get the img element add it here, surround it with an a tag with link to documentation, add target="_blank" to open in new tag
// make sure to set the img alt to the skills name and className to 'max-w-none
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  {
    link: "https://react.dev/blog/2023/03/16/introducing-react-dev",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa22f6d691d3e4e7137395fe27d3b2987008c9d20df6f4968d8bff9814be06f9?",
    alt: "React.js",
  },
  {
    link: "https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9662158570dfdb643119b1d34d3782be8501d7f669d015e730735fd94aba905?",
    alt: "Java",
  },
  {
    link: "https://docs.python.org/3/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/939689a504631ea071754b06f308dcbfcae97c507040a8a326ba82e2132bb692?",
    alt: "Python",
  },
  {
    link: "https://nextjs.org/docs",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/15a4e9a7217f9928ba41f3a07a1d2622d300273ac5ba26942487525ce18a69e6?",
    alt: "Next.js",
  },
  {
    link: "https://nodejs.org/docs/latest/api/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/16142d7c7bba9265f47b52277caab1294d7d2d0337fd6d45c887eaebea38314c?",
    alt: "Node.js",
  },
  {
    link: "https://graphql.org/learn/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfda561161b7e77efdc646e59f3c578002c7a14c11a0e91b650cefa0840b50fa?",
    alt: "GraphQL",
  },
  {
    link: "https://flask.palletsprojects.com/en/3.0.x/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b72f454d9b3399a1825aaba261dd5dbdd0206646f2779b74f39cdd0768223731?",
    alt: "Flask",
  },
  {
    link: "https://www.postgresql.org/docs/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef36ab48ad3eedcbe279a0c027127e0337d5b8e7b36d0061e6fea16c1f068a4b?",
    alt: "PostgreSQL",
  },
  {
    link: "https://expressjs.com/en/api.html",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6cf766f4dc7d0eefa653dc9dccf206c5d31c7221afd17bd0a8af0f727902aec?",
    alt: "Express",
  },
  {
    link: "https://www.gatsbyjs.com/docs/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c582460f91e1a0e0b3a24196d4f4d5741cdef1d738b8bbf41d928eefadf164e?",
    alt: "Gatsby.js",
  },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6d9a7dd6a4923ff85e59d77c0f00afe2d4da7062ed4fee2382c6243fcfaf1f6?",
    alt: "Javascript",
  },
  {
    link: "https://docs.docker.com/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/613e4bcc20c4cdd88108154375baf66549a8a6cd3854b3369c7b51d9559ffaeb?",
    alt: "Docker",
  },
  {
    link: "https://www.jenkins.io/doc/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/622fe2919bc584145ce352093f022d0322d1d6da0c02f37b930dc2dba7d6936f?",
    alt: "Jenkins",
  },
  {
    link: "https://www.mongodb.com/docs/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c076f86dbab3afc3d2f5fa7b1d867e3554434ff963384c986505219d4bd5f068?",
    alt: "MongoDB",
  },
  {
    link: "https://firebase.google.com/docs",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/03b9428674c8aa18f0c77ade7d04b6c2e657bddb978e8882badc6ab852fb4c77?",
    alt: "Firebase",
  },
  {
    link: "https://www.typescriptlang.org/docs/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b100358f00b79dcfe85e37a5b4c8a5ef0ac74937a438b7ec7afee9f4166fd3d?",
    alt: "Typescript",
  },
  {
    link: "https://docs.aws.amazon.com/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3086cb09afb514778bc9fa20aacc9610fa30e97433b55a6622604a744dc08e92?",
    alt: "AWS",
  },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/925cf9508c118cd3f723a330187893ccb0d1878e7f670eaacb426676f87aaabf?",
    alt: "HTML5",
  },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cac000ee15d832da5cfb1e66c083cef72e49dea449f9c485e08e16ca2213e50?",
    alt: "CSS3",
  },
  {
    link: "https://devdocs.io/c/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9d79300a6527c6a35d26e50b63b93dd0b7af2331d94213466062c84fa0deed3?",
    alt: "C",
  },
  {
    link: "https://dev.mysql.com/doc/",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/97f42a4c18a1fd7d6c3ec2d8b017e348c4f7353f03dfaf1aff8bdc4fcc568788?",
    alt: "MySQL",
  },
  {
    link: "https://docs.spring.io/spring-boot/index.html",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d62f4056842bb9f02bd898bc65cc5bb9222e29e7c05ef9c42be1164733bd44d4?",
    alt: "Spring Boot",
  },
  {
    link: "https://react.dev/blog/2023/03/16/introducing-react-dev",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa22f6d691d3e4e7137395fe27d3b2987008c9d20df6f4968d8bff9814be06f9?",
    alt: "React.js",
  },
];

export const Skills = () => {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 1, ease: "easeInOut" },
        }}
        className="flex space-x-16 overflow-hidden group"
      >
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {skills.map((skill) => {
            return (
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      src={skill.src}
                      alt={skill.alt}
                      className="max-w-none"
                      loading="lazy"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.alt}</p>
                  </TooltipContent>
                </Tooltip>
              </a>
            );
          })}
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {skills.map((skill) => {
            return (
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      src={skill.src}
                      alt={skill.alt}
                      className="max-w-none"
                      loading="lazy"
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{skill.alt}</p>
                  </TooltipContent>
                </Tooltip>
              </a>
            );
          })}
        </div>
      </motion.div>
    </TooltipProvider>
  );
};
