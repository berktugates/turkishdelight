import React, { useContext } from "react";
import Image from "next/image";
import { Tcontext } from "@/store/context/ThemeContext";
import { IExperience } from "@/models/Experience";

interface IExperienceCard {
  experience: IExperience;
}

const ExperienceCard: React.FC<IExperienceCard> = ({ experience }) => {
  const { theme } = useContext(Tcontext);
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
            className={`rounded-full object-scale-down w-12 h-12 ${
              theme == "light" ? "" : "border border-white"
            }`}
            alt="bbt"
          />
          <div id="work-title">
            <h1
              className={`text-sm font-semibold ${
                theme == "light" ? "text-black" : "text-white"
              }`}
            >
              {experience.company}
            </h1>
            <h1
              className={`text-xs ${
                theme == "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              {experience.title}
            </h1>
          </div>
        </div>
        <div id="work-date">
          <h1
            className={`text-sm ${
              theme == "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {experience.startDate} - {experience.endDate}
          </h1>
        </div>
      </div>
    </>
  );
};
export default ExperienceCard;
