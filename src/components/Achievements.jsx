import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 bg-slate-100/50 dark:bg-darkSec/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Achievements & Certifications</h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full" />
        </div>

        {achievements.length === 0 ? (
          /* Premium Placeholder */
          <div className="max-w-md mx-auto glass p-8 sm:p-10 rounded-2xl text-center shadow-lg border border-slate-200 dark:border-slate-800">
            <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-primary-500 to-indigo-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-primary-500/20">
              <Award className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Achievements coming soon</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Achievements and certifications will be added soon as I continue expanding my skillset and earning industry credentials.
            </p>
          </div>
        ) : (
          /* Achievements Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col group border border-slate-200 dark:border-slate-850"
              >
                {/* Certificate Image preview */}
                <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-slate-800">
                      <ShieldCheck className="w-12 h-12" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white group-hover:text-primary-650 dark:group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-3 block">
                    {item.organization}
                  </span>

                  {/* Description */}
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Bottom details */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-slate-850">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    
                    {item.credentialUrl && (
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary-650 hover:text-primary-750 dark:text-primary-400 dark:hover:text-primary-350 transition-colors cursor-pointer"
                      >
                        Verify
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
