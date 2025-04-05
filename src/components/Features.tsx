
import React from "react";
import { Plane, Globe, Map, Calendar, Ticket, User, Download } from "lucide-react";
import GlassCard from "./GlassCard";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, className, delay = 0 }: FeatureCardProps) => (
  <GlassCard
    className={cn(
      "opacity-0",
      className
    )}
    style={{
      animationDelay: `${delay}s`,
      animationFillMode: "forwards"
    }}
  >
    <div className="h-12 w-12 mb-5 rounded-xl bg-triply-100 flex items-center justify-center text-triply-600">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </GlassCard>
);

const Features = () => {
  const features = [
    {
      title: "View Booked Flights & Accomodations",
      description: "Effortlessly sync and manage all your flight and accomodation details in one place for easy access with Google Calendar integration.",
      icon: <Plane className="h-6 w-6" />,
      delay: 0.1
    },
    {
      title: "Explore Travel Tips",
      description: "Access curated travel tips and insights for your destination from experienced travelers.",
      icon: <Globe className="h-6 w-6" />,
      delay: 0.2
    },
    {
      title: "Check Visa Requirements",
      description: "Instantly verify visa requirements based on your nationalities and destinations.",
      icon: <Ticket className="h-6 w-6" />,
      delay: 0.3
    },
    {
      title: "Track Countries Visited",
      description: "Record and view countries you have visited.",
      icon: <User className="h-6 w-6" />,
      delay: 0.4
    },
    {
      title: "Explore Cultural Festivals",
      description: "Discover local festivals and cultural events happening during your travel dates.",
      icon: <Calendar className="h-6 w-6" />,
      delay: 0.5
    },
    {
      title: "Access Information Offline",
      description: "Explore information even when you're offline.",
      icon: <Download className="h-6 w-6" />,
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Everything You Need in One App</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Triply brings together all the essential tools for modern travelers,
            making your journey smoother from planning to return.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="animate-fade-in"
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
