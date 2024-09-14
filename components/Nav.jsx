"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation"; // Correct import

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "#about",
  },
  {
    name: "experience",
    path: "#experience",
  },
  {
    name: "work",
    path: "#work",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

const ThemeToggle = dynamic(() => import("./ui/ThemeToggle"), {
  ssr: false,
});

export default function Nav() {
  const pathname = usePathname(); // Correct function name
  return (
    <nav className="flex gap-8">
      <ThemeToggle />
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
