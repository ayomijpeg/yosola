// SocialCard.tsx
import React from 'react';
import { GraduationCap } from 'lucide-react';

const SocialCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-10">
      {/* This container is exactly 1200x630 (Standard OG Image Size) */}
      <div 
        id="social-preview"
        className="relative w-[1200px] h-[630px] bg-white overflow-hidden flex flex-col"
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <img 
            src="/imgs/banner1.jpg" // Make sure this path matches one of your existing banner images
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Blue Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-school-900/95 via-school-900/80 to-transparent"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 h-full flex flex-col justify-center px-24 text-white max-w-4xl">
          
          {/* Logo Area */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-white p-3 rounded-xl shadow-lg">
               {/* Make sure this points to your logo */}
               <img src="imgs/yosola_logo-removebg-preview.png" alt="Logo" className="h-16 w-16 object-contain" />
            </div>
            <span className="text-4xl font-serif font-bold tracking-wide">Yosola School</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-7xl font-bold font-serif leading-tight mb-6 drop-shadow-md">
            Building Brilliant <br/>
            <span className="text-accent-400">Minds, Together.</span>
          </h1>

          {/* Subtext */}
          <p className="text-3xl text-slate-200 font-light mb-12 max-w-2xl">
            Admissions are now open for the 2025 Academic Session. Nursery • Primary • Secondary
          </p>

          {/* Fake Button */}
          <div className="inline-flex items-center bg-accent-500 text-white px-10 py-4 rounded-full text-2xl font-semibold shadow-xl w-max">
            Apply Now &rarr;
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
