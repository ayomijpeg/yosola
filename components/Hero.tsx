import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// 1. Update these paths to match exactly where your files are in the "public" folder.
// Note: You had "imgs" for one and "img" for the other. Make sure folders exist!
const backgroundImages = [
  '/imgs/banner2.jpg', 
  '/imgs/banner1.jpg',
  '/imgs/Banner3.jpeg',
  // Add a 3rd one if you want, or it will just toggle between these two
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

      {/* 4. Static Overlay (Keeps text readable regardless of image) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-school-900/90 via-school-900/60 to-school-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 animate-fade-in-up">
          Building Brilliant <br/> <span className="text-accent-400">Minds, Together</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Collaborative classrooms, innovative programs, and a supportive family–that’s the Yosola promise.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#programs"
            className="px-8 py-4 bg-accent-500 hover:bg-accent-400 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-accent-500/30 flex items-center"
          >
            Explore Programs
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-all"
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
