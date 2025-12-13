import React from 'react';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
import { useLocation , useNavigate} from 'react-router-dom';

export default function OrderSuccessfull() {
  const navigate = useNavigate();

  const location = useLocation();
  const orderData = location.state?.orderData;
   return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl p-8 shadow-md" style={{ fontFamily: 'Montserrat' }}>

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle size={48} className="text-blue-500" />
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your Order Has Been Placed!
          </h2>
          <p className="text-gray-600">
            Your order has been successfully created and is now being prepared.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-5 mb-6 space-y-4 border border-blue-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-bold text-gray-900">
              #{orderData?.orderId || 'ORD-' + Date.now()}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Total Amount:</span>
            <span className="font-bold text-blue-600 text-lg">
              ${orderData?.total?.toFixed(2) || '0.00'}
            </span>
          </div>

          <div className="border-t border-blue-200 pt-4 mt-4">
            <div className="text-sm mb-3">
              <span className="text-gray-600 font-semibold">Delivery Address:</span>
            </div>
            <div className="text-sm space-y-2 bg-white p-4 rounded-md">
              <div className="flex items-start gap-2">
                <span className="font-bold text-blue-600 min-w-fit">📍</span>
                <div>
                  <p className="font-bold text-gray-900 mb-1">
                    {orderData?.addressTitle || 'Address'}
                  </p>
                  <p className="text-gray-800 font-medium">
                    {orderData?.addressName || 'Name Surname'}
                  </p>
                  <p className="text-gray-600 mt-1">
                    📞 {orderData?.addressPhone || 'Phone'}
                  </p>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    {orderData?.addressFull || 'Full Address'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-200 pt-4">
            <div className="text-sm mb-3">
              <span className="text-gray-600 font-semibold">Payment Method:</span>
            </div>
            <div className="text-sm space-y-1 bg-white p-3 rounded-md">
              <p className="font-bold text-gray-900">
                💳 {orderData?.cardNo || '**** **** **** ****'}
              </p>
              <p className="text-gray-700">
                {orderData?.cardName || 'Card Holder'}
              </p>
            </div>
          </div>
        </div>

        {orderData?.items && orderData.items.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Order Items ({orderData.items.length}):
            </p>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {orderData.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-gray-500 text-xs">Quantity: {item.count}</p>
                  </div>
                  <p className="font-semibold text-gray-900">
                    ${(item.price * item.count).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Order Status:
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <CheckCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Order Received</p>
                <p className="text-xs text-gray-500">Your order has been created successfully</p>
              </div>
            </div>

            <div className="flex items-center gap-3 opacity-50">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <Package size={18} className="text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Preparing</p>
                <p className="text-xs text-gray-500">Your items are being packed</p>
              </div>
            </div>

            <div className="flex items-center gap-3 opacity-30">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <Truck size={18} className="text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Shipped</p>
                <p className="text-xs text-gray-500">Your package will be handed over to the courier</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
          <p className="text-xs text-blue-800 text-center">
            Your order details have been sent to your email.
            <br />
            You can track your order status from the "My Orders" page.
          </p>
        </div>

        <div className="space-y-3">
          <button
          onClick={() => navigate('/all-orders')}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-md"
          >
            My Orders
          </button>

          <button
 onClick={() => navigate('/')}
             className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 border border-gray-200"
          >
            <Home size={18} />
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}