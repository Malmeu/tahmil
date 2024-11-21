import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Download, Pin } from 'lucide-react';
import DownloadCard from '../components/DownloadCard';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-l from-purple-600 to-pink-600">
          تحميل
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8">
          حمّل مقاطع الفيديو من منصات التواصل الاجتماعي المفضلة لديك مجاناً
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <Link
            to="/youtube"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <Youtube className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">يوتيوب</h2>
          </Link>
          <Link
            to="/instagram"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <Instagram className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">انستغرام</h2>
          </Link>
          <Link
            to="/tiktok"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            {/* Custom TikTok SVG icon since lucide-react doesn't have one */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-black dark:text-white mx-auto mb-4"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">تيك توك</h2>
          </Link>
          <Link
            to="/pinterest"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <Pin className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">بينتريست</h2>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">كيفية التحميل</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <DownloadCard
            icon={<Download className="w-8 h-8 text-purple-600" />}
            title="انسخ الرابط"
            description="انسخ رابط الفيديو من المنصة التي تريد التحميل منها"
          />
          <DownloadCard
            icon={<Download className="w-8 h-8 text-purple-600" />}
            title="الصق الرابط"
            description="الصق الرابط في مربع البحث واختر جودة التحميل"
          />
          <DownloadCard
            icon={<Download className="w-8 h-8 text-purple-600" />}
            title="ابدأ التحميل"
            description="اضغط على زر التحميل وانتظر اكتمال العملية"
          />
        </div>
      </section>
    </div>
  );
}