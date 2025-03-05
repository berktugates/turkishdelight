import { educations } from "@/constants/Educations";
import React from "react";
import EducationCard from "./EducationCard";

const Education: React.FC = () => {
  return (
    <>
      <div id="education" className="my-4">
        <h1 className="text-lg font-bold mb-1">Education</h1>
        {educations.map((education, index) => (
          <div key={index}>
            <EducationCard education={education} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Education;
