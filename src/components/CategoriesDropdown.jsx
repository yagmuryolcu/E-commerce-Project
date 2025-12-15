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

  // Dropdown dışına tıklandığında kapat
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
    // ✅ DEĞİŞEN KISİM
    const gender = category.gender === 'kadın' ? 'kadin' : category.gender;
    navigate(`/shop/${gender}/${category.code}/${category.id}`);
    setIsOpen(false);
  };

  // Kategorileri cinsiyete göre grupla
  const groupedCategories = {
    kadın: categories.filter(cat => cat.gender === 'kadın'),
    erkek: categories.filter(cat => cat.gender === 'erkek'),
    unisex: categories.filter(cat => cat.gender === 'unisex')
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] transition-colors font-semibold"
      >
        Shop
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-50 max-h-[500px] overflow-y-auto">
          
          {/* Kadın Section */}
          {groupedCategories.kadın.length > 0 && (
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-[#252B42] mb-3 uppercase tracking-wide">
                Kadın
              </h3>
              <div className="space-y-1">
                {groupedCategories.kadın.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="w-full text-left px-3 py-2 text-[#737373] hover:bg-[#23A6F0]/10 hover:text-[#23A6F0] rounded transition-colors font-medium text-sm"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Erkek Section */}
          {groupedCategories.erkek.length > 0 && (
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-[#252B42] mb-3 uppercase tracking-wide">
                Erkek
              </h3>
              <div className="space-y-1">
                {groupedCategories.erkek.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="w-full text-left px-3 py-2 text-[#737373] hover:bg-[#23A6F0]/10 hover:text-[#23A6F0] rounded transition-colors font-medium text-sm"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Unisex Section */}
          {groupedCategories.unisex.length > 0 && (
            <div className="p-4">
              <h3 className="text-sm font-bold text-[#252B42] mb-3 uppercase tracking-wide">
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