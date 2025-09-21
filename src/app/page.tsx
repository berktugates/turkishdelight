"use client";
import { useState } from "react";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Banner } from "@/components/organism/banner";
import { Tiles } from "@/components/ui/tiles";
import { WhyUs } from "@/components/organism/whyus";
import { TechStack } from "@/components/organism/techstack";
import { Faq } from "@/components/organism/faq";
import { Dock } from "@/components/ui/dock-two";
import { dockItems } from "@/constants/dock";

export default function Home() {
  const [isDockOpen, setIsDockOpen] = useState(false);

  return (
    <>
      <Tiles className="px-4 py-4">
        <main className="lg:max-w-4xl lg:mx-auto">
          <Navbar isDockOpen={isDockOpen} setIsDockOpen={setIsDockOpen} />
          <Banner />
          <section id="content" className="flex flex-col gap-y-8 mt-12">
            <WhyUs />
            <TechStack />
            <Faq />
          </section>
        </main>
        <Footer />
      </Tiles>
      
      {/* Desktop Dock - lg ve üzeri ekranlarda sol tarafta */}
      <div className="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Dock items={dockItems} />
        </div>
      </div>
    </>
  );
}
