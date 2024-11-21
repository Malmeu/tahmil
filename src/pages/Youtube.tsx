import React, { useState } from 'react';
import { Download } from 'lucide-react';
import toast from 'react-hot-toast';

interface VideoFormat {
  quality: string;
  url: string;
  format: string;
}

interface VideoInfo {
  title: string;
  formats: VideoFormat[];
  thumbnail: string;
}

export default function Youtube() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube.com\/shorts\/([^&\n?#]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast.error('الرجاء إدخال رابط الفيديو');
      return;
    }

    const videoId = extractVideoId(url);
    if (!videoId) {
      toast.error('الرجاء إدخال رابط يوتيوب صحيح');
      return;
    }

    setLoading(true);
    try {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e9580812f8msh7d33595441f74c2p17e161jsn47e6b033951e',
          'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
        }
      };

      const response = await fetch(
        `https://yt-api.p.rapidapi.com/dl?id=${videoId}`,
        options
      );

      if (!response.ok) {
        throw new Error(`فشل في تحميل معلومات الفيديو (${response.status})`);
      }

      const data = await response.json();

      if (!data || !data.formats || data.formats.length === 0) {
        throw new Error('لم يتم العثور على معلومات الفيديو');
      }

      setVideoInfo({
        title: data.title || 'Untitled Video',
        formats: data.formats,
        thumbnail: data.thumbnail || ''
      });

      toast.success('تم تحليل الفيديو بنجاح');
    } catch (error) {
      console.error('Error fetching video:', error);
      toast.error(error instanceof Error ? error.message : 'حدث خطأ أثناء تحليل الفيديو');
      setVideoInfo(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (format: VideoFormat) => {
    try {
      window.open(format.url, '_blank');
      toast.success('بدأ التحميل');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('حدث خطأ أثناء التحميل');
    }
  };

  const testAPI = async () => {
    const videoId = 'VOTRE_ID_VIDEO';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'VOTRE_CLE_API',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(
        `https://yt-api.p.rapidapi.com/dl?id=${videoId}`,
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        تحميل فيديو من يوتيوب
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
              placeholder="https://www.youtube.com/watch?v=..."
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
            <span>{loading ? 'جاري التحليل...' : 'تحليل'}</span>
          </button>
        </div>

        {videoInfo && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
              <img 
                src={videoInfo.thumbnail} 
                alt={videoInfo.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white" dir="ltr">
              {videoInfo.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {videoInfo.formats.map((format, index) => (
                <button
                  key={index}
                  onClick={() => handleDownload(format)}
                  className="flex items-center justify-between bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 p-4 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                >
                  <span className="font-medium">
                    تحميل {format.quality}
                  </span>
                  <Download className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">مميزات التحميل من يوتيوب</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• تحميل بجودة عالية حتى 4K</li>
            <li>• تحميل بصيغة MP4</li>
            <li>• تحميل الصوت بصيغة MP3</li>
            <li>• تحميل سريع ومجاني</li>
            <li>• دعم جميع أنواع الفيديوهات</li>
          </ul>
        </div>
      </form>
    </div>
  );
}