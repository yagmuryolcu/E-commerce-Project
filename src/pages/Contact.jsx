import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import contactImg from '../assets/contact.png';

export default function Contact() {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-12  md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - İçerik */}
          <div className="space-y-8">
            <p className="text-m font-bold text-[#252B42] uppercase tracking-wide text-center lg:text-left" style={{ fontFamily: 'Montserrat' }}>
              CONTACT US
            </p>
            
            <h2 className="text-5xl md:text-5xl font-bold text-center lg:text-left text-[#252B42]" style={{ fontFamily: 'Montserrat' }}>
              Get in touch today!
            </h2>
            
            <p className="text-lg text-[#737373] max-w-md" style={{ fontFamily: 'Montserrat' }}>
              We know how large objects will act, but things on a small scale
            </p>
            
            <div className="space-y-4" style={{ fontFamily: 'Montserrat' }}>
              <p className="text-[#252B42] font-bold text-lg">
                Phone : <span className="font-semibold">+451 215 215</span>
              </p>
              
              <p className="text-[#252B42] font-bold text-lg">
                Fax : <span className="font-semibold">+451 215 215</span>
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
              >
                <Twitter size={28} />
              </a>
              
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
              >
                <Facebook size={28} />
              </a>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
              >
                <Instagram size={28} />
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
          
          {/* Sağ taraf - Resim */}
          <div className="relative overflow-visible ">
            {/* Dekoratif arka plan elemanları - Resimden ÖNCE */}
            <div className="absolute top-1/2 left-1/2  -mt-14 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[400px] md:h-[400px] bg-[#FFE9EA] rounded-full"></div>
            
            <img
              src={contactImg}
              alt="contact"
              className="w-[500px] h-[500px] object-cover rounded-lg relative z-10"
            />
            
            <div className="absolute top-20 -right-4 w-4 h-4 bg-[#23A6F0] rounded-full z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}