import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
                <img 
              src="imgs/yosola_logo-removebg-preview.png"  // <--- CHANGE THIS to your actual filename
              alt="Yosola School Logo"
              className="h-12 w-12 object-contain bg-white rounded-lg p-1 shadow-sm" 
            />
              {/* <div className="p-2 rounded-lg bg-school-900 text-white">
                <GraduationCap size={24} />
              </div> */}
              <span className="text-2xl font-serif font-bold text-school-900">
                Yosola School
              </span>
            </div>
            <p className="text-slate-500 mb-6">
              Since February 2021, we have been committed to fostering academic excellence and character development in every student.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-school-600 shadow-sm border border-slate-100 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-school-600 shadow-sm border border-slate-100 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-school-600 shadow-sm border border-slate-100 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-school-900 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#home" className="hover:text-school-600 transition-colors">Home</a></li>
              <li><a href="#programs" className="hover:text-school-600 transition-colors">Our Programs</a></li>
              <li><a href="#admissions" className="hover:text-school-600 transition-colors">Admissions</a></li>
              <li><a href="#testimonials" className="hover:text-school-600 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-school-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-lg font-bold text-school-900 mb-6">Contact Us</h4>
             <ul className="space-y-4 text-slate-600">
               <li className="flex items-start space-x-3">
                 <MapPin size={20} className="text-accent-500 mt-1 flex-shrink-0" />
                 <span>No, 17 Unity Cresent,<br/> Bamboo Bus Stop, <br/>  Along Nigeria Navy, <br/> 
                  School Of Music, <br/> Akeja, Osi Ota <br/> Ogun State.</span>
               </li>
               <li className="flex items-center space-x-3">
                 <Phone size={20} className="text-accent-500 flex-shrink-0" />
                 <span>+234 808 769 4737</span>
               </li>
               <li className="flex items-center space-x-3">
                 <Mail size={20} className="text-accent-500 flex-shrink-0" />
                 <span>yorsolaschools@gmail.com</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Yosola School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
