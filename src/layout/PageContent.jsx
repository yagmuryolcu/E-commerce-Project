import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Shop from '../pages/Shop';

export default function PageContent() {
  return (
    <main className="w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop/>} />

      </Routes>
    </main>
  );
}