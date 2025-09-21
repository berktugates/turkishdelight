import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "../components/providers/I18nProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "../components/providers/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Berktuğ Berke - Professional Freelancer | Web & Mobile Development",
    template: "%s | Berktuğ Berke - Freelancer"
  },
  description: "Hire Berktuğ Berke - Professional freelance web & mobile developer. Expert in React Native, React, Next.js, TypeScript, UI/UX design. Available for web development and mobile app development projects. Contact now for your next project!",
  keywords: [
    "hire freelancer",
    "freelance web developer",
    "freelance mobile developer",
    "web development services",
    "mobile app development services",
    "React Native developer for hire",
    "React developer for hire",
    "Next.js developer for hire",
    "TypeScript developer for hire",
    "UI/UX design services",
    "frontend developer for hire",
    "mobile app developer for hire",
    "full-stack developer for hire",
    "turkish freelancer",
    "web design services",
    "mobile app design services",
    "programming services",
    "iOS app development services",
    "Android app development services",
    "cross-platform development services",
    "berktuğ berke",
    "turkishdelight",
    "freelance services",
    "web development company",
    "mobile app development company"
  ],
  authors: [{ name: "Berktuğ Berke", url: "https://turkishdelight.dev" }],
  creator: "Berktuğ Berke",
  publisher: "Berktuğ Berke",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://turkishdelight.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "tr-TR": "/tr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://turkishdelight.dev",
    title: "Berktuğ Berke - Professional Freelancer | Web & Mobile Development",
    description: "Hire Berktuğ Berke - Professional freelance web & mobile developer. Expert in React Native, React, Next.js, TypeScript, UI/UX design. Available for your next project!",
    siteName: "Berktuğ Berke Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Berktuğ Berke - Web & Mobile Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berktuğ Berke - Web & Mobile Developer",
    description: "Hire Berktuğ Berke - Professional freelance web & mobile developer. Expert in React Native, React, Next.js, TypeScript, UI/UX design. Available for your next project!",
    images: ["/og-image.jpg"],
    creator: "@berktugberke",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "AtWUerObjkczmqWFPKHj_8LYKMMrIjXumso_EvqTlOU",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="google-site-verification" content="AtWUerObjkczmqWFPKHj_8LYKMMrIjXumso_EvqTlOU" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full m-0 p-0`}
      >
        <I18nProvider>
          {children}
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics />
        </I18nProvider>
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Berktuğ Berke",
              "jobTitle": "Freelance Web & Mobile Developer",
              "description": "Professional freelancer Berktuğ Berke. Web development, React Native mobile apps, React, Next.js, TypeScript, UI/UX design services.",
              "url": "https://turkishdelight.dev",
              "image": "https://turkishdelight.dev/og-image.jpg",
              "email": "freelancerberktug@gmail.com",
              "sameAs": [
                "https://github.com/berktugberke",
                "https://linkedin.com/in/berktugberke",
                "https://twitter.com/berktugberke"
              ],
              "knowsAbout": [
                "Web Development",
                "Mobile App Development",
                "React Native",
                "React",
                "Next.js",
                "TypeScript",
                "UI/UX Design",
                "Frontend Development",
                "Mobile Development",
                "Cross-Platform Development",
                "iOS Development",
                "Android Development",
                "JavaScript",
                "CSS",
                "HTML"
              ],
              "offers": [
                {
                  "@type": "Service",
                  "name": "Web Development Services",
                  "description": "Professional web development and design services including React, Next.js, TypeScript applications",
                  "provider": {
                    "@type": "Person",
                    "name": "Berktuğ Berke Ateş"
                  },
                  "areaServed": "Turkey",
                  "availableLanguage": ["English", "Turkish"]
                },
                {
                  "@type": "Service",
                  "name": "Mobile App Development Services",
                  "description": "Professional mobile app development using React Native for iOS and Android platforms",
                  "provider": {
                    "@type": "Person",
                    "name": "Berktuğ Berke Ateş"
                  },
                  "areaServed": "Turkey",
                  "availableLanguage": ["English", "Turkish"]
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
