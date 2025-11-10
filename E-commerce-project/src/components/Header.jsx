import React from 'react';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, Search, ShoppingCart, Heart, ChevronDown, User } from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full">
      {/* Lacivert kısım*/}
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:(225)555-0118" className="flex items-center gap-2 hover:text-gray-300">
                <Phone size={16} />
                <span>(225) 555-0118</span>
              </a>
              <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-2 hover:text-gray-300">
                <Mail size={16} />
                <span>michelle.rivera@example.com</span>
              </a>
            </div>
            
            <div className="hidden md:block text-center font-semibold">
              Follow Us and get a chance to win 80% off
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm">Follow Us :</span>
              <div className="flex gap-2">
                <a href="#" className="hover:text-gray-300"><Instagram size={16} /></a>
                <a href="#" className="hover:text-gray-300"><Youtube size={16} /></a>
                <a href="#" className="hover:text-gray-300"><Facebook size={16} /></a>
                <a href="#" className="hover:text-gray-300"><Twitter size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Beyaz kısım*/}
      <div className="bg-white ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Bandage yazı*/}
            <div className="text-2xl font-bold text-slate-800">
              Bandage
            </div>

            {/* Navbar */}
            <nav className="flex items-center gap-6">
              <a href="#Home" className="text-gray-600 hover:text-blue-300 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-300 font-medium flex items-center gap-1">
                Shop <ChevronDown size={16} />
              </a>
              <a href="#About" className="text-gray-600 hover:text-blue-300 font-medium">About</a>
              <a href="#Blog" className="text-gray-600 hover:text-blue-300 font-medium">Blog</a>
              <a href="#Contact" className="text-gray-600 hover:text-blue-300 font-medium">Contact</a>
              <a href="#Pages" className="text-gray-600 hover:text-blue-300 font-medium">Pages</a>
            </nav>

            {/* Alışveriş sepeti kısım sağ */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#23A6F0] hover:text-blue-300 font-medium flex items-center gap-1">
                <User size={18} />
                <span className="hidden sm:inline">Login / Register</span>
              </a>
              <button className="text-[#23A6F0] hover:text-blue-300">
                <Search size={20} />
              </button>
              <button className="text-[#23A6F0] hover:text-blue-300 flex items-center gap-1">
                <ShoppingCart size={20} />
                <span className="text-sm">1</span>
              </button>
              <button className="text-[#23A6F0] hover:text-blue-300 flex items-center gap-1">
                <Heart size={20} />
                <span className="text-sm">1</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}