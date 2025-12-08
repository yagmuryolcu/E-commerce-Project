// CategoriesSection.jsx - Ana sayfada gösterilecek top 5 kategori
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const imageMapper = {
  '/assets/shop-filter1.jpg': shopfilter1,
  '/assets/shop-filter2.jpg': shopfilter2,
  '/assets/shop-filter3.jpg': shopfilter3,
  '/assets/shop-filter4.jpg': shopfilter4,
  '/assets/shop-filter5.jpg': shopfilter5,
  '/assets/shop-filter6.jpg': shopfilter6,
  '/assets/shop-filter7.jpg': shopfilter7,
  '/assets/shop-filter8.jpg': shopfilter8,
  '/assets/shop-filter9.jpg': shopfilter9,
  '/assets/shop-filter10.jpg': shopfilter10,
  '/assets/shop-filter11.jpg': shopfilter11,
  '/assets/shop-filter12.jpg': shopfilter12,
};

export default function CategoriesSection() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:9000/workintech/ecommerce/management/api/categories');
        
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        
        const data = await response.json();
        console.log('📂 Categories Response:', data);
        console.log('📂 First Category:', data[0]);
        
        const sortedCategories = data.sort((a, b) => b.rating - a.rating).slice(0, 5);
        setCategories(sortedCategories);
      } catch (error) {
        console.error(' Error fetching categories:', error);
        setCategories([
          { id: 1, title: 'Erkek Giyim', code: 'men-clothing', img: '/assets/shop-filter1.jpg', rating: 4.5, gender: 'erkek' },
          { id: 2, title: 'Kadın Giyim', code: 'women-clothing', img: '/assets/shop-filter2.jpg', rating: 4.8, gender: 'kadın' },
          { id: 3, title: 'Spor Giyim', code: 'sports-clothing', img: '/assets/shop-filter3.jpg', rating: 4.6, gender: 'unisex' },
          { id: 4, title: 'Casual', code: 'casual', img: '/assets/shop-filter4.jpg', rating: 4.3, gender: 'unisex' },
          { id: 5, title: 'Şık Giyim', code: 'chic-clothing', img: '/assets/shop-filter5.jpg', rating: 4.7, gender: 'kadın' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    //  shop/:gender/:categoryName/:categoryId
    const gender = category.gender === 'erkek' ? 'erkek' : category.gender === 'kadın' ? 'kadin' : 'unisex';
    navigate(`/shop/${gender}/${category.code}/${category.id}`);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16" style={{ fontFamily: 'Montserrat' }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4">
          Shop by Category
        </h2>
        <p className="text-[#737373] text-lg">
          Explore our top-rated categories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((category) => {
          const imageUrl = imageMapper[category.img] || shopfilter1;
          console.log(' Category:', category.title, 'Image URL:', category.img, 'Mapped:', imageUrl);
          
          return (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <span className="text-sm font-bold text-[#252B42]">{category.rating}</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {category.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90 capitalize">
                    {category.gender}
                  </span>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-[#23A6F0] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}