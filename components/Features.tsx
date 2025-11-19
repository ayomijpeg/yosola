import React from 'react';
import { BookOpen, Users, Monitor, Heart } from 'lucide-react';

const features = [
  {
    title: 'Quality Teaching',
    description: 'Our highly trained teachers ensure excellent delivery across all subjects, fostering academic brilliance.',
    icon: <BookOpen size={32} className="text-school-500" />,
  },
  {
    title: 'Modern Facilities',
    description: 'Equipped with modern classrooms, ICT centers, and science labs to support practical learning.',
    icon: <Monitor size={32} className="text-accent-500" />,
  },
  {
    title: 'Character Development',
    description: 'We go beyond academics to instill strong moral values, leadership, and social responsibility.',
    icon: <Heart size={32} className="text-school-500" />,
  },
  {
    title: 'Extra-Curriculars',
    description: 'We offer clubs, sports, and creative opportunities to ensure a holistic educational experience.',
    icon: <Users size={32} className="text-accent-500" />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-school-600 uppercase tracking-wide mb-2">What We Offer</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Empowering Futures</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            At Yosola School, we believe in nurturing well-rounded individuals through a blend of academics and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-school-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;