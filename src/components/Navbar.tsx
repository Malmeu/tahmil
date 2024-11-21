import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-4 space-x-reverse">
            <Download className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">تحميل</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 space-x-reverse">
            <Link to="/youtube" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">يوتيوب</Link>
            <Link to="/tiktok" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">تيك توك</Link>
            <Link to="/pinterest" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">بينتريست</Link>
            <Link to="/instagram" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">انستغرام</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}