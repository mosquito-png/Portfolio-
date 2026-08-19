import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Education</h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6">
          {education.map((item, index) => (
            <div key={index} className="mb-12 relative pl-8 sm:pl-12 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300 shadow-sm">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Card Contents */}
              <div className="glass p-6 sm:p-8 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                {/* Year Badge */}
                <span className="inline-flex items-center gap-1.5 py-1 px-3 mb-4 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.duration}
                </span>

                {/* Degree Name */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 leading-tight">
                  {item.degree}
                </h3>

                {/* Institution */}
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {item.college}
                </h4>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
