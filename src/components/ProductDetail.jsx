import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import productdetail1 from '../assets/productdetail1.jpg';
import productdetail2 from '../assets/productdetail2.jpg';
import productdetail3 from '../assets/productdetail3.jpg';

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState('description'); 


  
  const images = [
    productdetail1, 
    productdetail2
  ];

  const colors = [
    { name: 'Blue', code: '#23A6F0' },
    { name: 'Green', code: '#2DC071' },
    { name: 'Orange', code: '#E77C40' },
    { name: 'Navy', code: '#252B42' }
  ];

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sol taraf - Resimler */}
        <div className="space-y-4 px-6 ">
          {/* Ana resim */}
          <div className="relative bg-gray-100  overflow-hidden aspect-square">
            <img
              src={images[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover"
            />
            
            {/* Sol ok */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full "
            >
              <ChevronLeft size={72} className="text-[#FAFAFA]" />
            </button>
            
            {/* Sağ ok */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2  p-3 rounded-full "
            >
              <ChevronRight size={72} className="text-[#FAFAFA]" />
            </button>
          </div>

          {/* Thumbnail'ler */}
          <div className="flex gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-24 h-24  overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
               <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-full object-cover transition-opacity ${
                    selectedImage === index ? 'opacity-50' : 'opacity-100'
                }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Sağ taraf - Ürün bilgileri */}
        <div className="space-y-6 px-12" style={{ fontFamily: 'Montserrat' }}>
          {/* Ürün başlığı */}
          <h1 className="text-2xl font-medium text-[#252B42] "> Floating Phone</h1>

          {/* Yıldızlar ve yorumlar */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} size={20} fill="#F3CD03" className="text-[#F3CD03]" />
              ))}
              <Star size={20} className="text-[#F3CD03]" />
            </div>
            <span className="text-[#737373] font-semibold">10 Reviews</span>
          </div>

          {/* Fiyat */}
          <div className="text-3xl font-bold text-gray-900">
            $1,139.33
          </div>

          {/* Stok durumu */}
          <div className="flex items-center gap-2">
            <span className="text-[#737373] font-semibold">Availability :</span>
            <span className="text-[#23A6F0] font-semibold">In Stock</span>
          </div>

          {/* Açıklama */}
          <p className="text-[#858585]  max-w-[291px]  md:max-w-[460px]  leading-relaxed  border-b border-gray-400 py-6 font-medium">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>

          {/* Renkler */}
          <div className="flex items-center gap-3 py-4">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === index ? 'border-gray-800' : 'border-transparent'
                }`}
                style={{ backgroundColor: color.code }}
                aria-label={color.name}
              />
            ))}
          </div>

          {/* Butonlar */}
          <div className="flex items-center gap-3 pt-4" style={{ fontFamily: 'Montserrat' }}>
            <button className="bg-[#23A6F0] text-white  px-4 py-3   md:px-8 md:py-3  rounded-md font-medium hover:bg-blue-600 transition-colors">
              Select Options
            </button>
            
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-700" />
            </button>
            
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ShoppingCart size={20} className="text-gray-700" />
            </button>
            
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Eye size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16">
           <div className="flex justify-center gap-12 border-b border-gray-200">
        <button
            onClick={() => setActiveTab('description')}
            className="pb-4 font-semibold text-[#737373]"
        >
            Description
        </button>

        <button
            onClick={() => setActiveTab('additional')}
            className="pb-4 font-semibold text-[#737373]"
        >
            Additional Information
        </button>

        <button
            onClick={() => setActiveTab('reviews')}
            className="pb-4 font-semibold text-[#737373]"
        >
       Reviews <span className="text-[#23856D] font-bold">(0)</span>
        </button>
</div>



        {/* description kısmı */}
        {activeTab === 'description' && (
          <div className="py-12 px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                 <img
                src={productdetail3}
                alt="Product detail"
                className="rounded-lg w-full h-full object-cover aspect-[2/2] md:aspect-[3/4]"
                />
                  {/* resmin altındaki gölge */}
                  <div className="absolute -right-2 -bottom-2 w-full h-full bg-[#C4C4C433] rounded-lg -z-10"></div>
                </div>
              </div>

              {/* İlk paragraf  */}
              <div className="space-y-6 mx-5 max-w-[350px] mb-8"style={{ fontFamily: 'Montserrat' }}>
                <h3 className="text-2xl font-bold text-[#252B42] ">
                  the quick fox jumps over
                </h3>
                <p className="text-[#737373] leading-relaxed font-medium">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-[#737373] leading-relaxed font-medium">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-[#737373] leading-relaxed font-medium">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
              </div>

              {/* İkinci paragraf   */}
              <div className="space-y-8 mx-5" style={{ fontFamily: 'Montserrat' }}>
                {/* İlk liste */}
                <div>
                  <h3 className="text-2xl font-bold text-[#252B42] mb-6">
                    the quick fox jumps over
                  </h3>
                  <ul className="space-y-3 font-bold  ">
                    <li className="flex items-start gap-3 text-[#737373]">
                      <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                      <span>the quick fox jumps over the lazy dog</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#737373]">
                      <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                      <span>the quick fox jumps over the lazy dog</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#737373]">
                      <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                      <span>the quick fox jumps over the lazy dog</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#737373]">
                      <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                      <span>the quick fox jumps over the lazy dog</span>
                    </li>
                  </ul>
                </div>

                {/* İkinci liste */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
                    the quick fox jumps over
                  </h3>
                  <ul className="space-y-3 font-bold">
                    <li className="flex items-start gap-3 text-[#737373]">
                      <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                      <span>the quick fox jumps over the lazy dog</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#737373]">
                      <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                      <span>the quick fox jumps over the lazy dog</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#737373]">
                      <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                      <span>the quick fox jumps over the lazy dog</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'additional' && (
          <div className="py-12">
            <p className="text-gray-600 text-center">No Additional Information </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="py-12">
            <p className="text-gray-600 text-center">No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}