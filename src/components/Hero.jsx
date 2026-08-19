import React from 'react';
import { Github, Linkedin, Instagram, ArrowRight, Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { name, role, tagline, github, linkedin, instagram, resumeUrl } = portfolioData.personalInfo;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Soft gradient glowing blobs in background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary-500/10 dark:bg-primary-500/5 blur-3xl animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl animate-glow-pulse pointer-events-none [animation-delay:2s]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center animate-fade-in-up">
        {/* Profile Intro Badge */}
        <span className="inline-block py-1.5 px-4 mb-6 rounded-full text-xs font-semibold tracking-wider uppercase border border-primary-500/20 bg-primary-500/5 text-primary-600 dark:text-primary-400">
          Aspiring Software Engineer
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary-600 via-indigo-500 to-violet-500 dark:from-primary-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
          {role}
        </h2>

        {/* College & Department Info */}
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium mb-6 max-w-xl mx-auto">
          Swami Vivekanand Institute of Engineering and Technology (SVIET), Chandigarh
        </p>

        {/* Professional Tagline */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {tagline}
        </p>

        {/* Buttons / Calls to Action */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white rounded-lg font-medium shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href={resumeUrl}
            download
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-300 dark:border-slate-850 hover:border-slate-400 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-850 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-300/50 dark:border-slate-800 rounded-full transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-850 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-300/50 dark:border-slate-800 rounded-full transition-all duration-300 hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-850 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-300/50 dark:border-slate-800 rounded-full transition-all duration-300 hover:-translate-y-1"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
