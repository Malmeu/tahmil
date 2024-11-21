import React, { useState } from 'react';
import { Download } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Tiktok() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast.error('الرجاء إدخال رابط الفيديو');
      return;
    }
    setLoading(true);
    // TODO: Implement actual download logic
    toast.success('جاري تجهيز التحميل...');
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        تحميل فيديو من تيك توك
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col space-y-4">
            <label htmlFor="url" className="text-lg font-medium text-gray-900 dark:text-white">
              رابط الفيديو
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.tiktok.com/@username/video/..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              dir="ltr"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-gradient-to-l from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center space-x-2 space-x-reverse"
          >
            <Download className="w-5 h-5" />
            <span>{loading ? 'جاري التحميل...' : 'تحميل'}</span>
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">مميزات التحميل من تيك توك</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• تحميل بدون علامة مائية</li>
            <li>• تحميل بجودة عالية</li>
            <li>• تحميل سريع ومجاني</li>
            <li>• دعم جميع أنواع الفيديوهات</li>
          </ul>
        </div>
      </form>
    </div>
  );
}