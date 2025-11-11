import React from 'react';
import ProductImage1 from '../assets/product-3.jpg';
import ProductImage2 from '../assets/product-2.jpg';
import ProductImage3 from '../assets/product-1.jpg';

const ProductCard = ({ image, size = 'large' }) => {
  return (
    <div className={`relative overflow-hidden group ${size === 'large' ? 'row-span-2' : ''}`}>
      <img 
        src={image} 
        alt="Top Product of the Week" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Content */}
      <div 
        className="absolute bottom-8 left-8 text-white p-6"
        style={{ backgroundColor: '#2D8BC0BF' }}
      >
        <p className="text-xl font-semibold mb-2 tracking-wide">Top Product Of the Week</p>
        <button className="border-2 border-white px-6 py-2 text-sm font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
          EXPLORE ITEMS
        </button>
      </div>
    </div>
  );
};

export default function TopProducts() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
          {/* Sol büyük kart */}
          <ProductCard image={ProductImage1} size="large" />
          
          {/* Sağ üst kart */}
          <ProductCard image={ProductImage2} size="small" />
          
          {/* Sağ alt kart */}
          <ProductCard image={ProductImage3} size="small" />
        </div>
      </div>
    </div>
  );
}