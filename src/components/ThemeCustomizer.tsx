import React from 'react';
import { motion } from 'motion/react';
import { Palette, Sparkles, Check, RefreshCw } from 'lucide-react';
import { ThemeOption } from '../types';

interface ThemeCustomizerProps {
  themes: ThemeOption[];
  activeTheme: ThemeOption;
  onSelectTheme: (theme: ThemeOption) => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  themes,
  activeTheme,
  onSelectTheme,
}) => {
  return (
    <section className="py-20 bg-gray-50/70 border-y border-gray-100" id="yours-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-purple-100">
            <Palette className="w-4 h-4" />
            <span>Customization & Themes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-['Google_Sans',sans-serif] text-gray-900 tracking-tight mb-4">
            Make it yours
          </h2>
          <p className="text-lg text-gray-600">
            Personalize your Chrome browser with custom colors, wallpapers, and dark modes. Try selecting a theme below to see your browser transform live!
          </p>
        </div>

        {/* Theme Selectors Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" id="theme-selector-pills">
          {themes.map((theme) => {
            const isSelected = theme.id === activeTheme.id;
            return (
              <button
                key={theme.id}
                onClick={() => onSelectTheme(theme)}
                className={`px-5 py-3 rounded-2xl border text-sm font-medium flex items-center gap-3 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-500/20 text-blue-700'
                    : 'bg-white/80 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-white'
                }`}
                id={`theme-btn-${theme.id}`}
              >
                {/* Color Swatch Circle */}
                <div
                  className="w-5 h-5 rounded-full border border-black/10 flex items-center justify-center shadow-xs"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  {isSelected && <Check className="w-3 h-3 text-white" />}
                </div>
                <span>{theme.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Preview Canvas */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto" id="theme-preview-box">
          
          {/* Mock Browser Frame */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            
            {/* Window Top Bar with dynamic theme color */}
            <div
              className="px-4 py-3 flex items-center justify-between transition-colors duration-500"
              style={{ backgroundColor: activeTheme.primaryColor, color: activeTheme.category === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                
                {/* Tab */}
                <div
                  className="px-4 py-1.5 rounded-t-lg text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors duration-500"
                  style={{ backgroundColor: activeTheme.tabBg }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <span>{activeTheme.name} Theme</span>
                </div>
              </div>

              <div className="text-xs font-medium opacity-75">
                Chrome Customize Menu
              </div>
            </div>

            {/* Address bar */}
            <div
              className="px-4 py-2 flex items-center gap-3 text-xs transition-colors duration-500 border-b border-black/5"
              style={{ backgroundColor: activeTheme.secondaryColor }}
            >
              <div className="flex gap-2 text-gray-400">
                <span>←</span>
                <span>→</span>
                <RefreshCw className="w-3.5 h-3.5" />
              </div>

              <div
                className="flex-1 px-4 py-1.5 rounded-full text-xs font-mono transition-colors duration-500 flex items-center gap-2 border border-gray-300/40"
                style={{ backgroundColor: activeTheme.addressBarBg, color: activeTheme.category === 'dark' ? '#f3f4f6' : '#374151' }}
              >
                <span className="text-emerald-500">🔒</span>
                <span>chrome://newtab</span>
              </div>
            </div>

            {/* Wallpaper Screen Area */}
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-gray-900 flex items-center justify-center">
              {activeTheme.wallpaperUrl ? (
                <img
                  src={activeTheme.wallpaperUrl}
                  alt={activeTheme.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center p-8 transition-colors duration-700"
                  style={{ backgroundColor: activeTheme.secondaryColor }}
                >
                  <div className="text-center space-y-3">
                    <span className="font-['Google_Sans',sans-serif] font-bold text-5xl tracking-tight text-gray-800">
                      Google
                    </span>
                    <p className="text-sm text-gray-500">Minimalist & Clean Theme Applied</p>
                  </div>
                </div>
              )}

              {/* Interactive Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-gray-800">
                  Active Theme: <strong>{activeTheme.name}</strong>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
