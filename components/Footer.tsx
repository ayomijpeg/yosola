import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
                <img 
              src="imgs/yosola_logo-removebg-preview.png"
              alt="Yosola School Logo"
              className="h-12 w-12 object-contain bg-white rounded-lg p-1 shadow-sm" 
            />
              <span className="text-2xl font-serif font-bold text-school-900">
                Yosola School
              </span>
            </div>
            <p className="text-slate-500 mb-6">
              Since February 2021, we have been committed to fostering academic excellence and character development in every student.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1BWmH973Ag/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-slate-400 hover:text-[#1877F2] shadow-sm border border-slate-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              {/* TikTok (Custom SVG Icon) */}
              <a 
                href="https://www.tiktok.com/@yosolaschool?_r=1&_t=ZS-93ayJ9Nv6Vc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-slate-400 hover:text-black shadow-sm border border-slate-100 transition-colors"
                aria-label="TikTok"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/yosolaschools?igsh=bDR4Mm95YnVhcXpl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-slate-400 hover:text-[#E4405F] shadow-sm border border-slate-100 transition-colors"
                aria-label="Instagram"
              >
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
