import React from 'react';
import { Github } from 'lucide-react';
import { projects } from '../../data/projects';
import { SITE_CONFIG } from '../../lib/constants';

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%]">
            PROJECTS
          </h2>
          <a 
            href={SITE_CONFIG.author.github} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View GitHub profile"
          >
            <Github size={48} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">{project.type}</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">
                  <a 
                    href={project.link || 'https://www.google.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-lg mb-8 hidden md:block">{project.description}</p>
                {project.link && project.link !== '#' && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"                    
                    className="inline-block px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors"
                  >
                    LIVE
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}