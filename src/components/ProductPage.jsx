import React from 'react';
import { Clock, BookOpen, ArrowRight, Heart, ShoppingCart, Eye, Download } from 'lucide-react';
import heroImg from '../assets/productpage1.jpg';
import productPage2 from '../assets/productpage2.jpg';
import productPage3 from '../assets/productpage3.jpg';
import productPage4 from '../assets/productpage4.jpg';
import productPage5 from '../assets/productpage5.jpg';
import productPage6 from '../assets/productpage.jpg';

export default function ProductPage() {
  const products = [
    {
      id: 1,
      image: productPage2,
      department: 'English Department',
      title: 'Graphic Design',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      sales: '15 Sales',
      originalPrice: '$16.48',
      discountPrice: '$6.48',
      hours: '22hr 30min',
      lessons: '64 Lessons',
      badge: 'Sale',
      rating: 4.9,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    },
    {
      id: 2,
      image: productPage3,
      department: 'English Department',
      title: 'Graphic Design',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      sales: '15 Sales',
      originalPrice: '$16.48',
      discountPrice: '$6.48',
      hours: '22hr 30min',
      lessons: '64 Lessons',
      badge: 'Sale',
      rating: 4.9,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    }
  ];

  const products2 = [
    {
      id: 3,
      image: productPage5,
      department: 'English Department',
      title: 'Graphic Design',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      sales: '15 Sales',
      originalPrice: '$16.48',
      discountPrice: '$6.48',
      hours: '22hr 30min',
      lessons: '64 Lessons',
      badge: 'Sale',
      rating: 4.9,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    },
    {
      id: 4,
      image: productPage6,
      department: 'English Department',
      title: 'Graphic Design',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      sales: '15 Sales',
      originalPrice: '$16.48',
      discountPrice: '$6.48',
      hours: '22hr 30min',
      lessons: '64 Lessons',
      badge: 'Sale',
      rating: 4.9,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* BİRİNCİ BÖLÜM */}
      <div className="md:hidden w-full h-[450px]">
        <img 
          src={heroImg} 
          alt="Featured Products"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:hidden container mx-auto px-4 py-12 text-center">
        <p className="text-[#737373] text-sm font-bold mb-2">Featured Products</p>
        <h1 className="text-2xl font-bold text-[#252B42] mb-4">
          Featured Products
        </h1>
            <p className="text-[#737373] text-sm  font-medium leading-relaxed max-w-[250px] md:max-w-[350px] mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="hidden md:flex">
        {/* sol kısım */}
        <div className="w-1/2 h-screen  mt-10">
          <img 
            src={heroImg} 
            alt="Featured Products"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* sağ */}
        <div className="w-1/2 px-12 py-12">
          <div className="text-center mb-12">
            <p className="text-[#737373] text-sm font-bold mb-2">Featured Products</p>
            <h1 className="text-[40px] font-bold text-[#252B42] mb-4">
              Featured Products
            </h1>
            <p className="text-[#737373] text-sm  font-medium leading-relaxed">
              Problems trying to resolve the conflict between<br />
              the two major realms of Classical physics:<br />
              Newtonian mechanics
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12  px-20 max-w-[900px] ">
            {products.map((product) => (
              <div key={product.id} className="bg-white overflow-hidden flex flex-col">

                <div className="relative w-full">
                  <img 
                    src={product.image} 
                    alt={product.title}
            className="w-full h-[280px] md:h-[300px] object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-2.5 py-1.5 rounded">
                      {product.badge}
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                      <Heart className="w-4 h-4 text-[#252B42]" />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                      <ShoppingCart className="w-4 h-4 text-[#252B42]" />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                      <Eye className="w-4 h-4 text-[#252B42]" />
                    </button>
                  </div>
                </div>

                <div className="py-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#23A6F0] text-xs font-bold">{product.department}</span>
                    <div className="flex items-center gap-1 bg-[#252B42] text-white px-2 py-0.5 rounded text-xs font-bold">
                      <span className="text-[#F3CD03]">★</span>
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#252B42] mb-2">{product.title}</h3>
                  <p className="text-[#737373] text-xs mb-3 leading-relaxed line-clamp-2">{product.description}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#737373]">
                      <Download className="w-3.5 h-3.5 text-[#23A6F0]" />
                      <span className="font-bold">{product.sales}</span>
                    </div>
                    <div className="flex gap-1">
                      {product.colors.map((color, idx) => (
                        <div 
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

            <div className="flex items-center gap-0.5 text-xs text-[#737373] mb-3 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#23A6F0]" />
                      <span>{product.hours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#E77C40]" />
                      <span>{product.lessons}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M2 2h4v4H2V2zm6 0h6v1H8V2zm0 3h6v1H8V5zM2 8h4v4H2V8zm6 0h6v1H8V8zm0 3h6v1H8v-1z"/>
                      </svg>
                      <span className="font-bold">Progress</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3  mt-auto">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#BDBDBD] text-sm font-bold line-through">{product.originalPrice}</span>
                      <span className="text-[#40BB15] font-bold text-sm">{product.discountPrice}</span>
                    </div>
                    <button className="flex items-center gap-1 text-[#23A6F0] font-bold text-xs px-4 py-2 rounded-full border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BİRİNCİ BÖLÜM MOBİL KARTLAR */}
      <div className="md:hidden container mx-auto px-16 pb-12 space-y-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white overflow-hidden">
            <div className="relative w-full">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-[280px] object-cover"
              />
              {product.badge && (
                <div className="absolute top-5 left-5 bg-[#E74040] text-white text-sm font-bold px-3 py-2 rounded">
                  {product.badge}
                </div>
              )}
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-[#252B42]" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50">
                  <ShoppingCart className="w-4 h-4 text-[#252B42]" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50">
                  <Eye className="w-4 h-4 text-[#252B42]" />
                </button>
              </div>
            </div>

            <div className="py-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#23A6F0] text-sm font-bold">{product.department}</span>
                <div className="flex items-center gap-1 bg-[#252B42] text-white px-2.5 py-1 rounded text-xs font-bold">
                  <span className="text-[#F3CD03]">★</span>
                  <span>{product.rating}</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-[#252B42] mb-3">{product.title}</h3>
              <p className="text-[#737373] text-sm mb-4 leading-relaxed">{product.description}</p>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-2 text-sm text-[#737373]">
                  <Download className="w-4 h-4 text-[#23A6F0]" />
                  <span className="font-bold">{product.sales}</span>
                </div>
                <div className="flex gap-1">
                  {product.colors.map((color, idx) => (
                    <div 
                      key={idx}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-[#737373] mb-5">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#23A6F0]" />
                  <span>{product.hours}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#E77C40]" />
                  <span>{product.lessons}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2 2h4v4H2V2zm6 0h6v1H8V2zm0 3h6v1H8V5zM2 8h4v4H2V8zm6 0h6v1H8V8zm0 3h6v1H8v-1z"/>
                  </svg>
                  <span className="font-bold">Progress</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#BDBDBD] text-base font-bold line-through">{product.originalPrice}</span>
                  <span className="text-[#40BB15] font-bold text-base">{product.discountPrice}</span>
                </div>
                <button className="flex items-center gap-2 text-[#23A6F0] font-bold text-sm px-5 py-3 rounded-full border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ikinci kısım- büyük resim sağda */}
        <div className="md:hidden w-full h-[450px] mb-10">
        <img 
          src={productPage4} 
          alt="Featured Products"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:hidden container mx-auto px-4 py-12 text-center">
        <p className="text-[#737373] text-sm font-bold mb-2">Featured Products</p>
        <h1 className="text-2xl font-bold text-[#252B42] mb-4">
          Featured Products
        </h1>
        <p className="text-[#737373] text-sm font-medium leading-relaxed max-w-[250px] md:max-w-[350px] mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

    
      <div className="hidden md:flex">
        <div className="w-1/2 px-12 py-12">
          <div className="text-center mb-12">
            <p className="text-[#737373] text-sm font-bold mb-2">Featured Products</p>
            <h1 className="text-[40px] font-bold text-[#252B42] mb-4">
              Featured Products
            </h1>
            <p className="text-[#737373] text-sm font-medium leading-relaxed">
              Problems trying to resolve the conflict between<br />
              the two major realms of Classical physics:<br />
              Newtonian mechanics
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 px-20 max-w-[900px]">
            {products2.map((product) => (
              <div key={product.id} className="bg-white overflow-hidden flex flex-col">
                <div className="relative w-full">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-[280px] md:h-[300px] object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-2.5 py-1.5 rounded">
                      {product.badge}
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                      <Heart className="w-4 h-4 text-[#252B42]" />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                      <ShoppingCart className="w-4 h-4 text-[#252B42]" />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                      <Eye className="w-4 h-4 text-[#252B42]" />
                    </button>
                  </div>
                </div>

                <div className="py-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#23A6F0] text-xs font-bold">{product.department}</span>
                    <div className="flex items-center gap-1 bg-[#252B42] text-white px-2 py-0.5 rounded text-xs font-bold">
                      <span className="text-[#F3CD03]">★</span>
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#252B42] mb-2">{product.title}</h3>
                  <p className="text-[#737373] text-xs mb-3 leading-relaxed line-clamp-2">{product.description}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#737373]">
                      <Download className="w-3.5 h-3.5 text-[#23A6F0]" />
                      <span className="font-bold">{product.sales}</span>
                    </div>
                    <div className="flex gap-1">
                      {product.colors.map((color, idx) => (
                        <div 
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-xs text-[#737373] mb-3 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#23A6F0]" />
                      <span>{product.hours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#E77C40]" />
                      <span>{product.lessons}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M2 2h4v4H2V2zm6 0h6v1H8V2zm0 3h6v1H8V5zM2 8h4v4H2V8zm6 0h6v1H8V8zm0 3h6v1H8v-1z"/>
                      </svg>
                      <span className="font-bold">Progress</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#BDBDBD] text-sm font-bold line-through">{product.originalPrice}</span>
                      <span className="text-[#40BB15] font-bold text-sm">{product.discountPrice}</span>
                    </div>
                    <button className="flex items-center gap-1 text-[#23A6F0] font-bold text-xs px-4 py-2 rounded-full border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* sağ kısım - büyük resim */}
        <div className="w-1/2 h-screen mt-10">
          <img 
            src={productPage4} 
            alt="Featured Products"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* İKİNCİ BÖLÜM MOBİL KARTLAR */}
      <div className="md:hidden container mx-auto px-16 pb-12 space-y-8">
        {products2.map((product) => (
          <div key={product.id} className="bg-white overflow-hidden">
            <div className="relative w-full">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-[280px] object-cover"
              />
              {product.badge && (
                <div className="absolute top-5 left-5 bg-[#E74040] text-white text-sm font-bold px-3 py-2 rounded">
                  {product.badge}
                </div>
              )}
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-[#252B42]" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50">
                  <ShoppingCart className="w-4 h-4 text-[#252B42]" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50">
                  <Eye className="w-4 h-4 text-[#252B42]" />
                </button>
              </div>
            </div>

            <div className="py-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#23A6F0] text-sm font-bold">{product.department}</span>
                <div className="flex items-center gap-1 bg-[#252B42] text-white px-2.5 py-1 rounded text-xs font-bold">
                  <span className="text-[#F3CD03]">★</span>
                  <span>{product.rating}</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-[#252B42] mb-3">{product.title}</h3>
              <p className="text-[#737373] text-sm mb-4 leading-relaxed">{product.description}</p>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-2 text-sm text-[#737373]">
                  <Download className="w-4 h-4 text-[#23A6F0]" />
                  <span className="font-bold">{product.sales}</span>
                </div>
                <div className="flex gap-1">
                  {product.colors.map((color, idx) => (
                    <div 
                      key={idx}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-[#737373] mb-5">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#23A6F0]" />
                  <span>{product.hours}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#E77C40]" />
                  <span>{product.lessons}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2 2h4v4H2V2zm6 0h6v1H8V2zm0 3h6v1H8V5zM2 8h4v4H2V8zm6 0h6v1H8V8zm0 3h6v1H8v-1z"/>
                  </svg>
                  <span className="font-bold">Progress</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#BDBDBD] text-base font-bold line-through">{product.originalPrice}</span>
                  <span className="text-[#40BB15] font-bold text-base">{product.discountPrice}</span>
                </div>
                <button className="flex items-center gap-2 text-[#23A6F0] font-bold text-sm px-5 py-3 rounded-full border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}