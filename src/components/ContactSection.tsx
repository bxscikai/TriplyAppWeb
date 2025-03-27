
import React from "react";
import { Mail, MessageCircle, Coffee } from "lucide-react";
import GlassCard from "./GlassCard";

const ContactSection = () => {
  const contactOptions = [
    {
      title: "Discord",
      description: "Join our community",
      icon: <MessageCircle className="h-6 w-6" />,
      link: "https://discord.gg/your-discord",
      color: "bg-indigo-100 text-indigo-600",
      delay: 0.1
    },
    {
      title: "Email",
      description: "Get in touch",
      icon: <Mail className="h-6 w-6" />,
      link: "mailto:hello@triply.app",
      color: "bg-blue-100 text-blue-600",
      delay: 0.2
    },
    {
      title: "Buy us a coffee",
      description: "Support our work",
      icon: <Coffee className="h-6 w-6" />,
      link: "https://buymeacoffee.com/triply",
      color: "bg-amber-100 text-amber-600",
      delay: 0.3
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Connect With Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            We'd love to hear from you! Join our community, send us an email, or support our journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <a 
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-triply-500 focus:ring-offset-2 rounded-2xl"
            >
              <GlassCard 
                className="flex flex-col items-center text-center h-full opacity-0 animate-fade-in" 
                style={{ animationDelay: `${option.delay}s` }}
              >
                <div className={`h-16 w-16 mb-6 rounded-full ${option.color} flex items-center justify-center`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-muted-foreground">{option.description}</p>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
