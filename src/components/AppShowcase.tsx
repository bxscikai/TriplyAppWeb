
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import GlassCard from "./GlassCard";
import { Globe, Map, Plane } from "lucide-react";

const AppShowcase = () => {
  const screenshots = [
    {
      img: "/lovable-uploads/e47b888e-5a20-4ea2-93fd-10fabc6d33a9.png",
      title: "Visa Requirements Checker",
      description: "Check visa requirements based on your passport nationality",
      icon: <Globe className="h-5 w-5" />
    },
    {
      img: "/lovable-uploads/9d6eef7d-bb09-49ab-b781-c2c4877228ef.png",
      title: "Explore Countries & Festivals",
      description: "Discover countries and cultural festivals around the world",
      icon: <Map className="h-5 w-5" />
    },
    {
      img: "/lovable-uploads/c14b9430-772a-4f99-8522-964cbaf9b20a.png",
      title: "Manage Your Trips",
      description: "View and manage all your upcoming flights in one place",
      icon: <Plane className="h-5 w-5" />
    }
  ];

  return (
    <section id="app-showcase" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Triply in Action</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the simplicity and power of managing your travel with Triply.
            Here's a glimpse of what our app looks like.
          </p>
        </div>

        {/* Desktop View - Large Side-by-Side Screenshots */}
        <div className="hidden lg:flex items-center justify-center gap-8 mb-12">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <GlassCard className="overflow-hidden flex flex-col items-center w-full max-w-xs">
                <div className="relative h-[600px] w-[280px] overflow-hidden rounded-xl bg-black">
                  <img 
                    src={screenshot.img} 
                    alt={screenshot.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 text-center p-4">
                  <div className="flex items-center justify-center mb-2">
                    <div className="h-8 w-8 rounded-full bg-triply-100 flex items-center justify-center text-triply-600 mr-2">
                      {screenshot.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{screenshot.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{screenshot.description}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none">
                    <CardContent className="flex flex-col items-center p-0">
                      <div className="overflow-hidden rounded-xl shadow-lg mb-4 bg-black">
                        <img 
                          src={screenshot.img} 
                          alt={screenshot.title}
                          className="h-[500px] w-full object-cover object-top"
                        />
                      </div>
                      <div className="text-center p-4">
                        <div className="flex items-center justify-center mb-2">
                          <div className="h-8 w-8 rounded-full bg-triply-100 flex items-center justify-center text-triply-600 mr-2">
                            {screenshot.icon}
                          </div>
                          <h3 className="font-semibold text-lg">{screenshot.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{screenshot.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative inset-auto left-auto transform-none" />
              <CarouselNext className="relative inset-auto right-auto transform-none" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <a 
            href="#features" 
            className="rounded-full bg-triply-600 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-triply-500/25 transition-all duration-300 button-animation"
          >
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
