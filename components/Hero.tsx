import React, { useState, useEffect } from 'react';
import { ArrowRight, LogIn } from 'lucide-react'; // Added LogIn icon

// 1. Update these paths to match exactly where your files are in the "public" folder.
const backgroundImages = [
  '/imgs/banner2.jpg', 
  '/imgs/banner1.jpg',
  '/imgs/Banner3.jpeg',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 2. Logic to change the image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-school-900">
      
      {/* 3. Background Images Loop */}
      {backgroundImages.map((imgSrc, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={imgSrc}
            alt={`Hero background ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* 4. Static Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-school-900/90 via-school-900/60 to-school-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 animate-fade-in-up">
          Building Brilliant <br/> <span className="text-accent-400">Minds, Together</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Collaborative classrooms, innovative programs, and a supportive family–that’s the Yosola promise.
        </p>
        
        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#programs"
            className="w-full sm:w-auto px-8 py-4 bg-accent-500 hover:bg-accent-400 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-accent-500/30 flex items-center justify-center"
          >
            Explore Programs
            <ArrowRight className="ml-2" size={20} />
          </a>

          {/* New School Portal Button */}
          <a
            href="https://school-manager-navy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-school-900 hover:bg-slate-100 rounded-full font-semibold text-lg transition-all shadow-lg flex items-center justify-center"
          >
            School Portal
            <LogIn className="ml-2" size={20} />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <span className="text-sm uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;