import React from 'react';
import { Download } from 'lucide-react';
import { PropleStoreWordmark } from './Icons';
import { UserProfile } from '../types';

interface HeaderProps {
  onOpenDownload: () => void;
  onOpenUpdate: () => void;
  user?: UserProfile | null;
  onSignOut?: () => void;
  onOpenPrivacyPolicy?: () => void;
  onOpenLegal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDownload,
  onOpenUpdate,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-200" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left Side: Prople Store Wordmark */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 group focus:outline-none" id="prople-store-header-brand-logo">
            <PropleStoreWordmark showLogo={false} />
          </a>
        </div>

        {/* Right Side: CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenUpdate}
            className="hidden sm:inline-flex px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            id="header-update-link-btn"
          >
            Update Android App
          </button>

          <button
            onClick={onOpenDownload}
            className="px-5 py-2.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium text-sm rounded-full shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 cursor-pointer"
            id="header-get-brick-stack-btn"
          >
            <Download className="w-4 h-4" />
            <span>Get app</span>
          </button>
        </div>
      </div>
    </header>
  );
};

