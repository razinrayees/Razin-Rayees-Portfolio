import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { NAVIGATION_ITEMS } from '../../lib/constants';
import { scrollToSection } from '../../lib/utils';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      scrollToSection(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 bg-white z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col space-y-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    onClick={handleClick} 
                    className="hover:text-gray-600"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        <Logo />

        <a 
          href="#contact" 
          onClick={handleClick}
          className="px-6 py-2 bg-black text-white hover:bg-black/90 transition-colors"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
}