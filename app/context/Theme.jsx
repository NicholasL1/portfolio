"use client";

import { useState, createContext } from "react";

// Context provider for dark mode in the header element which provides darkMode referencing to Nav and MobileNav (child elements)
// and page element which provides darkMode referencing to Coder element

export const ThemeContext = createContext();

export const Theme = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
