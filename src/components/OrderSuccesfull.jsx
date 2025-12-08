import React from 'react';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';

export default function OrderSuccessfull({ orderData }) {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-md" style={{ fontFamily: 'Montserrat' }}>

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle size={48} className="text-blue-500" />
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your Order Has Been Placed!          </h2>
          <p className="text-gray-600">
            Your order has been successfully created and is now being prepared.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-6 space-y-3 border border-blue-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-bold text-gray-900">
              #{orderData?.orderId || 'ORD-' + Date.now()}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Total Amount:</span>
            <span className="font-bold text-blue-600">
              {orderData?.total?.toFixed(2) || '0.00'} $
            </span>
          </div>

          {orderData?.installment > 1 && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Installment:</span>
              <span className="font-semibold text-gray-900">
                {orderData.installment} x {orderData.monthly} $
              </span>
            </div>
          )}

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Delivery Address:</span>
            <span className="font-semibold text-gray-900 text-right">
              {orderData?.addressTitle || 'Adres'}
            </span>
          </div>
        </div>

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
            You can track your order status from the “My Orders” page.       
               </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => (window.location.href = '/orders')}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-md"
          >
            My Orders
          </button>

          <button
            onClick={() => (window.location.href = '/')}
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
