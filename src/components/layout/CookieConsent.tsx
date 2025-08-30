"use client";

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
    const storedPrefs = localStorage.getItem('cookie-preferences');
    if (storedPrefs) {
      try {
        const parsed = JSON.parse(storedPrefs);
        setPreferences({
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
        });
      } catch {}
    }
  }, []);

  const handleAccept = () => {
    const prefs = { analytics: true, marketing: true };
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
  };

  const handleReject = () => {
    const prefs = { analytics: false, marketing: false };
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
  };

  const handleSave = () => {
    localStorage.setItem('cookie-consent', 'custom');
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    setShowSettings(false);
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
        <button
          onClick={() => setShowSettings(true)}
          className="px-4 py-2 bg-gray-100 text-black rounded-md text-sm"
        >
          Настроить параметры
        </button>
      </div>
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-medium mb-4">Настройки cookie</h2>
            <div className="space-y-2 mb-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked disabled />
                <span className="text-sm">Обязательные куки</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() =>
                    setPreferences((p) => ({ ...p, analytics: !p.analytics }))
                  }
                />
                <span className="text-sm">Аналитические куки</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() =>
                    setPreferences((p) => ({ ...p, marketing: !p.marketing }))
                  }
                />
                <span className="text-sm">Маркетинговые куки</span>
              </label>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowSettings(false)}
                className="px-3 py-1 text-sm rounded-md bg-gray-200"
              >
                Отмена
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-1 text-sm rounded-md bg-black text-white"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
