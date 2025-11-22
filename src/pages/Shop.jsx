import React from 'react';
import { Link } from 'react-router-dom';
import shop1 from '../assets/shop1.jpg';
import shop2 from '../assets/shop2.jpg';
import shop3 from '../assets/shop3.jpg';
import shop4 from '../assets/shop4.jpg';
import shop5 from '../assets/shop5.jpg';

export default function Shop() {
  return (
    <div className="flex flex-col  gap-4 w-full px-8 bg-[#FAFAFA]">
      <h1 className="mt-8 text-2xl font-bold text-center mb-8" style={{ fontFamily: 'Montserrat' }}>
        Shop
      </h1>

      <nav className="text-sm text-gray-500 mx-auto">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <span className="mx-2">{'>'}</span>
        <span className="text-gray-800 font-semibold">Shop</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 px-10">
        {[shop1, shop2, shop3, shop4, shop5].map((img, index) => (
          <div key={index} className="relative  w-full md:w-[250px] md:h-[230px] h-64   overflow-hidden">
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
  );
}
