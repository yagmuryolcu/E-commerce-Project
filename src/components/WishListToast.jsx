import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Heart, Check } from 'lucide-react';

const WishlistToast = ({ product, onClose, isAdded }) => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleGoToWishlist = () => {
    navigate('/wishlist');
    onClose();
  };

  return (
    <div className="fixed top-4 right-4 z-50" style={{ animation: 'slideIn 0.3s ease-out' }}>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 min-w-[320px] max-w-[400px]">
        <div className="flex items-start gap-3">
        
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            isAdded ? 'bg-pink-100' : 'bg-gray-100'
          }`}>
            {isAdded ? (
              <Heart className="text-red-500 fill-red-500" size={20} />
            ) : (
              <Check className="text-gray-600" size={20} />
            )}
          </div>

         
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat' }}>
              {isAdded ? 'Added to Wishlist!' : 'Removed from Wishlist'}
            </h3>
            <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Montserrat' }}>
              "{product.title}" {isAdded ? 'has been added to your wishlist' : 'has been removed from your wishlist'}
            </p>

           
            {isAdded && (
              <div className="flex items-center gap-3 mb-3 p-2 bg-gray-50 rounded">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate" style={{ fontFamily: 'Montserrat' }}>
                    {product.title}
                  </p>
                  <p className="text-sm font-bold text-[#23856D]" style={{ fontFamily: 'Montserrat' }}>
                    ${(product.discountPrice || product.price).toFixed(2)}
                  </p>
                </div>
              </div>
            )}

           
            {isAdded && (
              <div className="flex gap-2">
                <button
                  onClick={handleGoToWishlist}
                  className="flex-1 bg-[#23A6F0] text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  <Heart size={16} />
                  View Wishlist
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded font-semibold hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  Continue
                </button>
              </div>
            )}
          </div>

       
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistToast;