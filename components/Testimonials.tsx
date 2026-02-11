import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mrs Adebayo',
    role: 'Parent',
    content: 'I have a Daughter in Yosola Schools, since I enrolled my daughter into the school, I have noticed a lot of improvement in her academics and social life. Yosola should continue the good work and God will continue to raise them higher than their expectations in Jesus name.',
  },
  {
    name: 'Mr Akpojivi Samson',
    role: 'Principal',
    content: ' Our school has been wonderful since it was established in the year 2021. We have been providing vocational learning even before the government made it part of the curriculum. We also have a vocational school that teaches skills like Garment making, Catering and hospitality and coding which entails front end and back end development. I also want to tell you that Yosola Schools is approved by the government for the writing of waec and neco. Our vocational school is also approved by the government. Recently, we trained over 300 students for the ogun state government under the program, Ogun state skills fund(OSF). So, we are doing very well, let me just say that the sky will not limit us.',
    //image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
  // {
  //   name: 'Karen Weiss',
  //   role: 'Concerned Parent',
  //   content: 'Choosing Yosola School was one of the best decisions I made. The school’s innovative approach combines core subjects with practical skills perfectly.',
  //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  // }
];

const DUMMY_AVATAR = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-school-900 text-white relative overflow-hidden">
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-accent-400 font-bold tracking-widest uppercase text-sm mb-3">What Parents Say</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold">Discover the Yosola Difference</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Quote className="text-accent-500 mb-6" size={40} />
              <p className="text-lg text-slate-200 mb-8 italic">"{item.content}"</p>
              <div className="flex items-center space-x-4">
                <img 
                  src={item.image || DUMMY_AVATAR} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent-500" 
                />
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
