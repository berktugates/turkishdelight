import {ThemeProvider} from "@/store/context/ThemeProvider";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Greetings from "./components/Greetings";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <div id="root" className="h-screen my-2">
          <div id="content" className="flex flex-col max-w-xl mx-auto p-6">
            <Navbar />
            <Greetings />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Contact />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
