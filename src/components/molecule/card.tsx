"use client";

import { cn } from "@/lib/utils";
import { WhyUsItem } from "@/constants/whyus";
import { useTranslation } from "react-i18next";

interface CardProps {
  data: WhyUsItem;
  className?: string;
}

export default function Card({ data, className }: CardProps) {
  const { t } = useTranslation();
  const IconComponent = data.icon;

  return (
    <div className={cn("group h-full", className)}>
      <div className="h-full w-full bg-gradient-to-r from-[#e91e63]/5 to-[#f39c12]/5 rounded-2xl shadow-lg p-6 border border-[#e91e63]/20 hover:border-[#f39c12]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#e91e63]/10 to-[#f39c12]/10 border border-[#e91e63]/20">
            <IconComponent className="w-6 h-6 text-[#e91e63] group-hover:text-[#f39c12] transition-colors duration-300" />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-[#e91e63] to-[#f39c12] bg-clip-text text-transparent">
            {t(`whyus.${data.id}.value`)}
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-[#e91e63] group-hover:text-[#f39c12] transition-colors duration-300">
          {t(`whyus.${data.id}.title`)}
        </h3>

        <p className="text-[#e91e63]/70 leading-relaxed text-sm flex-grow">
          {t(`whyus.${data.id}.description`)}
        </p>
      </div>
    </div>
  );
}
