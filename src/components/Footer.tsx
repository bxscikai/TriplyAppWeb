
import React from "react";
import { Plane, Github, Twitter, Instagram } from "lucide-react";
import { contactOptions } from "./ContactSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src="/triply_appicon.png" alt="Triply" className="h-10 w-10" />
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-semibold bg-gradient-to-r from-triply-600 to-triply-400 bg-clip-text text-transparent">
                Triply
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Your all-in-one travel companion. Sync flights, explore destinations,
              and travel smarter with Triply.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-colors hover:bg-triply-100 hover:text-triply-600"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-colors hover:bg-triply-100 hover:text-triply-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-colors hover:bg-triply-100 hover:text-triply-600"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-triply-600 transition-colors">Flight Sync</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-triply-600 transition-colors">Travel Tips</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-triply-600 transition-colors">Visa Checker</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-triply-600 transition-colors">Festival Explorer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              {contactOptions.map((option) => (
                <li key={option.title}>
                  <a href={option.link} className="text-muted-foreground hover:text-triply-600 transition-colors">
                    {option.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-muted-foreground">
          <p>© {currentYear} Triply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
