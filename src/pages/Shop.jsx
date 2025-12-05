import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shop1 from '../assets/shop1.jpg';
import shop2 from '../assets/shop2.jpg';
import shop3 from '../assets/shop3.jpg';
import shop4 from '../assets/shop4.jpg';
import shop5 from '../assets/shop5.jpg';
import BrandLogo from '../components/BrandLogo'; 

import shopfilter1 from '../assets/shop-filter1.jpg';
import shopfilter2 from '../assets/shop-filter2.jpg';
import shopfilter3 from '../assets/shop-filter3.jpg';
import shopfilter4 from '../assets/shop-filter4.jpg';
import shopfilter5 from '../assets/shop-filter5.jpg';
import shopfilter6 from '../assets/shop-filter6.jpg';
import shopfilter7 from '../assets/shop-filter7.jpg';
import shopfilter8 from '../assets/shop-filter8.jpg';
import shopfilter9 from '../assets/shop-filter9.jpg';
import shopfilter10 from '../assets/shop-filter10.jpg';
import shopfilter11 from '../assets/shop-filter11.jpg';
import shopfilter12 from '../assets/shop-filter12.jpg';

import { Grid, List, ChevronDown, SlidersHorizontal } from 'lucide-react';

const products = [
  { id: 1, img: shopfilter1, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 2, img: shopfilter2, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 3, img: shopfilter3, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 4, img: shopfilter4, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 5, img: shopfilter5, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 6, img: shopfilter6, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 7, img: shopfilter7, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 8, img: shopfilter8, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 9, img: shopfilter9, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 10, img: shopfilter10, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 11, img: shopfilter11, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
  { id: 12, img: shopfilter12, title: 'Graphic Design', department: 'English Department', oldPrice: 16.48, newPrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
];

export default function Shop() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPageMobile = 4;
  const totalPages = Math.ceil(products.length / itemsPerPageMobile);
  
  const startIndex = (currentPage - 1) * itemsPerPageMobile;
  const endIndex = startIndex + itemsPerPageMobile;
  const mobileProducts = products.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-4 w-full bg-white">
      <div className="px-8 bg-[#FAFAFA]">
        <h1 className="mt-8 text-2xl font-bold text-center mb-8" style={{ fontFamily: 'Montserrat' }}>
          Shop
        </h1>

        <nav className="text-sm text-gray-500 mx-auto text-center">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-gray-800 font-semibold">Shop</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 px-10 pb-8">
          {[shop1, shop2, shop3, shop4, shop5].map((img, index) => (
            <div key={index} className="relative w-full md:w-[250px] md:h-[230px] h-64 overflow-hidden">
              <img src={img} alt={`Clothes ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold">
                <span className="text-lg mb-5">CLOTHS</span>
                <span className="text-m opacity-98">5 Items</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-32 py-8">
          <div className="text-gray-600 font-bold text-lg" style={{ fontFamily: 'Montserrat', color: '#737373' }}>
            Showing all 12 results
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-bold text-base" style={{ fontFamily: 'Montserrat', color: '#737373' }}>
              Views:
            </span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 border rounded transition-all ${
                viewMode === 'grid' 
                  ? 'bg-white border-[#ECECEC] shadow-sm' 
                  : 'bg-transparent border-[#ECECEC] hover:bg-white'
              }`}
            >
              <Grid size={20} className={viewMode === 'grid' ? 'text-[#252B42]' : 'text-gray-400'} strokeWidth={2} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 border rounded transition-all ${
                viewMode === 'list' 
                  ? 'bg-white border-[#ECECEC] shadow-sm' 
                  : 'bg-transparent border-[#ECECEC] hover:bg-white'
              }`}
            >
              <List size={20} className={viewMode === 'list' ? 'text-[#252B42]' : 'text-gray-400'} strokeWidth={2} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-[#DDDDDD] rounded px-5 py-3 pr-12 text-[#737373] font-normal cursor-pointer focus:outline-none focus:border-gray-400 min-w-[200px]"
                style={{ fontFamily: 'Montserrat' }}
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" size={20} />
            </div>

            <button className="bg-[#23A6F0] hover:bg-[#1a8cd4] text-white font-bold px-8 py-3 rounded transition-colors" style={{ fontFamily: 'Montserrat' }}>
              Filter
            </button>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-8 px-4 md:px-10 pb-12">
          {products.map((product) => (
            <Link to="/product" key={product.id} className="bg-white flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative w-full h-[427px] overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center gap-2 py-6 px-6">
                <h5 className="text-[#252B42] font-bold text-base" style={{ fontFamily: 'Montserrat' }}>
                  {product.title}
                </h5>
                <p className="text-[#737373] font-bold text-sm" style={{ fontFamily: 'Montserrat' }}>
                  {product.department}
                </p>
                
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#BDBDBD] font-bold text-base line-through" style={{ fontFamily: 'Montserrat' }}>
                    ${product.oldPrice}
                  </span>
                  <span className="text-[#23856D] font-bold text-base" style={{ fontFamily: 'Montserrat' }}>
                    ${product.newPrice}
                  </span>
                </div>

                <div className="flex gap-2 mt-2">
                  {product.colors.map((color, idx) => (
                    <div 
                      key={idx}
                      className="w-4 h-4 rounded-full cursor-pointer"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:hidden gap-8 px-4 pb-12">
          {mobileProducts.map((product) => (
            <Link to="/product" key={product.id} className="bg-white flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative w-full h-[427px] overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center gap-2 py-6 px-6">
                <h5 className="text-[#252B42] font-bold text-base" style={{ fontFamily: 'Montserrat' }}>
                  {product.title}
                </h5>
                <p className="text-[#737373] font-bold text-sm" style={{ fontFamily: 'Montserrat' }}>
                  {product.department}
                </p>
                
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#BDBDBD] font-bold text-base line-through" style={{ fontFamily: 'Montserrat' }}>
                    ${product.oldPrice}
                  </span>
                  <span className="text-[#23856D] font-bold text-base" style={{ fontFamily: 'Montserrat' }}>
                    ${product.newPrice}
                  </span>
                </div>

                <div className="flex gap-2 mt-2">
                  {product.colors.map((color, idx) => (
                    <div 
                      key={idx}
                      className="w-4 h-4 rounded-full cursor-pointer"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 pb-12">
          <button 
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-4 py-4 border border-[#BDBDBD] rounded text-[#BDBDBD] font-bold hover:bg-gray-50 disabled:opacity-50" 
            style={{ fontFamily: 'Montserrat' }}
          >
            First
          </button>
          <button 
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-4 border rounded font-bold transition-colors ${
              currentPage === 1 
                ? 'border-[#23A6F0] bg-[#23A6F0] text-white' 
                : 'border-[#23A6F0] bg-white text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white'
            }`}
            style={{ fontFamily: 'Montserrat' }}
          >
            1
          </button>
          <button 
            onClick={() => setCurrentPage(2)}
            className={`px-4 py-4 border rounded font-bold transition-colors ${
              currentPage === 2 
                ? 'border-[#23A6F0] bg-[#23A6F0] text-white' 
                : 'border-[#23A6F0] bg-white text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white'
            }`}
            style={{ fontFamily: 'Montserrat' }}
          >
            2
          </button>
          <button 
            onClick={() => setCurrentPage(3)}
            className={`px-4 py-4 border rounded font-bold transition-colors ${
              currentPage === 3 
                ? 'border-[#23A6F0] bg-[#23A6F0] text-white' 
                : 'border-[#23A6F0] bg-white text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white'
            }`}
            style={{ fontFamily: 'Montserrat' }}
          >
            3
          </button>
          <button 
            onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage)}
            disabled={currentPage === totalPages}
            className="px-4 py-4 border border-[#23A6F0] rounded text-[#23A6F0] font-bold hover:bg-[#23A6F0] hover:text-white transition-colors disabled:opacity-50" 
            style={{ fontFamily: 'Montserrat' }}
          >
            Next
          </button>
        </div>
         <BrandLogo />
      </div>
    </div>
  );
}
