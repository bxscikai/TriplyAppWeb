import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import GlassCard from "./GlassCard";
import { Globe, Map, Plane } from "lucide-react";

const AppShowcase = () => {
  const screenshots = [
    {
      img: "/screenshots/Simulator Screenshot - iPhone 16 - 2025-03-26 at 19.47.26.png",
      title: "See Your Trips",
      description: "View all your upcoming flights in one place with seamless Google Calendar integration",
      icon: <Plane className="h-5 w-5" />
    },
    {
      img: "/screenshots/Simulator Screenshot - iPhone 16 - 2025-03-26 at 19.11.06.png",
      title: "Explore Countries & Festivals",
      description: "Discover countries and cultural festivals around the world",
      icon: <Map className="h-5 w-5" />
    },
    {
      img: "/screenshots/Simulator Screenshot - iPhone 16 - 2025-03-26 at 19.09.57.png",
      title: "Visa Requirements Checker",
      description: "Check visa requirements for destinations based on your passport nationalities",
      icon: <Globe className="h-5 w-5" />
    },

    {
      img: "/screenshots/Simulator Screenshot - iPhone 16 - 2025-03-26 at 19.49.41.png",
      title: "Record countries you have visited",
      description: "Keep track of your travel history and share it with friends",
      icon: <Map className="h-5 w-5" />
    }
  ];

  return (
    <section id="app-showcase" className="py-2 md:py-3 bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container z-10 text-center fade-in-sequence pb-0 md:pb-6">
        <div className="inline-block mb-3 px-3 py-1 rounded-full bg-triply-100 text-triply-800 font-medium text-sm animate-fade-in">
          <Plane className="inline-block w-4 h-4 mr-1" /> Travel Smarter, Not Harder
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-triply-800 via-triply-600 to-triply-500 bg-clip-text text-transparent">
          Your Travel Companion <br className="hidden md:block" />
          <span className="text-foreground">for the Modern Explorer</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Sync your flights with Google Calendar, discover travel tips, check visa requirements,
          and explore festivals around the world — all in one place.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="https://apps.apple.com/app/triply-travel-companion/id1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img
              src="/ios-badge.svg"
              alt="Download on the App Store"
              className="h-14"
            />
          </a>
        </div>


      </div>

      <div className="section-container pt-0">
        <div className="text-center mb-4 animate-on-scroll opacity-0">
        </div>

        {/* Desktop View - Large Side-by-Side Screenshots */}
        <div className="hidden lg:flex items-start justify-center gap-8 mb-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 transition-all duration-500 hover:scale-105 h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <GlassCard className="overflow-hidden flex flex-col items-center w-full max-w-xs h-[700px]">
                <div className="relative h-[600px] w-[280px] overflow-hidden rounded-xl">
                  <img
                    src={screenshot.img}
                    alt={screenshot.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 text-center p-4 flex-1">
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
          <Carousel className="w-[60%] mx-auto">
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none bg-transparent">
                    <CardContent className="flex flex-col items-center p-0">
                      <div className="w-full overflow-hidden rounded-xl shadow-lg mb-4">
                        <img
                          src={screenshot.img}
                          alt={screenshot.title}
                          className="w-full object-contain max-h-[600px]"
                        />
                      </div>
                      <div className="text-center p-4 flex-1 w-full">
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

        <div className="mt-12 py-6 text-center animate-on-scroll opacity-0">
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
