import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Shop from '../pages/Shop';
import ProductDetail from '../components/ProductDetail';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Pricing from '../pages/Pricing';
import Team from '../pages/Team';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ProductPage from '../components/ProductPage';
import CartToast from '../components/CarToast';
import ShoppingCart from '../pages/ShoppingCart';
import Wishlist from '../components/Wishlist';
import CategoriesSection from '../components/CategoriesSection';
import BlogSection from '../components/BlogSection';
import AddressCardManager from '../components/AddressCardManager';
import OrderSuccessfull from '../components/OrderSuccesfull';



export default function PageContent() {
  return (
    <main className="w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
         <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/categories" element={<CategoriesSection />} />
         <Route path="/blog" element={<BlogSection />} />
         <Route path="/user/address" element={<AddressCardManager />} />
          <Route path="/order-success" element={<OrderSuccessfull />} />













      </Routes>
    </main>
  );
}