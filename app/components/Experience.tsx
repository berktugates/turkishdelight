import React from "react";
import { experiences } from "@/constants/Experiences";
import ExperienceCard from "./ExperienceCard";

const Experience: React.FC = () => {
  return (
    <>
      <div id="work-experience" className="my-4">
        <h1 className="text-lg font-bold mb-1">Work Experience</h1>
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
