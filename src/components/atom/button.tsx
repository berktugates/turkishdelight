import React from "react";

interface IButton {
  text?: string;
  icon?: React.ReactNode;
  shadowColor?: "green" | "blue" | "purple";
}

export const Button: React.FC<IButton> = ({
  text,
  icon,
  shadowColor = "green",
}) => {
  const shadowClasses = {
    green: "hover:border-green-500",
    blue: "hover:border-blue-500",
    purple: "hover:border-purple-500",
  };
  return (
    <div
      className={`flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md bg-base-100/50 backdrop-blur-sm border border-base-300/30 hover:border-info/30 transition-all duration-300 text-gray-500 font-medium ${shadowClasses[shadowColor]}`}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
};
