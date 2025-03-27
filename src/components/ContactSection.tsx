
import React from "react";
import GlassCard from "./GlassCard";
export const contactOptions = [

  {
    title: "Buy us a coffee",
    icon: <img src="/coffee.svg" alt="Buy us a coffee" className="h-6 w-6" />,
    link: "https://buymeacoffee.com/triplyapp",
    color: "bg-amber-100 text-amber-600",
    delay: 0.3
  },
  {
    title: "Submit a festival",
    icon: <img src="/festival.svg" alt="Festival" className="h-6 w-6" />,
    link: "https://docs.google.com/forms/d/1SLoCGkwo_MFlzR0Vd_gW5NSFm4c-EyHuwlFuuLhoZ14/viewform?edit_requested=true",
    color: "bg-blue-100 text-blue-600",
    delay: 0.2
  },
  {
    title: "Send us an email",
    icon: <img src="/idea.svg" alt="Email" className="h-6 w-6" />,
    link: "https://docs.google.com/forms/d/1SLoCGkwo_MFlzR0Vd_gW5NSFm4c-EyHuwlFuuLhoZ14/viewform?edit_requested=true",
    color: "bg-blue-100 text-blue-600",
    delay: 0.2
  },
  {
    title: "Rate us on App Store",
    icon: <img src="/star.svg" alt="App Store" className="h-6 w-6" />,
    link: "https://apps.apple.com/app/id1664000000",
    color: "bg-amber-100 text-amber-600",
    delay: 0.3
  },
  {
    title: "Discord",
    icon:<img src="/discord.svg" alt="Discord" className="h-6 w-6" />,
    link: "https://discord.com/invite/tfTD4Gsk",
    color: "bg-indigo-100 text-indigo-600",
    delay: 0.1
  },
  {
    title: "Reddit",
    icon:<img src="/reddit.svg" alt="Reddit" className="h-6 w-6" />,
    link: "https://reddit.com/r/triply",
    color: "bg-indigo-100 text-indigo-600",
    delay: 0.1
  },


];

const ContactSection = () => {

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
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
