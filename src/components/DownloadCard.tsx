import React from 'react';

interface DownloadCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function DownloadCard({ icon, title, description }: DownloadCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}