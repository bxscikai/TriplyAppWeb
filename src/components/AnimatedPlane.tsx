
import React from "react";
import { Plane } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedPlaneProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}

const AnimatedPlane = ({ 
  className, 
  size = 24, 
  color = "currentColor",
  delay = 0 
}: AnimatedPlaneProps) => {
  return (
    <div 
      className={cn(
        "absolute animate-plane-fly", 
        className
      )}
      style={{ 
        animationDelay: `${delay}s`,
      }}
    >
      <Plane 
        size={size} 
        color={color} 
        className="transform -rotate-12" 
      />
    </div>
  );
};

export default AnimatedPlane;
