"use client";

import { useState, createContext } from "react";

import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ThemeContext = createContext();

function Header() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <header className="py-8 xl:py-12 bg-primary">
        <div className="container mx-auto flex justify-between items-center">
          {/** logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Nicholas<span className="text-accent">.</span>
            </h1>
          </Link>
          {/* desktop nav & hire me button*/}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button>Hire me</Button>
            </Link>
          </div>
          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </ThemeContext.Provider>
  );
}

export { Header, ThemeContext };
