"use client";

import Card from "@/components/molecule/card";
import { whyUsData } from "@/constants/whyus";
import { useTranslation } from "react-i18next";

export function WhyUs() {
  const { t } = useTranslation();
  
  return (
    <section id="why-us" className="">
      <div id="header" className="flex flex-col gap-y-2 mb-8">
        <h1 className="text-center text-3xl bg-gradient-to-r from-[#e91e63] via-[#ff6b35] to-[#f39c12] bg-clip-text text-transparent font-semibold">
          {t("whyus.title")}
        </h1>
        <p className="text-center bg-gradient-to-r from-[#e91e63] to-[#f39c12] bg-clip-text text-transparent">
          {t("whyus.subtitle")}
        </p>
      </div>
      
      <div id="cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {whyUsData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
