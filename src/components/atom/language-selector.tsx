"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", country: "United States" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", country: "Germany" },
  { code: "fr", name: "Français", flag: "🇫🇷", country: "France" },
  { code: "it", name: "Italiano", flag: "🇮🇹", country: "Italy" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷", country: "Turkey" },
  { code: "es", name: "Español", flag: "🇪🇸", country: "Spain" },
  { code: "ar", name: "العربية", flag: "🇸🇦", country: "Saudi Arabia" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm border border-[#e91e63]/20 rounded-lg hover:border-[#e91e63]/40 transition-all duration-300 hover:scale-105"
        aria-label="Dil seçici"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <ChevronDown 
          className={`w-4 h-4 text-[#e91e63] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm border border-[#e91e63]/20 rounded-lg shadow-lg z-50 overflow-hidden">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#e91e63]/5 transition-colors duration-200 ${
                i18n.language === language.code 
                  ? "bg-[#e91e63]/10 text-[#e91e63] font-medium" 
                  : "text-gray-700"
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{language.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
