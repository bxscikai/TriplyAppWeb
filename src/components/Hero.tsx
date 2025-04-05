
import React, { useEffect, useRef } from "react";
import { ArrowDown, Plane } from "lucide-react";
import AnimatedPlane from "./AnimatedPlane";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.backgroundPosition = `${50 + moveX * 0.5}% ${50 + moveY * 0.5}%`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      style={{ backgroundSize: "120% 120%", transition: "background-position 0.3s ease-out" }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-10 left-5 md:left-20 w-8 h-8 animate-float">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="rgba(14, 165, 233, 0.1)" />
          </svg>
        </div>
        <div className="absolute top-20 right-10 md:right-40 w-12 h-12 animate-float" style={{ animationDelay: "1s" }}>
          <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="rgba(14, 165, 233, 0.15)" />
          </svg>
        </div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 animate-float" style={{ animationDelay: "2s" }}>
          <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="rgba(14, 165, 233, 0.1)" />
          </svg>
        </div>
        <AnimatedPlane className="top-1/4 left-0" size={36} color="#0ea5e9" />
        <AnimatedPlane className="top-2/3 left-0" size={24} color="#0ea5e9" delay={3} />
        <AnimatedPlane className="top-1/2 left-0" size={32} color="#0ea5e9" delay={6} />
      </div>

      <div className="section-container z-10 text-center fade-in-sequence">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-triply-100 text-triply-800 font-medium text-sm animate-fade-in">
          <Plane className="inline-block w-4 h-4 mr-1" /> Travel Smarter, Not Harder
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-triply-800 via-triply-600 to-triply-500 bg-clip-text text-transparent">
          Your Travel Companion <br className="hidden md:block" />
          <span className="text-foreground">for the Modern Explorer</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Sync your flights, discover travel tips, check visa requirements,
          and explore festivals around the world — all in one place.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#features" 
            className="rounded-full bg-triply-600 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-triply-500/25 transition-all duration-300 button-animation"
          >
            Explore Features
          </a>
          <a 
            href="#about" 
            className="rounded-full bg-white text-triply-600 px-8 py-4 font-semibold shadow-lg border border-triply-100 hover:bg-triply-50 transition-all duration-300 button-animation"
          >
            Learn More
          </a>
        </div>
      </div>

      <a 
        href="#features" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-triply-100 shadow-md"
      >
        <ArrowDown className="w-5 h-5 text-triply-600" />
      </a>
    </section>
  );
};

export default Hero;
