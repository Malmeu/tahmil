import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">تحميل</h3>
            <p className="text-gray-600 dark:text-gray-300">
              موقع تحميل مجاني للفيديوهات من منصات التواصل الاجتماعي
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/youtube" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">تحميل من يوتيوب</Link></li>
              <li><Link to="/tiktok" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">تحميل من تيك توك</Link></li>
              <li><Link to="/pinterest" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">تحميل من بينتريست</Link></li>
              <li><Link to="/instagram" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">تحميل من انستغرام</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">معلومات قانونية</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">شروط الاستخدام</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">سياسة الخصوصية</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} تحميل. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}