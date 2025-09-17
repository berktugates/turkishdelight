import { 
  Target, 
  Rocket, 
  Star, 
  Clock, 
  MessageCircle, 
  Laptop 
} from "lucide-react";

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const whyUsData: WhyUsItem[] = [
  {
    id: "experience",
    title: "Deneyim",
    description: "Yıllardır web ve mobil geliştirme alanında faaliyet göstererek birçok başarılı projeye imza attım.",
    value: "5+ Yıl",
    icon: Target
  },
  {
    id: "projects",
    title: "Tamamlanan Projeler",
    description: "Farklı sektörlerden müşteriler için çeşitli ölçeklerde projeler geliştirdim.",
    value: "20+",
    icon: Rocket
  },
  {
    id: "satisfaction",
    title: "Müşteri Memnuniyeti",
    description: "Müşterilerimin %98'i projelerinden memnun kaldı ve tekrar çalışmak istiyor.",
    value: "%98",
    icon: Star
  },
  {
    id: "delivery",
    title: "Zamanında Teslimat",
    description: "Projelerimizin %95'ini belirlenen sürede veya daha erken teslim ediyorum.",
    value: "%95",
    icon: Clock
  },
  {
    id: "support",
    title: "7/24 Destek",
    description: "Proje sonrası da yanınızdayız. Herhangi bir sorunuzda hızla yanıt veriyorum.",
    value: "24/7",
    icon: MessageCircle
  },
  {
    id: "technology",
    title: "Güncel Teknolojiler",
    description: "En son teknolojileri takip ederek projelerinizi geleceğe hazır hale getiriyorum.",
    value: "Modern",
    icon: Laptop
  }
];
