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
  icon: React.ComponentType<{ className?: string }>;
}

export const whyUsData: WhyUsItem[] = [
  {
    id: "experience",
    icon: Target
  },
  {
    id: "projects",
    icon: Rocket
  },
  {
    id: "satisfaction",
    icon: Star
  },
  {
    id: "delivery",
    icon: Clock
  },
  {
    id: "support",
    icon: MessageCircle
  },
  {
    id: "technology",
    icon: Laptop
  }
];
