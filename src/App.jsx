import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleBg from './components/ParticleBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Check local storage or default to dark theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="bg-lightBg text-slate-800 dark:bg-darkBg dark:text-slate-100 min-h-screen relative font-sans transition-colors duration-300 selection:bg-primary-500 selection:text-white">
      {/* Visual background overlays */}
      <ParticleBg />
      <CustomCursor />

      {/* Floating Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
