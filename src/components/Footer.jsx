import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { name, role, email, github, linkedin, instagram } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-900 bg-slate-100/80 dark:bg-darkSec/80 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Info */}
        <div className="text-center md:text-left">
          <button 
            onClick={scrollToTop}
            className="text-lg font-bold tracking-wider text-slate-800 dark:text-white cursor-pointer focus:outline-none"
          >
            {name}
          </button>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {role}
          </p>
        </div>

        {/* Copywrite */}
        <p className="text-xs text-slate-400 dark:text-slate-500 order-last md:order-none">
          &copy; {currentYear} {name}. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${email}`}
            className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
