"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="mt-16 py-4 border-t border-[#e91e63]/20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-[#e91e63]/70 font-medium">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
