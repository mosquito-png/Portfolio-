import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-darkSec/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Projects</h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full" />
        </div>

        {projects.length === 0 ? (
          /* Premium Placeholder */
          <div className="max-w-md mx-auto glass p-8 sm:p-10 rounded-2xl text-center shadow-lg border border-slate-200 dark:border-slate-800">
            <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-primary-500 to-indigo-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-primary-500/20">
              <Code2 className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Projects coming soon</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              I am currently expanding my programming knowledge and developing software projects. Practical engineering applications and builds will be displayed here soon.
            </p>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col group border border-slate-200 dark:border-slate-850"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-650">
                      <Code2 className="w-12 h-12" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-450 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="py-1 px-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link Actions */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/80">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-350 transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
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
