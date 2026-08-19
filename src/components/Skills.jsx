import React from 'react';
import * as Icons from 'lucide-react';
import { portfolioData } from '../data/portfolio';

// Dynamic icon mapper to resolve icon names from portfolioData to Lucide React components
const getIcon = (iconName) => {
  const IconComponent = Icons[iconName];
  if (IconComponent) {
    return <IconComponent className="w-6 h-6 transition-transform duration-300" />;
  }
  return <Icons.Cpu className="w-6 h-6" />; // Fallback
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Skills</h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto">
            A list of core tools, languages, and technologies I work with daily.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((categoryGroup, index) => (
            <div
              key={index}
              className="glass p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-lg font-bold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                {categoryGroup.category}
              </h3>

              {/* Items in Category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {categoryGroup.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="glass-card flex flex-col items-center justify-center p-5 rounded-xl hover:-translate-y-1 hover:text-primary-600 dark:hover:text-primary-400 select-none group"
                  >
                    <div className="p-3 mb-3 bg-slate-100 dark:bg-slate-800/85 text-slate-600 dark:text-slate-400 rounded-xl group-hover:bg-primary-500/10 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-all duration-300">
                      {getIcon(skill.icon)}
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
