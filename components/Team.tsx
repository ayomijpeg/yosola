import React from 'react';

const team = [
  {
    name: 'Mr. Ajayi Olusola ',
    role: 'Chairman',
    desc: 'Dedicated leader with  years of experience in education. Advocates for holistic student development.',
    image: '/imgs/chairman.jpg'
  },
  {
    name: 'Mr. Samson Okpojivi',
    role: 'Principal',
    desc: 'Innovative educator specializing in curriculum development. Committed to creating impactful learning experiences.',
    image: '/imgs/Principa Yosola School.jpg'
  },
  {
    name: 'Mrs. Kareem ',
    role: 'Head Mistress',
    desc: 'Experienced head teacher with a passion for student success. Focuses on fostering a positive school culture.',
    image: '/imgs/HM Yosola Nusry  and Primary School Yosola.jpg'
  },
   {
    name: 'Mrs. Oluwayomi Ajayi ',
    role: 'Director of Vocational Studies',
    desc: 'Passionate about vocational education with  years of experience. Empowers candidates with practical skills.',
    image: '/imgs/vocation_head.jpg'
  }

];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-school-600 uppercase tracking-wide mb-2">Our Educators</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Dedicated Professionals</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <div key={idx} className="group text-center">
              <div className="relative mb-6 mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-school-500 transition-colors">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
              <p className="text-school-600 font-medium mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed px-4">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
