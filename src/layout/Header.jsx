import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, Search, ShoppingCart, Heart, ChevronDown, User, Menu, X } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  return (
    <div className="w-full">
      {/* Lacivert kısım*/}
      <div className="bg-slate-800 text-white py-5 hidden md:block">
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

            {/* Navbar (desktop) */}
            <nav className="hidden md:flex items-center gap-6 ml-0">
            <Link to="/" className="text-gray-600 hover:text-blue-300 font-medium">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-blue-300 font-medium flex items-center gap-1">
              Shop <ChevronDown size={16} />
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-300 font-medium">About</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-300 font-medium">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-300 font-medium">Contact</Link>
            <Link to="/pages" className="text-gray-600 hover:text-blue-300 font-medium">Pages</Link>
          </nav>


            {/* Alışveriş sepeti sağ */}
            <div className="flex items-center gap-4 text-black md:text-[#23A6F0]">
                <a href="#" className=" hover:text-blue-300 font-medium flex items-center gap-1">
                <User size={18} />
                <span className="hidden md:block">Login / Register</span>
              </a>
              <button className=" hover:text-blue-300">
                <Search size={20} />
              </button>
              <button className="hover:text-blue-300 flex items-center gap-1">
                <ShoppingCart size={20} />
                <span className="text-sm hidden md:block">1</span>
              </button>
              <button className="hidden md:flex hover:text-blue-300 flex items-center gap-1">
                <Heart size={20} />
                <span className="text-sm hidden md:block">1</span>
              </button>
                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
         {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
            </div>
          </div>

          {/*  Mobilde*/}
          <nav className="flex flex-col md:hidden items-center gap-3 mt-6">
          <Link to="/" className="text-gray-600 hover:text-blue-300 font-medium">Home</Link>
          <Link to="/product" className="text-gray-600 hover:text-blue-300 font-medium">Product</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-300 font-medium">Pricing</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-300 font-medium">Contact</Link>
        </nav>
        </div>
      </div>
    </div>
  );
}
