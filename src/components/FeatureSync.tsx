import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet, Bookmark, History, CreditCard, RefreshCcw, CheckCircle2 } from 'lucide-react';

export const FeatureSync: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile' | 'tablet'>('desktop');

  return (
    <section className="py-20 bg-white border-t border-gray-100" id="sync-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-100">
            <RefreshCcw className="w-4 h-4 text-amber-600" />
            <span>Cross-Device Ecosystem</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-['Google_Sans',sans-serif] text-gray-900 tracking-tight mb-4">
            Take Chrome anywhere
          </h2>
          <p className="text-lg text-gray-600">
            Sign in with your Google Account to access your open tabs, saved bookmarks, passwords, and autofill payment methods on every device.
          </p>
        </div>

        {/* Device Switcher Controls */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveDevice('desktop')}
            className={`px-6 py-3 rounded-2xl text-sm font-medium flex items-center gap-2 transition-all cursor-pointer ${
              activeDevice === 'desktop'
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Desktop</span>
          </button>

          <button
            onClick={() => setActiveDevice('mobile')}
            className={`px-6 py-3 rounded-2xl text-sm font-medium flex items-center gap-2 transition-all cursor-pointer ${
              activeDevice === 'mobile'
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile (iOS & Android)</span>
          </button>

          <button
            onClick={() => setActiveDevice('tablet')}
            className={`px-6 py-3 rounded-2xl text-sm font-medium flex items-center gap-2 transition-all cursor-pointer ${
              activeDevice === 'tablet'
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span>Tablet & iPad</span>
          </button>
        </div>

        {/* Sync Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
              <Bookmark className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Synced Bookmarks</h4>
            <p className="text-gray-600 text-sm">
              Save a site on your laptop, read it later on your phone without losing your place.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
              <History className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Open Tabs Across Devices</h4>
            <p className="text-gray-600 text-sm">
              View active tabs running on your phone straight from your desktop tab list.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Secure Google Pay Autofill</h4>
            <p className="text-gray-600 text-sm">
              Fill payment info and shipping addresses safely with 1-tap biometric authentication.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
