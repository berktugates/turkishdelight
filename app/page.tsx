"use client";
import { useContext } from "react";
import { Tcontext } from "@/store/context/ThemeContext";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Greetings from "./components/Greetings";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

export default function Home() {
  const context = useContext(Tcontext);
  if (!context) return null;
  const { theme } = context;
  return (
    <>
      <div
        id="root"
        className={` ${theme == "light" ? "bg-white" : "bg-black"}`}
      >
        <div id="content" className={`flex flex-col max-w-xl mx-auto p-6 `}>
          <Navbar />
          <Greetings />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}
