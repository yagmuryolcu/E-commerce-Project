import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div style={{ backgroundColor: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h2 className="text-2xl font-bold" style={{ color: '#252B42' }}>
            Bandage
          </h2>
          <div className="flex gap-5">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Facebook size={24} fill="#23A6F0" style={{ color: '#23A6F0' }} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Instagram size={24} style={{ color: '#23A6F0' }} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Twitter size={24} fill="#23A6F0" style={{ color: '#23A6F0' }} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info kısmı */}
            <div>
              <h3 className="font-bold mb-5" style={{ color: '#252B42' }}>
                Company Info
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal kısmı */}
            <div>
              <h3 className="font-bold mb-5" style={{ color: '#252B42' }}>
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Features kısmı */}
            <div>
              <h3 className="font-bold mb-5" style={{ color: '#252B42' }}>
                Features
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    Business Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    User Analytic
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    Unlimited Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources  kısmı*/}
            <div>
              <h3 className="font-bold mb-5" style={{ color: '#252B42' }}>
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    IOS & Android
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    Watch a Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-bold hover:opacity-90 transition-opacity" style={{ color: '#737373' }}>
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Get In Touch kısmı */}
            <div>
              <h3 className="font-bold mb-5" style={{ color: '#252B42' }}>
                Get In Touch
              </h3>
              <div className="flex md:flex-row">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 text-sm flex-1 border md:border-r-0 focus:outline-none"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    borderColor: '#E6E6E6',
                    color: '#737373'
                  }}
                />
                <button 
                  className="px-4 py-3 text-sm text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: '#23A6F0' }}
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs font-semibold mt-2" style={{ color: '#737373' }}>
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-sm font-bold text-center md:text-left max-w-[200px] md:max-w-none mx-auto md:mx-0" style={{ color: '#737373' }}>
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}