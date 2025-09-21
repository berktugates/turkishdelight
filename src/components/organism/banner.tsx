import React from "react";
import { Button } from "../atom/button";
import { CodeXml, Mail, Users } from "lucide-react";
import Pulse from "../atom/pulse";
import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  
  return (
    <section id="banner" className="mt-16 z-50 flex flex-col items-center gap-y-8">
      <span className="flex items-center justify-center gap-x-4 border border-[#ff6b35]/30 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 md:max-w-md">
        <Pulse />
        <p className="bg-gradient-to-r from-[#e91e63] via-[#ff6b35] to-[#f39c12] bg-clip-text text-transparent text-center md:font-medium">
          {t("banner.status")}
        </p>
      </span>
      <div id="slogan" className="flex flex-col items-center gap-y-2">
        <h1 className="text-3xl md:text-5xl font-medium text-center bg-gradient-to-r from-[#e91e63] to-[#ff6b35] bg-clip-text text-transparent">
          {t("banner.title1")}
        </h1>
        <h1 className="text-3xl md:text-5xl font-medium text-center bg-gradient-to-r from-[#ff6b35] to-[#f39c12] bg-clip-text text-transparent">
          {t("banner.title2")}
        </h1>
      </div>
      <a href="mailto:freelancerberktug@gmail.com" className="bg-gradient-to-br from-[#ff6b35] to-[#e91e63] py-2 px-6 text-white text-2xl rounded-lg font-medium hover:scale-105 hover:shadow-xl hover:shadow-[#e91e63]/25 duration-300 inline-block">
        {t("banner.contact")}
      </a>
      <div id="stats" className="grid grid-cols-2 gap-3 z-50">
        <Button
          text={t("banner.happyClients")}
          icon={<Users size={16} color="#a855f7" />}
          shadowColor="purple"
        />
        <Button
          text={t("banner.completedProjects")}
          icon={<CodeXml size={16} color="#22c55e" />}
          shadowColor="green"
        />
        <div className="col-span-2 flex justify-center">
          <Button
            text={t("banner.support")}
            icon={<Mail size={16} color="#3b82f6" />}
            shadowColor="blue"
          />
        </div>
      </div>
    </section>
  );
};
