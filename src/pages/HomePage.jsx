import React from 'react';
import HeaderPicture from '../components/HeaderPicture';
import ServiceSection from '../components/ServiceSection';
import BestSellerProducts from '../components/BestSellerProducts';
import TopProducts from '../components/TopProducts';
import FeaturedProduct from '../components/FeaturedProduct';
import FeaturedPost from '../components/FeaturedPost';
import BrandLogo from '../components/BrandLogo';

export default function HomePage() {
  return (
    <div className="w-full">
    
     <HeaderPicture/>
     <BrandLogo/>
     <TopProducts />
     <BestSellerProducts/>
     <FeaturedProduct/>
     <ServiceSection/>
     <FeaturedPost/>
     
    </div>
  );
}