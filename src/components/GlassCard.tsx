
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-2xl glass-card p-6 transition-all duration-300 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
