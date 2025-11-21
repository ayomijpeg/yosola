import React from 'react';
import { Baby, Book, GraduationCap, PenTool, Hammer, CheckCircle2 } from 'lucide-react';

// 1. We separate the Standard Academic tracks
const academicPrograms = [
  {
    title: 'Nursery 1–3',
    age: '3–5 Years',
    description: 'A nurturing environment where little ones explore, play, and build foundational skills.',
    icon: <Baby size={40} className="text-white" />,
    color: 'bg-pink-500',
    img: '/imgs/yosola-nursery.jpg'
  },
  {
    title: 'Primary 1–6',
    age: '6–11 Years',
    description: 'Core academics balanced with STEAM and the arts—preparing learners for success.',
    icon: <Book size={40} className="text-white" />,
    color: 'bg-blue-500', // Changed to standard blue since school-500 might not be defined in my context, revert to yours
    img: '/imgs/yosola-primary.jpg'
  },
  {
    title: 'JSS 1–3',
    age: '12–14 Years',
    description: 'A challenging, subject‑based program fostering critical thinking and independence.',
    icon: <PenTool size={40} className="text-white" />,
    color: 'bg-purple-500', // Changed for visual distinction
    img: '/imgs/JSS 3 Graduation Cerimony.jpg'
  },
  {
    title: 'SSS 1–3',
    age: '15–17 Years',
    description: 'Pre‑tertiary specialization with science, arts, and commercial tracks for future leaders.',
    icon: <GraduationCap size={40} className="text-white" />,
    color: 'bg-indigo-900',
    img: '/imgs/Yosola prefects.jpg'
  },
];

// 2. We define the Vocational data specifically with a list of skills
const vocationalData = {
  title: 'Vocational Studies Center',
  age: 'Open to All Ages',
  description: 'At Yosola Schools, we equip students with real-world expertise. Our vocational wing offers hands-on training designed to foster entrepreneurship and self-reliance.',
  skills: ['Hospitality & Catering', 'Fashion Design & Germent Making', 'ICT ', 'Cosmetology'],
  icon: <Hammer size={32} className="text-white" />, // New Icon
  color: 'bg-amber-600', // Industrial/Work color
  img: '/imgs/catering.jpg' // MAKE SURE TO UPDATE THIS IMAGE PATH
};

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">Our Curriculum</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Educational Pathways</h3>
        </div>

        {/* ACADEMIC GRID (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {academicPrograms.map((program, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-slate-100 group h-full">
              <div className="lg:w-2/5 relative overflow-hidden h-56 lg:h-auto">
                 <img src={program.img} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                 <div className={`absolute inset-0 ${program.color} opacity-20 group-hover:opacity-10 transition-opacity`}></div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:rotate-3 transition-transform`}>
                  {program.icon}
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h4 className="text-2xl font-bold text-slate-900">{program.title}</h4>
                    <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-full whitespace-nowrap">{program.age}</span>
                </div>
                <p className="text-slate-600 mb-6 line-clamp-3">{program.description}</p>
                <a href="#contact" className="mt-auto inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                  View Curriculum &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* VOCATIONAL SECTION (Full Width Feature) */}
        <div className="relative w-full bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 group">
          <div className="flex flex-col md:flex-row">
            
            {/* Content Side */}
            <div className="md:w-1/2 lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 ${vocationalData.color} rounded-lg flex items-center justify-center shadow-md`}>
                  {vocationalData.icon}
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900">{vocationalData.title}</h4>
                  <p className="text-sm font-medium text-amber-600 uppercase tracking-wider">Practical Skills for Life</p>
                </div>
              </div>

              <p className="text-slate-600 text-lg mb-8">{vocationalData.description}</p>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {vocationalData.skills.map((skill, i) => (
                  <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 text-sm font-medium border border-amber-100">
                    <CheckCircle2 size={14} className="mr-1.5" />
                    {skill}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors w-fit">
                Enquire About Trade Skills
              </a>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2 lg:w-2/5 relative min-h-[300px] md:min-h-full">
              <img 
                src={vocationalData.img} 
                alt="Students learning vocational skills" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient Overlay to ensure text readability if stack changes or for style */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-transparent md:bg-gradient-to-r md:from-white md:via-transparent"></div>
              <div className="absolute inset-0 bg-amber-600 opacity-10 mix-blend-multiply"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;
