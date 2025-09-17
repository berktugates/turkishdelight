import React from "react";
import { Button } from "../atom/button";
import { CodeXml, Mail, Users } from "lucide-react";
import Pulse from "../atom/pulse";

export const Banner = () => {
  return (
    <section id="banner" className="mt-16 z-50 flex flex-col items-center gap-y-8">
      <span className="flex items-center justify-center gap-x-4 border border-[#ff6b35]/30 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 md:max-w-md">
        <Pulse />
        <p className="bg-gradient-to-r from-[#e91e63] via-[#ff6b35] to-[#f39c12] bg-clip-text text-transparent text-center md:font-medium">
          Yeni projeler hayata geçiriliyor
        </p>
      </span>
      <div id="slogan" className="flex flex-col items-center gap-y-2">
        <h1 className="text-3xl md:text-5xl font-medium text-center bg-gradient-to-r from-[#e91e63] to-[#ff6b35] bg-clip-text text-transparent">
          Tüm projelerinizde yanınızda
        </h1>
        <h1 className="text-3xl md:text-5xl font-medium text-center bg-gradient-to-r from-[#ff6b35] to-[#f39c12] bg-clip-text text-transparent">
          En üst seviyede
        </h1>
      </div>
      <a href="mailto:berktugberke@icloud.com" className="bg-gradient-to-br from-[#ff6b35] to-[#e91e63] py-2 px-6 text-white text-2xl rounded-lg font-medium hover:scale-105 hover:shadow-xl hover:shadow-[#e91e63]/25 duration-300 inline-block">
        İletişime Geç
      </a>
      <div id="stats" className="grid grid-cols-2 gap-3 z-50">
        <Button
          text="15+ Mutlu Müşteri"
          icon={<Users size={16} color="#a855f7" />}
          shadowColor="purple"
        />
        <Button
          text="20+ Biten Proje"
          icon={<CodeXml size={16} color="#22c55e" />}
          shadowColor="green"
        />
        <div className="col-span-2 flex justify-center">
          <Button
            text="7/24 Destek"
            icon={<Mail size={16} color="#3b82f6" />}
            shadowColor="blue"
          />
        </div>
      </div>
    </section>
  );
};
