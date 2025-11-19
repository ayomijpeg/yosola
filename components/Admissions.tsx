import React from 'react';
import { CheckCircle } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <section id="admissions" className="py-24 bg-school-900 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Join the Yosola Family</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We are currently accepting applications for the upcoming academic session. Secure a spot for your child in an environment designed for success.
            </p>
            <ul className="space-y-4 mb-8">
              {['Small class sizes for personalized attention', 'Standardized British & Nigerian Curriculum', 'Safe and secure learning environment'].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-400 flex-shrink-0" size={24} />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/3 w-full bg-white p-8 rounded-2xl shadow-2xl text-slate-900">
            <h3 className="text-2xl font-bold mb-6 text-center">Request Information</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Parent's Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-school-500 focus:border-transparent" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-school-500 focus:border-transparent" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Grade Level</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-school-500 focus:border-transparent">
                  <option>Nursery</option>
                  <option>Primary</option>
                  <option>Secondary</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg shadow-lg transition-all mt-2">
                Inquire Now
              </button>
            </form>
            <p className="text-xs text-center text-slate-400 mt-4">
                Or use the AI chat widget to ask questions instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;