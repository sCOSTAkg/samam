"use client";

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white p-4 rounded-md shadow-lg z-50 border border-gray-200">
      <p className="text-sm mb-4">Этот сайт использует файлы cookie для улучшения вашего опыта.</p>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-black text-white rounded-md text-sm"
        >
          Принять все
        </button>
        <button
          onClick={handleReject}
          className="px-4 py-2 bg-gray-200 text-black rounded-md text-sm"
        >
          Отклонить все
        </button>
        <button className="px-4 py-2 bg-gray-100 text-black rounded-md text-sm">
          Настроить параметры
        </button>
      </div>
    </div>
  );
}
