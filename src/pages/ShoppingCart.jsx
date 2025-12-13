import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { removeFromCart, updateCartItemCount } from '../store/actions/shoppingCartActions';

export default function ShoppingCart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const cartItems = useSelector(state => state.shoppingCart.cart);
  
  // Renk seçimi için state (artık kullanılmıyor ama UI'da gösterim için kalabilir)
  const [selectedColors, setSelectedColors] = useState({});
  
  const colors = [
    { name: 'Blue', code: '#23A6F0' },
    { name: 'Green', code: '#2DC071' },
    { name: 'Orange', code: '#E77C40' },
    { name: 'Navy', code: '#252B42' }
  ];

  // Miktar güncelleme - colorCode parametresi eklendi
  const updateQuantity = (productId, colorCode, newCount) => {
    if (newCount < 1) return;
    dispatch(updateCartItemCount(productId, colorCode, newCount));
  };

  // Ürün silme - colorCode parametresi eklendi
  const removeItem = (productId, colorCode) => {
    dispatch(removeFromCart(productId, colorCode));
  };

  const updateColor = (productId, color) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color
    }));
  };

  // Toplam hesaplama
  const subtotal = cartItems.reduce((sum, item) => 
    sum + ((item.product.discountPrice || item.product.price) * item.count), 0
  );
  const shipping = subtotal > 500 ? 0 : 29.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="w-full min-h-screen bg-[#F5F5F5] flex items-center justify-center" style={{ fontFamily: 'Montserrat' }}>
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Start exploring products to begin shopping</p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
          >
            Alışverişe Başla
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F5F5F5]" style={{ fontFamily: 'Montserrat' }}>
      <div className="container mx-auto px-4 py-8 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Go Back</span>
          </button>
          <h1 className="text-3xl font-bold text-[#252B42]">Shopping Cart</h1>
          <span className="ml-auto text-[#737373]">({cartItems.length} Items)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => {
              const product = item.product;
              // Her item'ın kendi rengi var, o rengi göster
              const itemColor = product.color?.code || colors[0].code;
              const itemColorName = product.color?.name || colors[0].name;
              
              return (
                // Key olarak index + productId + colorCode kullan (benzersiz olması için)
                <div key={`${product.id}-${itemColor}-${index}`} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-[#252B42] truncate pr-4">
                          {product.title}
                        </h3>
                        <button
                          onClick={() => removeItem(product.id, itemColor)}
                          className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors p-1"
                          title="Sepetten Kaldır"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      {product.description && (
                        <p className="text-sm text-[#737373] mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      )}

                      {/* Color Display - Artık değiştirilemez, sadece gösterim */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-[#252B42] mb-2">
                          Color: 
                          <span className="ml-2 text-[#737373] font-normal">
                            {itemColorName}
                          </span>
                        </p>
                        <div className="flex gap-2">
                          <div
                            className="w-8 h-8 rounded-full border-2 border-gray-800 shadow-md"
                            style={{ backgroundColor: itemColor }}
                            title={itemColorName}
                          />
                        </div>  
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-[#252B42]">Quantity:</span>
                          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateQuantity(product.id, itemColor, item.count - 1)}
                              className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              disabled={item.count <= 1}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-2 font-semibold min-w-[40px] text-center">
                              {item.count}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, itemColor, item.count + 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold text-[#23A6F0]">
                            ${((product.discountPrice || product.price) * item.count).toFixed(2)}
                          </p>
                          <p className="text-sm text-[#737373]">
                            ${(product.discountPrice || product.price).toFixed(2)} / adet
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-[#252B42] mb-6 pb-4 border-b border-gray-200">
                Order Summary
              </h2>

              <div className="space-y-3 mb-4 pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#737373]">Subtotal ({cartItems.length} items)</span>
                  <span className="font-semibold text-[#252B42]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#737373]">Shipping</span>
                  <span className="font-semibold text-[#252B42]">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between mb-6 pb-6 border-b border-gray-200">
                <span className="text-lg font-bold text-[#252B42]">Total</span>
                <span className="text-2xl font-bold text-[#23A6F0]">${total.toFixed(2)}</span>
              </div>

              {/* Coupon / Discount Code */}
              <div className="mb-2 pb-6">
                <h3 className="text-md font-semibold text-[#252B42] mb-3">Discount Code</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter your code"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#23A6F0] transition-colors text-sm"
                  />
                  <button className="px-4 py-3 bg-[#23A6F0] text-white rounded-md font-semibold hover:bg-blue-600 transition-colors text-sm">
                    Apply
                  </button>
                </div>
              </div>

              <button 
                onClick={() => navigate('/user/address')}
                className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors mb-3 shadow-sm"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/shop')}
                className="w-full border border-gray-300 text-[#252B42] py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </button>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-start gap-2 text-sm text-[#737373]">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>{shipping === 0 ? 'Free shipping!' : 'Free shipping on orders over $500'}</p>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#737373]">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p>Secure payment guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}