import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Shop from '../pages/Shop';
import ProductDetail from '../components/ProductDetail';
import Contact from '../pages/Contact';
import About from '../pages/About';

export default function PageContent() {
  return (
    <main className="w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product" element={<ProductDetail />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />



      </Routes>
    </main>
  );
}