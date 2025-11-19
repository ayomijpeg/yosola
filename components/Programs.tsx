import React from 'react';
import { Baby, Book, GraduationCap, PenTool } from 'lucide-react';

const programs = [
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
    color: 'bg-school-500',
    img: '/imgs/yosola-primary.jpg'
  },
  {
    title: 'JSS 1–3',
    age: '12–14 Years',
    description: 'A challenging, subject‑based program fostering critical thinking and independence.',
    icon: <PenTool size={40} className="text-white" />,
    color: 'bg-accent-500',
    img: '/imgs/JSS 3 Graduation Cerimony.jpg'
  },
  {
    title: 'SSS 1–3',
    age: '15–17 Years',
    description: 'Pre‑tertiary specialization with science, arts, and commercial tracks for future leaders.',
    icon: <GraduationCap size={40} className="text-white" />,
    color: 'bg-school-900',
    img: '/imgs/Yosola prefects.jpg'
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-school-600 uppercase tracking-wide mb-2">Our Curriculum</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Educational Pathways</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-slate-100 group">
              <div className="lg:w-2/5 relative overflow-hidden h-48 lg:h-auto">
                 <img src={program.img} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                 <div className={`absolute inset-0 ${program.color} opacity-20 group-hover:opacity-10 transition-opacity`}></div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:rotate-3 transition-transform`}>
                  {program.icon}
                </div>
                <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-2xl font-bold text-slate-900">{program.title}</h4>
                    <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{program.age}</span>
                </div>
                <p className="text-slate-600 mb-6">{program.description}</p>
                <a href="#contact" className="inline-flex items-center font-semibold text-school-600 hover:text-school-800 transition-colors">
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
