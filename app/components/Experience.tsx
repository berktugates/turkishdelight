import React, { useContext } from "react";
import { Tcontext } from "@/store/context/ThemeContext";
import { experiences } from "@/constants/Experiences";
import ExperienceCard from "./ExperienceCard";

const Experience: React.FC = () => {
  const { theme } = useContext(Tcontext);
  return (
    <>
      <div id="work-experience" className="my-4">
        <h1
          className={`text-lg font-bold mb-1 ${
            theme == "light" ? "text-black" : "text-white"
          }`}
        >
          Work Experience
        </h1>
        {experiences.map((experience, index) => {
          return (
            <div key={index}>
              <ExperienceCard experience={experience} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
