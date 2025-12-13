import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Heart, ShoppingCart, X, ArrowLeft } from 'lucide-react';
import { removeFromWishlist } from '../store/actions/wishlistAction';
import { addToCart } from '../store/actions/shoppingCartActions';

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
import productdetail1 from '../assets/productdetail1.jpg';
import productdetail2 from '../assets/productdetail2.jpg';
import productdetail3 from '../assets/productdetail3.jpg';
import productdetail4 from '../assets/productdetail4.jpg';
import productdetail5 from '../assets/productdetail5.jpg';
import productdetail6 from '../assets/productdetail6.jpg';
import productdetail7 from '../assets/productdetail7.jpg';
import productdetail8 from '../assets/productdetail8.jpg';
import productdetail9 from '../assets/productdetail9.jpg';


// Backend URL'lerini import edilmiş resimlerle eşleştir
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
    '/assets/productdetail1.jpg': productdetail1,
  '/assets/productdetail2.jpg': productdetail2,
  '/assets/productdetail3.jpg': productdetail3,
  '/assets/productdetail4.jpg': productdetail4,
  '/assets/productdetail5.jpg': productdetail5,
  '/assets/productdetail6.jpg': productdetail6,
  '/assets/productdetail7.jpg': productdetail7,
  '/assets/productdetail8.jpg': productdetail8,
  '/assets/productdetail9.jpg': productdetail9,

};

const fallbackImagesArray = [
  shopfilter1, shopfilter2, shopfilter3, shopfilter4,
  shopfilter5, shopfilter6, shopfilter7, shopfilter8,
  shopfilter9, shopfilter10, shopfilter11, shopfilter12,
    productdetail1, productdetail2, productdetail3,
  productdetail4, productdetail5, productdetail6,
  productdetail7, productdetail8, productdetail9,

];

export default function Wishlist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlistItems = useSelector(state => state.wishlist.items);

 const getProductImage = (product, index) => {
  if (product.image) {
    return product.image;
  }
  
  if (product.selectedImage) {
    return product.selectedImage;
  }
  
  const backendUrl = product.images?.[0]?.url;
  if (backendUrl && imageMapper[backendUrl]) {
    return imageMapper[backendUrl];
  }
    return fallbackImagesArray[index % fallbackImagesArray.length];
};

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  const handleAddToCart = (product) => {
    const cartProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      discountPrice: product.discountPrice || product.price,
      image: getProductImage(product, 0), 
      description: product.description,
      department: product.department
    };
    
    dispatch(addToCart(cartProduct));
    console.log(' Added to cart:', cartProduct);
  };

  const handleMoveAllToCart = () => {
    wishlistItems.forEach((item, index) => {
      const product = item.product || item;
      const cartProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        discountPrice: product.discountPrice || product.price,
        image: getProductImage(product, index),
        description: product.description,
        department: product.department
      };
      dispatch(addToCart(cartProduct));
      dispatch(removeFromWishlist(product.id));
    });
    navigate('/shopping-cart');
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="w-full min-h-screen bg-[#F5F5F5] flex items-center justify-center" style={{ fontFamily: 'Montserrat' }}>
        <div className="text-center">
          <Heart size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-6">Save your favorite items here to buy them later</p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F5F5F5]" style={{ fontFamily: 'Montserrat' }}>
      <div className="container mx-auto px-4 py-8 md:px-8 max-w-7xl">
      
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Go Back</span>
            </button>
            <h1 className="text-3xl font-bold text-[#252B42]">My Wishlist</h1>
            <span className="ml-2 text-[#737373]">({wishlistItems.length} Items)</span>
          </div>

          {wishlistItems.length > 0 && (
            <button
              onClick={handleMoveAllToCart}
              className="hidden md:flex items-center gap-2 bg-[#23A6F0] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
            >
              <ShoppingCart size={20} />
              Move All to Cart
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item, index) => {
            const product = item.product || item;
            return (
              <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                
                <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => navigate(`/productdetail/${product.id}`)}>
                  <img
                    src={getProductImage(product, index)}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
              
              <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors"
                    title="Remove from wishlist"
                  >
                    <X size={18} className="text-red-500" />
                  </button>

                 
                  {product.discountPrice && product.discountPrice < product.price && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                    </div>
                  )}
                </div>

              
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#252B42] mb-1 truncate">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#737373] mb-3">
                    {product.department}
                  </p>

                  {product.description && (
                    <p className="text-sm text-[#737373] mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  )}

                  
                  <div className="flex items-center gap-2 mb-4">
                    {product.discountPrice && product.discountPrice < product.price ? (
                      <>
                        <span className="text-[#BDBDBD] font-bold line-through text-base">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-[#23856D] font-bold text-xl">
                          ${product.discountPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-[#23856D] font-bold text-xl">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        
        {wishlistItems.length > 0 && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-10">
            <button
              onClick={handleMoveAllToCart}
              className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Move All to Cart ({wishlistItems.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}