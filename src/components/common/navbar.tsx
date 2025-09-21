import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";
import { dockItems } from "@/constants/dock";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/atom/language-selector";

interface NavbarProps {
  isDockOpen: boolean;
  setIsDockOpen: (open: boolean) => void;
}

export default function Navbar({ isDockOpen, setIsDockOpen }: NavbarProps) {
  const { t } = useTranslation();
  
  const mobileDockItems = [
    {
      icon: Mail,
      label: t("navbar.contact"),
      href: "mailto:freelancerberktug@gmail.com",
    },
    ...dockItems,
  ];

  return (
    <nav className="flex items-center justify-between relative overflow-visible">
      <Link
        className="text-3xl font-semibold bg-gradient-to-r from-[#e91e63] via-[#ff6b35] to-[#f39c12] bg-clip-text text-transparent"
        href={"/"}
      >
        turkish
        <br />
        delight.
      </Link>

      <div className="flex items-center gap-3 relative">
        <LanguageSelector />
        
        <div className="lg:hidden relative">
          <button
            onClick={() => setIsDockOpen(!isDockOpen)}
            className="bg-gradient-to-br from-[#ff6b35] to-[#e91e63] p-2 text-white rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            title={isDockOpen ? t("navbar.menuClose") : t("navbar.menuOpen")}
          >
            {isDockOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {isDockOpen && (
            <div className="absolute top-full right-1/2 translate-x-1/2 mt-2 z-50 min-w-0 max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg">
              <div className="bg-background/95 border border-border/50 rounded-lg p-1 shadow-lg">
                <div className="flex flex-col gap-1">
                  {mobileDockItems.map((item, index) => (
                    <div key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-3 rounded hover:bg-secondary transition-colors"
                        title={item.label}
                      >
                        <item.icon className="w-5 h-5" />
                      </a>
                      {index === 0 && (
                        <div className="mx-2 h-px bg-border/30"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <a
          href="mailto:freelancerberktug@gmail.com"
          className="hidden lg:inline-block bg-gradient-to-br from-[#ff6b35] to-[#e91e63] px-4 py-2 text-white rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
{t("navbar.contact")}
        </a>
      </div>
    </nav>
  );
}
