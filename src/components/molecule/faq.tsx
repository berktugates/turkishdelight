"use client";

import React, { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  index?: number;
  question: string;
  answer: string;
}

interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  faqs: FAQItem[];
  title?: string;
  searchable?: boolean;
  colorScheme?: "pink" | "orange" | "yellow";
}

// --- SVG ICONS ---
const PlusIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const MinusIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
  </svg>
);

const HelpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 14v.01M12 12a2 2 0 10-2-2m2 6h0a2 2 0 100-4m0 0V9m0 0a9 9 0 11-6.219 2.781" />
  </svg>
);

const FAQ = forwardRef<HTMLDivElement, FAQProps>(
  (
    {
      faqs,
      title = "Sıkça Sorulan Sorular",
      searchable = false,
      colorScheme = "pink",
      className,
      ...props
    },
    ref
  ) => {
    const [openItems, setOpenItems] = useState(new Set<number>());
    const [searchTerm, setSearchTerm] = useState("");

    const toggleItem = (index: number) => {
      const newOpenItems = new Set(openItems);
      if (newOpenItems.has(index)) newOpenItems.delete(index);
      else newOpenItems.add(index);
      setOpenItems(newOpenItems);
    };

    const filteredFaqs = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const colorSchemes = {
      pink: {
        gradient: "from-[#e91e63] to-[#f39c12]",
        accent: "text-[#e91e63]",
        border: "border-[#e91e63]/20",
        hover: "hover:border-[#e91e63]/30",
        bg: "bg-gradient-to-r from-[#e91e63]/3 to-[#f39c12]/3",
        searchBg: "bg-gradient-to-r from-[#e91e63]/5 to-[#f39c12]/5",
        focusRing: "focus:ring-[#e91e63]/30 focus:border-[#e91e63]/50",
        textColor: "text-[#e91e63]",
        textHover: "group-hover:text-[#f39c12]",
        iconColor: "#e91e63",
        answerText: "text-[#e91e63]/70",
        separatorColor: "bg-gradient-to-r from-[#e91e63]/30 to-[#f39c12]/30",
      },
      orange: {
        gradient: "from-[#ff6b35] to-[#e91e63]",
        accent: "text-[#ff6b35]",
        border: "border-[#ff6b35]/20",
        hover: "hover:border-[#ff6b35]/30",
        bg: "bg-gradient-to-r from-[#ff6b35]/3 to-[#e91e63]/3",
        searchBg: "bg-gradient-to-r from-[#ff6b35]/5 to-[#e91e63]/5",
        focusRing: "focus:ring-[#ff6b35]/30 focus:border-[#ff6b35]/50",
        textColor: "text-[#ff6b35]",
        textHover: "group-hover:text-[#e91e63]",
        iconColor: "#ff6b35",
        answerText: "text-gray-700",
        separatorColor: "bg-gradient-to-r from-[#ff6b35]/30 to-[#e91e63]/30",
      },
      yellow: {
        gradient: "from-[#f39c12] to-[#ff6b35]",
        accent: "text-[#f39c12]",
        border: "border-[#f39c12]/20",
        hover: "hover:border-[#f39c12]/30",
        bg: "bg-gradient-to-r from-[#f39c12]/3 to-[#ff6b35]/3",
        searchBg: "bg-gradient-to-r from-[#f39c12]/5 to-[#ff6b35]/5",
        focusRing: "focus:ring-[#f39c12]/30 focus:border-[#f39c12]/50",
        textColor: "text-[#f39c12]",
        textHover: "group-hover:text-[#ff6b35]",
        iconColor: "#f39c12",
        answerText: "text-gray-700",
        separatorColor: "bg-gradient-to-r from-[#f39c12]/30 to-[#ff6b35]/30",
      },
    };

    const colors = colorSchemes[colorScheme];

    return (
      <div
        ref={ref}
        className={cn("w-full max-w-4xl mx-auto space-y-8", className)}
        {...props}
      >
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <h2
              className={cn(
                "text-4xl md:text-5xl font-bold bg-gradient-to-r",
                colors.gradient,
                "bg-clip-text text-transparent"
              )}
            >
              {title}
            </h2>
          </div>
          <p className="bg-gradient-to-r from-[#e91e63] to-[#f39c12] bg-clip-text text-transparent text-lg max-w-2xl mx-auto">
            Yaygın soruların yanıtlarını bulun. Herhangi bir soruya tıklayarak genişletin.
          </p>
        </div>

        {searchable && (
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="SSS'leri ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={cn(
                "w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 transform hover:scale-105 placeholder:text-gray-400",
                colors.border,
                colors.searchBg,
                colors.focusRing
              )}
              aria-label="SSS'leri Ara"
            />
          </div>
        )}

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openItems.has(index);

            return (
              <div
                key={index}
                className={cn(
                  "group border-2 rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm",
                  colors.border,
                  colors.hover,
                  colors.bg
                )}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-4 transition-all duration-300"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <h3 className={cn(
                        "text-lg md:text-xl font-semibold transition-colors duration-300",
                        colors.textColor,
                        colors.textHover
                      )}>
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={cn(
                        "flex items-center space-x-2 transition-transform duration-500",
                        isOpen ? "rotate-180" : ""
                      )}
                    >
                      {isOpen ? <MinusIcon color={colors.iconColor} /> : <PlusIcon color={colors.iconColor} />}
                    </div>
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-0">
                      <div className={cn(
                        "w-full h-px mb-4",
                        colors.separatorColor
                      )}></div>
                      <p className={cn(
                        "leading-relaxed text-base md:text-lg animate-fadeIn",
                        colors.answerText
                      )}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <HelpIcon />
            <p className="text-gray-600 text-lg">Arama kriterlerinize uygun SSS bulunamadı.</p>
          </div>
        )}
      </div>
    );
  }
);

FAQ.displayName = "FAQ";

export { FAQ };
