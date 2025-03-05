"use client"
import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");
  localStorage.setItem("DARK_MODE",theme);

  useEffect(()=>{
    const storedTheme = localStorage.getItem("DARK_MODE");
    if(storedTheme){
      setTheme(storedTheme);
    }
  }, [])

  const toggleTheme = ()=>{
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
export {ThemeContext};
