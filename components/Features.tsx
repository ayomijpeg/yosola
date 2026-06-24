import React from 'react';
import { BookOpen, Monitor, Heart, Briefcase, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Academic Excellence',
    description: 'We provide quality education with experienced teachers and excellent learning resources.',
    icon: <BookOpen size={32} className="text-school-500" />,
  },
  {
    title: 'Moral & Character Development',
    description: 'We nurture disciplined, responsible, and confident students through strong moral values and character-building programs.',
    icon: <Heart size={32} className="text-school-500" />,
  },
  {
    title: 'Modern Learning Environment',
    description: 'Our school offers well-equipped classrooms, science laboratories, ICT facilities, and a conducive environment for effective learning.',
    icon: <Monitor size={32} className="text-accent-500" />,
  },
  {
    title: 'Extracurricular & Vocational',
    description: 'Students develop their talents and leadership skills through sports, clubs, debates, and vocational entrepreneurship training (Garment making, Catering, Cosmetology, Phone repair, and Coding).',
    icon: <Briefcase size={32} className="text-accent-500" />,
  },
  {
    title: 'Secured Learning Environment',
    description: 'We maintain a safe campus and provide personalized attention to help every student reach their full potential.',
    icon: <ShieldCheck size={32} className="text-school-500" />,
  }
];

const Features: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. Distinct Mission Statement Section --- */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-serif mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium">
            To promote lifelong learning in an open and caring atmosphere that motivates students to be confident and responsible global citizens.
          </p>
        </div>

        {/* Optional subtle divider to cleanly separate the sections */}
        <div className="w-24 h-1 bg-school-100 mx-auto mb-20 rounded-full"></div>

        {/* --- 2. Our Core Values Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-3">What Defines Us</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-serif mb-6">Our Core Values</h3>
        </div>

        {/* Grid for the 5 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-school-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform self-start">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;
