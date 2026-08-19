import React from 'react';
import { BookOpen, MapPin, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { name, bio, college, location, educationDuration } = portfolioData.personalInfo;

  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-darkSec/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">About Me</h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Profile Card */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="glass p-6 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 flex items-center justify-center text-white font-extrabold text-3xl mb-6 shadow-md shadow-primary-500/20">
                GK
              </div>
              
              <h3 className="text-xl font-bold mb-1 text-slate-800 dark:text-white">{name}</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-6">
                B.Tech Student (CSE)
              </p>

              {/* Quick Info Grid */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-350">College</p>
                    <p className="text-slate-500 dark:text-slate-400">{college}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-350">Timeline</p>
                    <p className="text-slate-500 dark:text-slate-400">2025 – 2029</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-350">Location</p>
                    <p className="text-slate-500 dark:text-slate-400">{location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio / Goals */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Academic Background & Interests
              </h4>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Continuous Learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-650 dark:text-indigo-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Practical Projects Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
