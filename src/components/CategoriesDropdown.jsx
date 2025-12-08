import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function CategoriesDropdown() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);

  // Kategorileri backend'den al
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:9000/workintech/ecommerce/management/api/categories');
        
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (category) => {
    const gender = category.gender === 'erkek' ? 'erkek' : category.gender === 'kadın' ? 'kadin' : 'unisex';
    navigate(`/shop/${gender}/${category.code}/${category.id}`);
    setIsOpen(false);
  };

  const groupedCategories = {
    kadın: categories.filter(cat => cat.gender === 'kadın'),
    erkek: categories.filter(cat => cat.gender === 'erkek'),
    unisex: categories.filter(cat => cat.gender === 'unisex')
  };

  return (
    <div ref={dropdownRef} className="relative" style={{ fontFamily: 'Montserrat' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] transition-colors font-semibold"
      >
        Shop
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-100 min-w-[600px] z-50">
          <div className="grid grid-cols-2 gap-6 p-6">
            <div>
              <h3 className="text-lg font-bold text-[#252B42] mb-4 pb-2 border-b border-gray-200">
                Kadın
              </h3>
              <div className="space-y-2">
                {groupedCategories.kadın.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="w-full text-left px-3 py-2 text-[#737373] hover:bg-[#23A6F0]/10 hover:text-[#23A6F0] rounded transition-colors font-medium"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#252B42] mb-4 pb-2 border-b border-gray-200">
                Erkek
              </h3>
              <div className="space-y-2">
                {groupedCategories.erkek.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="w-full text-left px-3 py-2 text-[#737373] hover:bg-[#23A6F0]/10 hover:text-[#23A6F0] rounded transition-colors font-medium"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {groupedCategories.unisex.length > 0 && (
            <div className="border-t border-gray-200 p-6 pt-4">
              <h3 className="text-sm font-bold text-[#737373] mb-3">
                Unisex
              </h3>
              <div className="flex flex-wrap gap-2">
                {groupedCategories.unisex.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="px-4 py-2 bg-gray-100 text-[#737373] hover:bg-[#23A6F0] hover:text-white rounded-full transition-colors text-sm font-medium"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}