"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";

interface ITheme {
  theme: string;
  toggleTheme: () => void;
}

export const Tcontext = createContext<ITheme | undefined>(undefined);

export const ThemeContext: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("THEME")
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("THEME");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = (): void => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("THEME", theme);
  }, [theme]);

  return (
    <>
      <Tcontext.Provider value={{ theme, toggleTheme }}>
        {children}
      </Tcontext.Provider>
    </>
  );
};
