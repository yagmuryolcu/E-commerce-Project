import React from 'react';
import { Heart, ShoppingCart, Eye, Clock, BookOpen, BarChart2 } from 'lucide-react';
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';
import agacImg from '../assets/ağaç.jpg';
import rekImg from '../assets/renk.jpg';

const ProductCard = ({ image, tag, rating, title, description, sales, originalPrice, salePrice, hours, lessons, progress, colors }) => (
  <div className="bg-white  overflow-hidden flex flex-col md:flex-row w-full">
   
    <div className="relative w-full md:w-64 flex-shrink-0 mr-5">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {tag && (
        <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded">
          {tag}
        </span>
      )}
     
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center ">
          <Heart size={18} />
        </button>
        <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center ">
          <ShoppingCart size={18} />
        </button>
        <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center ">
          <Eye size={18} />
        </button>
      </div>
    </div>


    <div className="p-2 flex flex-col justify-between flex-1">
      <div>
   <div className="flex items-center justify-between mb-3 w-full">
  <span className="text-m font-bold" style={{ color: '#23A6F0' }}>
    English Department
  </span>
  <div className="flex items-center gap-1 bg-[#252B42] text-white text-m font-bold px-2 py-1 rounded-full">
    <Star size={16} className="text-yellow-500" fill="currentColor" stroke={0} />
    <span>{rating}</span>
  </div>
</div>

        {/* Başlık */}
        <h3 className="text-md font-bold text-gray-800 mb-2 max-w-full">{title}</h3>

        {/* Açıklama */}
        <p className="text-md font-medium text-[#737373] mb-3">{description}</p>

        {/* Satış Bilgisi */}
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
        <Download size={16} strokeWidth={1.5} className="text-gray-500" />
          <span>{sales} Sales</span>
        </div>

        {/* Fiyat */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-400 line-through">${originalPrice}</span>
          <span className="text-green-600 font-bold text-lg">${salePrice}</span>
        </div>

        {/* Renkler */}
        <div className="flex gap-2 mb-6">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full "
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
            <BarChart2 size={14} style={{ color: '#40BE6D' }} />
            <span>{progress}</span>
          </div>
        </div>
      </div>

    
      <button 
        className="w-full border-2 text-lg  mb-10 font-bold py-2 px-4 rounded-full hover:bg-blue-50 transition-colors duration-300"
        style={{ borderColor: '#23A6F0', color: '#23A6F0' }}
      >
        Learn More  {'>'}
      </button>
    </div>
  </div>
);

const FeaturedPost = () => {
  const products = [
    {
      image: agacImg,
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
      colors: ['#23A6F0', '#40BE6D', '#E77C40', '#252B42']
    },
    {
      image: rekImg,
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
      colors: ['#23A6F0', '#40BE6D', '#E77C40', '#252B42']
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
      
        <div className="text-center mb-12">
          <p className="text-lg font-bold  tracking-wider mb-2" style={{ color: '#23A6F0' }}>
            Practice Advice
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Posts
          </h2>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
