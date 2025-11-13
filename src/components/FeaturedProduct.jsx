import React from 'react';
import image1 from '../assets/gelecekurunler1.jpg';
import image2 from '../assets/gelecekurunler2.jpg'; 

const FeaturedProduct = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* Görsel Sütunu */}
          <div className="flex gap-4 lg:w-1/2 h-[500px] mr-5">
            <img 
              src={image1} 
              alt="Woman in striped shirt" 
              className="w-1/2 h-full object-cover" 
            />
            <img 
              src={image2} 
              alt="Woman in yellow jacket" 
              className="w-1/2 h-full object-cover" 
            />
          </div>

          {/* Metin Sütunu */}
          <div className="lg:w-1/2 space-y-6 lg:pl-12"style={{ fontFamily: 'Montserrat' }}>
            <p className="text-[#23A6F0] font-semibold text-lg tracking-wide">
              Featured Products
            </p>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 ">
              We love what we do
            </h2>
            
          <div className="space-y-8 text-[#737373] ">
        <p
            className="leading-[20px]"
            style={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '0.2px',
            maxWidth: '351px',
            }}
        >
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <p
            className="leading-[20px]"
            style={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '0.2px',
            maxWidth: '351px',
            }}
        >
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;