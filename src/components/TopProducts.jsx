import React from 'react';
import ProductImage1 from '../assets/product-3.jpg';
import ProductImage2 from '../assets/product-2.jpg';
import ProductImage3 from '../assets/product-1.jpg';

const ProductCard = ({ image, size = 'large', title = 'Top Product Of the Week', titleSize = 'text-xl', padding = 'py-16 px-20'  ,  extraClasses = ''  }) => {
  return (
    <div className={`relative overflow-hidden group ${size === 'large' ? 'row-span-2' : ''}`}>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* İçerik */}
      <div 
        className={`absolute bottom-0 left-0 text-white ${padding}`}
        style={{ backgroundColor: '#2D8BC0BF' }}
      >
        <p className={`${titleSize} font-semibold mb-4 tracking-wide ${extraClasses} `}>
          {title}
        </p>
        <button className="border-2 border-white rounded-md px-6 py-2 text-m mt-4 font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[650px]">
          
          {/* Sol büyük kart */}
          <ProductCard 
            image={ProductImage1} 
            size="large" 
            title="Top Product Of the Week"
            titleSize="text-3xl"
            padding="py-16 px-44 pl-10"
              extraClasses="whitespace-normal break-words max-w-[220px]"

            
          />
          
          {/* Sağ üst kart */}
          <ProductCard 
            image={ProductImage2} 
            size="small" 
            title="Top Product Of the Week"
            titleSize="text-xl"
            padding="py-12 px-24 pl-10"
          />
          
          {/* Sağ alt kart */}
          <ProductCard 
            image={ProductImage3} 
            size="small" 
            title="Top Product Of the Week"
            titleSize="text-xl"
            padding="py-12 px-24 pl-10"
          />
        </div>
      </div>
    </div>
  );
}
