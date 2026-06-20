import React, { useState } from 'react';
import { CheckCircle, Loader2, CheckCircle2 } from 'lucide-react';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    grade: 'Nursery'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Sending data directly to the school's email using FormSubmit's AJAX API
      const response = await fetch('https://formsubmit.co/ajax/yorsolaschools@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.parentName,
          email: formData.email,
          grade: formData.grade,
          _subject: "New Admission Inquiry for Yosola Schools", // Sets the email subject line
          _template: "table" // Formats the email nicely into a table
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ parentName: '', email: '', grade: 'Nursery' }); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <section id="admissions" className="py-24 bg-school-900 text-white relative overflow-hidden">
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
            
            {status === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Request Sent!</h4>
                <p className="text-slate-600">We will be in touch with you shortly regarding admissions.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-school-600 font-medium hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Parent's Name</label>
                  <input 
                    type="text" 
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-school-500 focus:border-transparent" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-school-500 focus:border-transparent" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Grade Level</label>
                  <select 
                   title='Level'
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-school-500 focus:border-transparent"
                  >
                    <option value="Nursery">Nursery</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                  </select>
                </div>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please check your connection and try again.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg shadow-lg transition-all mt-2 flex justify-center items-center disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={20} /> Processing...
                    </>
                  ) : 'Inquire Now'}
                </button>
              </form>
            )}
            
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
