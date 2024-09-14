import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import skills from "@/public/skills";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function splitStringUsingRegex(inputString) {
  const characters = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(inputString)) != null) {
    characters.push(match[0]);
  }

  return characters;
}

function filterSkills(skillsList) {
  const skillArray = skillsList
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "");
  const filteredSkills = skills.filter((skill) =>
    skillArray.includes(skill.alt)
  );
  return filteredSkills;
}

export { cn, splitStringUsingRegex, filterSkills };
