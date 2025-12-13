import React, { useState, useEffect } from 'react';
import { Package, ChevronDown, ChevronUp, Calendar, Loader, ShoppingBag, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MyOrders() {
  const navigate = useNavigate();
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      'Authorization': token
    };
  };

useEffect(() => {
  let userName = 'User';
  
  try {
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      userName = user.username || user.email?.split('@')[0] || 'User';
    }
  } catch (error) {
    console.error('User parse error:', error);
  }
  
  setUserName(userName);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        'http://localhost:9000/workintech/ecommerce/management/api/order',
        { headers: getAuthHeaders() }
      );

      if (!response.ok) throw new Error('Failed to fetch orders');

      const data = await response.json();
      console.log('Orders from backend:', data);
      
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchOrders();
}, []);

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (price) => {
    return `$${parseFloat(price || 0).toFixed(2)}`;
  };

  const totalOrders = orders.length;
  const totalSpent = orders.reduce((sum, order) => sum + order.price, 0);
  const totalItems = orders.reduce((sum, order) => 
    sum + (order.products || []).reduce((pSum, p) => pSum + p.count, 0), 0
  );

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center" style={{ fontFamily: 'Montserrat' }}>
        <div className="text-center">
          <Loader className="animate-spin mx-auto mb-4 text-blue-500" size={48} />
          <p className="text-gray-600">Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="w-full min-h-screen bg-gray-50" style={{ fontFamily: 'Montserrat' }}>
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header with User Name */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">My Orders</h1>
              <p className="text-gray-600">View your order history</p>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md border border-gray-200">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                <User size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Welcome back</p>
                <p className="font-bold text-gray-900">{userName}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="text-blue-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Orders Yet</h3>
              <p className="text-gray-600 mb-6">Start shopping to see your orders here!</p>
              <button
                onClick={() => navigate('/shop')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg"
              >
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50" style={{ fontFamily: 'Montserrat' }}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Header with User Name */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Orders</h1>
            <p className="text-gray-600">Track and manage your order history</p>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md border border-gray-200">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
              <User size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Welcome back</p>
              <p className="font-bold text-gray-900">{userName}</p>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-2">
              <Package size={32} className="opacity-80" />
              <div className="bg-white bg-opacity-20 rounded-lg px-3 py-1 text-sm font-semibold">
                Total
              </div>
            </div>
            <p className="text-3xl font-bold mb-1">{totalOrders}</p>
            <p className="text-blue-100 text-sm">Orders Placed</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-2">
              <ShoppingBag size={32} className="opacity-80" />
              <div className="bg-white bg-opacity-20 rounded-lg px-3 py-1 text-sm font-semibold">
                Spent
              </div>
            </div>
            <p className="text-3xl font-bold mb-1">{formatPrice(totalSpent)}</p>
            <p className="text-green-100 text-sm">Total Amount</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-2">
              <Package size={32} className="opacity-80" />
              <div className="bg-white bg-opacity-20 rounded-lg px-3 py-1 text-sm font-semibold">
                Items
              </div>
            </div>
            <p className="text-3xl font-bold mb-1">{totalItems}</p>
            <p className="text-orange-100 text-sm">Products Ordered</p>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => {
            const isExpanded = expandedOrder === order.id;
            const products = order.products || [];
            const itemCount = products.reduce((sum, p) => sum + p.count, 0);
            
            return (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Order Header */}
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleOrder(order.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Order ID and Date */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-md">
                          <Package size={28} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Order #{order.id}
                          </h3>
                          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                            <Calendar size={14} />
                            {formatDate(order.orderDate)}
                          </p>
                        </div>
                        <div className="ml-auto">
                          <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                            ✓ {order.status || 'CONFIRMED'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Order Info Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                          <p className="text-xs text-blue-600 font-semibold mb-1">TOTAL AMOUNT</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {formatPrice(order.price)}
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                          <p className="text-xs text-purple-600 font-semibold mb-1">PRODUCTS</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {products.length}
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                          <p className="text-xs text-orange-600 font-semibold mb-1">ITEMS</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {itemCount}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expand/Collapse Button */}
                    <button className="ml-6 p-3 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp size={24} className="text-gray-600" />
                      ) : (
                        <ChevronDown size={24} className="text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Order Details (Collapsible) */}
                {isExpanded && products.length > 0 && (
                  <div className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
                    <div className="p-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-1.5 rounded-lg">
                          <Package size={14} className="text-white" />
                        </div>
                        Order Items ({products.length} {products.length === 1 ? 'product' : 'products'})
                      </h4>
                      <div className="space-y-3">
                        {products.map((item, index) => (
                          <div
                            key={index}
                            className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-4 flex-1">
                                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-xl flex items-center justify-center">
                                  <ShoppingBag size={28} className="text-blue-600" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-bold text-gray-900 text-lg mb-1">
                                    {item.detail || 'Product'}
                                  </p>
                                  <div className="flex items-center gap-4 text-sm">
                                    <span className="text-gray-600">
                                      Quantity: <span className="font-semibold text-gray-900">{item.count}</span>
                                    </span>
                                    <span className="text-gray-400">•</span>
                                    <span className="text-gray-600">
                                      Price: <span className="font-semibold text-gray-900">{formatPrice(item.price)}</span> each
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-500 mb-1">Subtotal</p>
                                <p className="text-2xl font-bold text-blue-600">
                                  {formatPrice(item.price * item.count)}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Order Total */}
                      <div className="mt-4 bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-blue-100 text-sm mb-1">Order Total</p>
                            <p className="text-white text-xs">Including all taxes and fees</p>
                          </div>
                          <p className="text-4xl font-bold text-white">
                            {formatPrice(order.price)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Continue Shopping Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/shop')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}