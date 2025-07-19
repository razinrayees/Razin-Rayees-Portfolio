import React from 'react';
import { Button } from '../ui/Button';
import { SITE_CONFIG } from '../../lib/constants';

export function Quote() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-8 bg-gradient-to-r from-blue-400 to-cyan-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <p className="text-white text-[28px] md:text-[40px] leading-[110%] md:leading-[79%] max-w-3xl mb-8 md:mb-0">
          As an <span className="font-['Be_Vietnam'] font-bold">enthusiastic developer</span>, I'm passionate about exploring <span className="font-['Be_Vietnam'] font-bold">new coding perspectives</span> and pushing innovation.
        </p>
        <a 
          href={SITE_CONFIG.author.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Be_Vietnam'] font-semibold text-[20px] md:text-[25px] leading-[100%] tracking-[-0.09em] px-8 md:px-12 py-3 md:py-4 bg-white text-black hover:bg-opacity-90 transition-colors"
        >
          CONNECT
        </a>
      </div>
    </section>
  );
}