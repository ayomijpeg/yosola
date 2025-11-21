import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Removed GraduationCap from import

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Programs', href: '#programs' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* --- LOGO SECTION START --- */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            
            {/* Replaced the Icon div with this Image tag */}
            <img 
              src="imgs/yosola_logo-removebg-preview.png"  // <--- CHANGE THIS to your actual filename
              alt="Yosola School Logo"
              className="h-12 w-12 object-contain bg-white rounded-lg p-1 shadow-sm" 
            />
            
            <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-school-900' : 'text-white'}`}>
              Yosola Schools
            </span>
          </div>
          {/* --- LOGO SECTION END --- */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#admissions"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${
                isScrolled
                  ? 'bg-school-600 text-white hover:bg-school-700'
                  : 'bg-accent-500 text-white hover:bg-accent-400'
              }`}
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-slate-900' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-slate-100">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-800 hover:text-school-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={() => setIsOpen(false)}
              className="text-center w-full px-6 py-3 rounded-lg bg-school-600 text-white font-semibold shadow-lg hover:bg-school-700"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
