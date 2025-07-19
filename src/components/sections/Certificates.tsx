import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../../data/certificates';
import type { CertificateProvider } from '../../types';

function CertificateProviderCard({ provider, logo, subtitle, courses }: CertificateProvider) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] border border-[#2C2C2C] shadow-md shadow-[#ffffff0d]"
      style={{
        background: 'linear-gradient(270deg, #1A1A1A 0%, #2A2A2A 100%)',
      }}
    >
      <div 
        className="p-6 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-3">
            <img 
              src={logo} 
              alt={provider}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold">{provider}</h3>
            <p className="text-gray-400">{subtitle}</p>
          </div>
        </div>
        <Award className={`text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} size={24} />
      </div>

      {isExpanded && (
        <div
          className="border-t border-[#3B3B3B] backdrop-blur-sm"
          style={{
            background: 'linear-gradient(270deg, #1A1A1A 0%, #2A2A2A 100%)',
          }}
        >
          {courses.map((course, index) => (
            <div key={index} className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-white text-xl font-medium">{course.title}</h4>
              </div>
              <div className="grid gap-3">
                {course.certificates.map((cert, certIndex) => (
                  <div 
                    key={certIndex} 
                    className="flex justify-between items-center py-3 px-4 bg-[#111111] rounded-lg hover:bg-[#1C1C1C] transition-colors"
                  >
                    <span className="text-gray-300">{cert.title}</span>
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Certificates() {
  return (
    <section id="certificates" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] tracking-[-0.09em] text-white">
            CERTIFICATES
          </h2>
          <Award size={48} className="text-white" />
        </div>
        
        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <CertificateProviderCard 
              key={index}
              {...cert}
            />
          ))}
        </div>
      </div>
    </section>
  );
}