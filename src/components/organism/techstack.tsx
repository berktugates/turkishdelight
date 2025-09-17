import React from "react";
import { Marquee } from "../molecule/marquee";

export const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="flex flex-col items-center justify-center gap-y-2"
    >
      <h1 className="text-center text-3xl bg-gradient-to-r from-[#e91e63] via-[#ff6b35] to-[#f39c12] bg-clip-text text-transparent font-semibold">
        Teknoloji Yığını
      </h1>
      <p className="text-center bg-gradient-to-r from-[#e91e63] to-[#f39c12] bg-clip-text text-transparent">
        Projelerinizi geleceğe taşıyan modern teknolojilerle inşa ediyorum.
      </p>
      <Marquee />
    </section>
  );
};
