import React from "react";
import { skills } from "@/constants/Skills";

const Skills: React.FC = () => {
  return (
    <>
      <div id="skills" className="my-4">
        <h1 className="text-lg font-bold mb-2">Skills</h1>
        <div id="skills-list" className="flex flex-wrap gap-2">
          {skills.map((skill,index)=>(
            <span key={index} className="bg-black text-white px-2.5 py-1 text-xs text-center font-semibold rounded-md">
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default Skills;
