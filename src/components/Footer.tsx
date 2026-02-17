import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0c1844] text-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-400 p-2 rounded-full inline-flex">
                <GraduationCap className="h-6 w-6 text-[#0b0b0b]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Janak Secondary</h3>
                <p className="text-sm text-gray-400">English Boarding School</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Committed to providing excellence in education with a focus on academic achievement, 
              character development, and holistic growth of every student.
            </p>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              <Link 
                to="/privacy-policy"
                className="hover:text-white hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              © 2026 Janak Secondary. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-400 hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Janakpurdham, Nepal</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>+977 9844129184 \ 041-521536</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>janakschool2057@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 mb-6">
              <a href="https://wa.me/9779844129184" className="text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/17SNTcjzKt/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/janakschooljanakpur?igsh=MTBoNzAwd3dmaDhjZA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@janakschooljanakpur?si=N_yQmLMdQezeLXiG" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@janak.school?_t=ZS-90I9Wz4W1mz&_r=1" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                <Music2 className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Stay connected with us for updates on school activities and announcements.
            </p>
          </div>
        </div>
      </div>

      {/* Large background text - EXACT Interview Coder style */}
      <h1 className="text-center mt-20 text-[min(10vw,10rem)] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white/[0.01] to-white/[0.078] lg:-mb-5 select-none whitespace-nowrap tracking-[-0.04em] leading-[90.2%]">
        Janak School
      </h1>
    </footer>
  );
};

export default Footer;