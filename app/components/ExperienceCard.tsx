import { IExperience } from "@/models/Experience";
import Image from "next/image";
import React from "react";

interface IExperienceCard {
    experience : IExperience,
}

const ExperienceCard: React.FC<IExperienceCard> = ({ experience }) => {
  return (
    <>
      <div
        id="work-experience-card"
        className="flex justify-between items-center"
      >
        <div id="work-info" className="flex gap-x-2">
          <Image
            src={experience.image}
            width={120}
            height={100}
            className="rounded-full object-scale-down w-12 h-12"
            alt="bbt"
          />
          <div id="work-title">
            <h1 className="text-sm font-semibold">{experience.company}</h1>
            <h1 className="text-xs text-gray-600">{experience.title}</h1>
          </div>
        </div>
        <div id="work-date">
          <h1 className="text-sm text-gray-600">
            {experience.startDate} - {experience.endDate}
          </h1>
        </div>
      </div>
    </>
  );
};
export default ExperienceCard;
