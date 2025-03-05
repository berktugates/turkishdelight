import React from "react";
import Image from "next/image";
import { IEducation } from "@/models/Education";

interface IEducationCard {
  education: IEducation;
}

const EducationCard: React.FC<IEducationCard> = ({ education }) => {
  return (
    <>
      <div id="education-card" className="flex justify-between items-center">
        <div id="education-info" className="flex gap-x-2">
          <Image
            src={education.image}
            width={120}
            height={100}
            className="rounded-full object-scale-down w-12 h-12"
            alt="bbt"
          />
          <div id="education-title">
            <h1 className="text-sm font-semibold">{education.department}</h1>
            <h1 className="text-xs text-gray-600">{education.school}</h1>
          </div>
        </div>
        <div id="education-date">
          <h1 className="text-sm text-gray-600">
            {education.startDate} - {education.endDate}
          </h1>
        </div>
      </div>
    </>
  );
};
export default EducationCard;
