import React from 'react';

export default function Header({ language, onToggleLanguage, t }) {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">CB</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-dark">Community Bridge</h1>
            <p className="text-xs text-gray-600">Australia</p>
          </div>
        </div>

        <button
          onClick={onToggleLanguage}
          className="flex items-center space-x-2 bg-light hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
        >
          <span className="text-sm font-semibold text-dark">
            {language === 'en' ? 'ES' : 'EN'}
          </span>
          <div className="w-8 h-5 bg-gradient-warm rounded-full relative">
            <div
              className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-300 ${
                language === 'en' ? 'left-0.5' : 'right-0.5'
              }`}
            />
          </div>
        </button>
      </div>
    </header>
  );
}
