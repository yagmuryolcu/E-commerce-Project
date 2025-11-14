import React from 'react';
import { Heart, ShoppingCart, Eye, Clock, BookOpen, BarChart2, Download, Star } from 'lucide-react';
import agacImg from '../assets/ağaç.jpg';
import rekImg from '../assets/renk.jpg';
import mobileImg1 from '../assets/featuredpostmobil.jpg';
import mobileImg2 from '../assets/featuredpostmobil2.jpg';

const ProductCard = ({ image, mobileImage, tag, rating, title, description, sales, originalPrice, salePrice, hours, lessons, progress, colors }) => (
  <div className="bg-white flex flex-col md:flex-row w-full max-w-sm md:max-w-none mx-auto shadow-sm md:shadow-none">
   
    {/*masaüstü resim*/}
    <div className="relative w-full md:w-64 flex-shrink-0 md:mr-5 hidden md:block">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {tag && (
        <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded">
          {tag}
        </span>
      )}
     
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
          <Heart size={18} />
        </button>
        <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
          <ShoppingCart size={18} />
        </button>
        <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
          <Eye size={18} />
        </button>
      </div>
    </div>

    {/* Mobil hali*/}
    <div className="relative w-full block md:hidden">
      <img src={mobileImage} alt={title} className="w-full h-64 object-cover" />
      {tag && (
        <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded">
          {tag}
        </span>
      )}
    </div>

    {/* masüstü içerik */}
    <div className="p-2 flex-col justify-between flex-1 hidden md:flex">
      <div>
        <div className="flex items-center justify-between mb-3 w-full">
          <span className="text-m font-bold mr-20 whitespace-nowrap" style={{ color: '#23A6F0' }}>
            English Department
          </span>
          <div className="flex items-center gap-1 bg-[#252B42] text-white text-m font-bold px-2 py-1 rounded-full">
            <Star size={16} className="text-yellow-500" fill="currentColor" stroke={0} />
            <span>{rating}</span>
          </div>
        </div>

        <h3 className="text-md font-bold text-gray-800 mb-2 max-w-full">{title}</h3>

        <p className="text-md font-medium text-[#737373] mb-3 max-w-[250px] whitespace-normal break-words">
          {description}
        </p>

        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <Download size={16} strokeWidth={1.5} className="text-gray-500" />
          <span>{sales} Sales</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#BDBDBD] line-through">${originalPrice}</span>
          <span className="text-[#23856D] font-bold text-lg">${salePrice}</span>
        </div>

        <div className="flex gap-2 mb-6">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={14} style={{ color: '#23A6F0' }} />
            <span>{hours}h</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} style={{ color: '#E77C40' }} />
            <span>{lessons} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart2 size={14} style={{ color: '#23856D' }} />
            <span>{progress}</span>
          </div>
        </div>
      </div>

      <button 
        className="max-w-[170px] border-2 text-lg mb-10 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition-colors duration-300"
        style={{ borderColor: '#23A6F0', color: '#23A6F0' }}
      >
        Learn More {'>'}
      </button>
    </div>

    {/* Mobil */}
    <div className="p-6 flex flex-col justify-between flex-1 block md:hidden">
      <div>
        <div className="flex items-center gap-3 mb-3 text-sm">
          <span className="text-[#23A6F0] font-bold">Google</span>
          <span className="text-gray-500">Trending</span>
          <span className="text-gray-500">New</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-snug">
          Loudest à la Madison #1 (L'integral)
        </h3>

        <p className="text-sm text-[#737373] mb-4 leading-relaxed">
          We focus on ergonomics and meeting you where you work. It's only a keystroke away.
        </p>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#23A6F0]" />
            <span>22 April 2021</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart2 size={16} className="text-[#23856D]" />
            <span>10 comments</span>
          </div>
        </div>
      </div>

      <button className="text-[#737373] font-bold text-sm flex items-center gap-2 hover:text-[#23A6F0] transition-colors">
        Learn More
        <span className="text-[#23A6F0]">→</span>
      </button>
    </div>
  </div>
);

const FeaturedPost = () => {
  const products = [
    {
      image: agacImg,
      mobileImage: mobileImg1,
      tag: 'Sale',
      rating: 4.9,
      title: 'Graphic Design',
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      sales: 15,
      originalPrice: '16.48',
      salePrice: '6.48',
      hours: 22,
      lessons: 64,
      progress: 'Progress',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    },
    {
      image: rekImg,
      mobileImage: mobileImg2,
      tag: 'Sale',
      rating: 4.9,
      title: 'Graphic Design',
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      sales: 15,
      originalPrice: '16.48',
      salePrice: '6.48',
      hours: 22,
      lessons: 64,
      progress: 'Progress',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
      
        <div className="text-center mb-12">
          <p className="text-lg font-bold tracking-wider mb-2" style={{ color: '#23A6F0' }}>
            Practice Advice 
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Posts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;