import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center space-y-4">
        <p className="text-sm text-[#737373] uppercase tracking-wider font-medium">
          PRICING
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#252B42]">
          Simple Pricing
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 pt-2">
          <Link to="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">{'>'}</span>
          <Link to="/pricing" className="text-[#737373]">
            Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}