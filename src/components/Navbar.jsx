import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const scrollPosition = window.scrollY + 120; // Scroll offset
      const sections = navItems.map((item) => document.getElementById(item.id));
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-4 glass'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Initials */}
        <button
          onClick={() => scrollTo('home')}
          className="text-xl font-bold tracking-wider text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span className="bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-indigo-300 font-extrabold text-2xl">
            {portfolioData.personalInfo.initials}
          </span>
          <span className="hidden sm:inline text-slate-800 dark:text-slate-200 font-medium text-sm">
            | {portfolioData.personalInfo.name}
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer focus:outline-none ${
                    activeSection === item.id
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300 transition-all cursor-pointer focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Navbar Buttons */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] py-6 px-6 glass border-b border-slate-200 dark:border-slate-800/80 flex flex-col gap-4 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left py-2 text-base font-medium transition-colors cursor-pointer focus:outline-none ${
                    activeSection === item.id
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
