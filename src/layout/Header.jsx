import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import CategoriesDropdown from '../components/CategoriesDropdown';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isShopPage = location.pathname === '/shop';
    const isTeamPage = location.pathname === '/team';
    const isPricingPage = location.pathname === '/pricing';
    const isAboutPage = location.pathname === '/about';
    const isContactPage = location.pathname === '/contact';

    // Redux'tan sepet verilerini al
    const cartItems = useSelector(state => state.shoppingCart.cart);
    const cartCount = cartItems.reduce((total, item) => total + item.count, 0);
    
    // Redux'tan wishlist verilerini al
    const wishlistItems = useSelector(state => state.wishlist?.items || []);
    const wishlistCount = wishlistItems.length;

    
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
            <Link to="/" className="text-2xl font-bold text-slate-800">
              Bandage
            </Link>

            <nav className="hidden md:flex items-center gap-6 ml-0">
              <Link to="/" className="text-gray-600 hover:text-blue-300 font-medium">Home</Link>
              
              <CategoriesDropdown />
              
              <Link to="/about" className="text-gray-600 hover:text-blue-300 font-medium">About</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-300 font-medium">Blog</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-300 font-medium">Contact</Link>
              <Link to="/team" className="text-gray-600 hover:text-blue-300 font-medium">Pages</Link>
            </nav>

            {/* Alışveriş sepeti sağ */}
            <div className="flex items-center gap-4">
          {(isTeamPage || isContactPage || isPricingPage || isAboutPage) ? (
                <>
                <Link to="/login" className="text-[#23A6F0] hover:text-blue-400 font-bold text-sm hidden md:block">
                Login
              </Link>
                  <Link to="/register" className="bg-[#23A6F0] text-white font-bold text-sm px-6 py-3 rounded hover:bg-blue-500 hidden md:flex items-center gap-2">
                Become a member
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
                  {/* Mobil için hamburger menü */}
                  <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </>
              ) : (
                // Diğer sayfalar için mevcut yapı
                <>
                  <div className="hover:text-blue-300 font-medium flex items-center gap-1 text-black md:text-[#23A6F0]">
                  <User size={18} />
                  <span className="hidden md:flex items-center gap-1">
                    <Link to="/login" className="hover:underline">
                      Login
                    </Link>
                    <span>/</span>
                    <Link to="/register" className="hover:underline">
                      Register
                    </Link>
                  </span>
                 
                </div>
                  <button className="hover:text-blue-300 text-black md:text-[#23A6F0]">
                    <Search size={20} />
                  </button>
                  <Link to="/shopping-cart" className="hover:text-blue-300 flex items-center gap-1 text-black md:text-[#23A6F0] relative">
                    <ShoppingCart size={20} />
                    {cartCount > 0 && (
                      <span className="text-sm hidden md:block">{cartCount}</span>
                    )}
                    {/* Mobile için badge */}
                    {cartCount > 0 && (
                      <span className="md:hidden absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                  <Link to="/wishlist" className="hidden md:flex hover:text-blue-300 items-center gap-1 text-black md:text-[#23A6F0] relative">
                    <Heart size={20} />
                    {wishlistCount > 0 && (
                      <>
                        <span className="text-sm hidden md:block">{wishlistCount}</span>
                        <span className="md:hidden absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                          {wishlistCount}
                        </span>
                      </>
                    )}
                  </Link>
                  <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobil Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              {/* Shop sayfası için özel menü */}
              {isShopPage ? (
                <nav className="flex flex-col items-center gap-6 mt-12 mb-8">
                  <Link to="/" className="text-gray-600 hover:text-blue-300 font-medium text-2xl" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link to="/shop" className="text-gray-600 hover:text-blue-300 font-medium text-2xl" onClick={() => setMobileMenuOpen(false)}>
                    Shop
                  </Link>
                  <Link to="/about" className="text-gray-600 hover:text-blue-300 font-medium text-2xl" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </Link>
                  <Link to="/team" className="text-gray-600 hover:text-blue-300 font-medium text-2xl" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </Link>
                  <Link to="/contact" className="text-gray-600 hover:text-blue-300 font-medium text-2xl" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                  <Link to="/pages" className="text-gray-600 hover:text-blue-300 font-medium text-2xl" onClick={() => setMobileMenuOpen(false)}>
                    Pages
                  </Link>
                  
                  {/* Mavi İkonlar */}
                  <div className="flex flex-col items-center gap-6 mt-6">
                   <div
                        className="text-[#23A6F0] hover:text-blue-300 font-medium flex items-center gap-2 text-xl mt-6"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <User size={20} />

                        <Link to="/login">Login</Link>
                        <span>/</span>
                        <Link to="/register">Register</Link>
                       </div>

                    <button className="text-[#23A6F0] hover:text-blue-300">
                      <Search size={28} />
                    </button>
                    <Link to="/shopping-cart" className="text-[#23A6F0] hover:text-blue-300 flex items-center gap-2 relative" onClick={() => setMobileMenuOpen(false)}>
                      <ShoppingCart size={28} />
                      <span className="text-lg">{cartCount}</span>
                    </Link>
                    <Link to="/wishlist" className="text-[#23A6F0] hover:text-blue-300 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                      <Heart size={28} />
                      {wishlistCount > 0 && (
                        <span className="text-lg">{wishlistCount}</span>
                      )}
                    </Link>
                  </div>
                </nav>
              ) : (
                /* Diğer sayfalar için mevcut menü */
                <nav className="flex flex-col items-center gap-3 mt-6">
                  <Link to="/" className="text-gray-600 hover:text-blue-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link to="/product" className="text-gray-600 hover:text-blue-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Product
                  </Link>
                  <Link to="/pricing" className="text-gray-600 hover:text-blue-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Pricing
                  </Link>
                  <Link to="/contact" className="text-gray-600 hover:text-blue-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </nav>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}