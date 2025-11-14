import React from 'react';

import Product1 from '../assets/1.foto.jpg';
import Product2 from '../assets/2.foto.jpg';
import Product3 from '../assets/3.foto.jpg';
import Product4 from '../assets/4.foto.jpg';
import Product5 from '../assets/5.foto.jpg';
import Product6 from '../assets/1.foto.jpg';
import Product7 from '../assets/7.foto.jpg';
import Product8 from '../assets/8.foto.jpg';
import Product9 from '../assets/9.foto.jpg';
import Product10 from '../assets/3.foto.jpg';

export default function BestSellerProducts() {
  const products = [
    { id: 1, image: Product1, title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48' },
    { id: 2, image: Product2, title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48' },
    { id: 3, image: Product3, title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48' },
    { id: 4, image: Product4, title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48' },
    { id: 5, image: Product5, title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48' },
    { id: 6, image: Product6, title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48' },
    { id: 7, image: Product7, title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48' },
    { id: 8, image: Product8, title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48' },
    { id: 9, image: Product9, title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48' },
    { id: 10, image: Product10, title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48' },
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">

        {/* Başlık */}
        <div className="text-center mb-12" style={{ fontFamily: 'Montserrat' }}>
          <p className="text-[#737373] text-m leading-[30px] font-semibold mb-2  hidden md:block">Featured Products</p>
         <h2 className="text-3xl font-bold text-gray-900 mb-3 max-w-[200px] mx-auto text-center md:max-w-full">BESTSELLER PRODUCTS</h2>
          <p className="text-gray-500 text-sm max-w-[200px] md:max-w-full mx-auto md:mx-0">Problems trying to resolve the conflict between</p>
        </div>

        {/* Ürünler - Mobilde 5, Desktop'ta 10 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="group cursor-pointer px-2 md:px-0">
              
              {/* resim */}
              <div className="bg-gray-100 overflow-hidden mb-4 aspect-[3/4]">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* ürün detay */}
              <div className="text-center">
                <h3 className="text-gray-900 font-bold mb-2">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{product.department}</p>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 line-through">${product.originalPrice}</span>
                  <span className="text-green-600 font-bold">${product.salePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* İkinci 5 ürün - Sadece desktop'ta görüncek */}
        <div className="hidden md:grid md:grid-cols-5 gap-8 mb-12">
          {products.slice(5, 10).map((product) => (
            <div key={product.id} className="group cursor-pointer">
              
              {/* resim */}
              <div className="bg-gray-100 overflow-hidden mb-4 aspect-[3/4]">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* ürün detay */}
              <div className="text-center">
                <h3 className="text-gray-900 font-bold mb-2">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{product.department}</p>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 line-through">${product.originalPrice}</span>
                  <span className="text-green-600 font-bold">${product.salePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="border-2 px-8 py-3 font-bold transition-all duration-300 rounded-lg"
            style={{
              borderColor: '#23A6F0',
              color: '#23A6F0',
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = '#23A6F0';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#23A6F0';
            }}
          >
            LOAD MORE PRODUCTS
          </button>
        </div>

      </div>
    </div>
  );
}