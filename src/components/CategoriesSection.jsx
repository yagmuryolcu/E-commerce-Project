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
        
        // Rating'e göre sırala ve ilk 5'ini al
        const sortedCategories = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5);
        
        setCategories(sortedCategories);
      } catch (error) {
        
        // Fallback data
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
    // ✅ DEĞİŞEN KISİM
    const gender = category.gender === 'kadın' ? 'kadin' : category.gender;
    navigate(`/shop/${gender}/${category.code}/${category.id}`);
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4">
          Shop by Category
        </h2>
        <p className="text-[#737373] text-lg">
          Explore our top-rated categories
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {categories.map((category) => {
          const imageUrl = imageMapper[category.img] || shopfilter1;
          
          return (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-[#23A6F0] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ {category.rating}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm opacity-90 capitalize">
                    {category.gender}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}