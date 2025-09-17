"use client";

import Card from "@/components/molecule/card";
import { whyUsData } from "@/constants/whyus";

export function WhyUs() {
  return (
    <section id="why-us" className="">
      <div id="header" className="flex flex-col gap-y-2 mb-8">
        <h1 className="text-center text-3xl bg-gradient-to-r from-[#e91e63] via-[#ff6b35] to-[#f39c12] bg-clip-text text-transparent font-semibold">
          Neden Çalışmalısın?
        </h1>
        <p className="text-center bg-gradient-to-r from-[#e91e63] to-[#f39c12] bg-clip-text text-transparent">
          Her projeye, en yüksek standartlarda çözümler sunarak
          beklentilerinizi gerçeğe dönüştürüyorum.
        </p>
      </div>
      
      <div id="cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {whyUsData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
