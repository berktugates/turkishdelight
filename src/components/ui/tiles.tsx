"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface TilesProps {
  className?: string;
  children?: React.ReactNode;
}

export function Tiles({ className, children }: TilesProps) {
  return (
    <div
      className={cn(
        "min-h-screen w-full bg-white relative text-black",
        className
      )}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e5e5 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
