"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Tiles } from "@/components/ui/tiles";
import { Dock } from "@/components/ui/dock-two";
import { dockItems } from "@/constants/dock";

export default function NotFound() {
  return (
    <>
      <Tiles className="px-4 py-4">
        <main className="lg:max-w-4xl lg:mx-auto min-h-screen flex flex-col items-center justify-center">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#e91e63] via-[#ff6b35] to-[#f39c12] bg-clip-text text-transparent">
                404
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#e91e63] to-[#ff6b35] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Oops! Page Not Found
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                The page you&apos;re looking for seems to have wandered off into
                the digital void. Don&apos;t worry, even the best developers
                encounter 404s!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="group bg-gradient-to-br from-[#ff6b35] to-[#e91e63] text-white px-6 py-3 rounded-lg font-medium hover:scale-105 hover:shadow-xl hover:shadow-[#e91e63]/25 duration-300 inline-flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Go Back
              </Link>
            </div>

            <div className="lg:hidden mt-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
                Connect With Me
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {dockItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-[#ff6b35] hover:text-white hover:border-[#ff6b35] duration-300 transition-all"
                  >
                    <item.icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </Tiles>

      <div className="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Dock items={dockItems} />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "404 - Page Not Found",
            description:
              "The page you're looking for doesn't exist. Return to Berktuğ Berke's portfolio for web and mobile development services.",
            url: "https://turkishdelight.dev/404",
            mainEntity: {
              "@type": "Person",
              name: "Berktuğ Berke",
              jobTitle: "Freelance Web & Mobile Developer",
              url: "https://turkishdelight.dev",
            },
          }),
        }}
      />
    </>
  );
}
