import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Youtube from './pages/Youtube';
import Tiktok from './pages/Tiktok';
import Pinterest from './pages/Pinterest';
import Instagram from './pages/Instagram';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 text-right">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/tiktok" element={<Tiktok />} />
            <Route path="/pinterest" element={<Pinterest />} />
            <Route path="/instagram" element={<Instagram />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-center" />
      </div>
    </BrowserRouter>
  );
}