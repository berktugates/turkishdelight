'use client'

import { useState, useEffect } from "react";
import { useContext } from "react";
import { Tcontext } from "@/store/context/ThemeContext";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Greetings from "./components/Greetings";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import LoadingScreen from ".//LoadingScreen";
import { Slide, ToastContainer } from "react-toastify";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(Tcontext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8100);

    return () => clearTimeout(timer);
  }, []);

  if (!context) return null;
  const { theme } = context;

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div
        id="root"
        className={`h-screen ${theme == "light" ? "bg-white" : "bg-black"}`}
      >
        <div id="content" className={`flex flex-col max-w-xl mx-auto p-6 `}>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            draggable
            theme="dark"
            transition={Slide}
          />
          <Navbar />
          <Greetings />
          <About />
          <Education />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}
