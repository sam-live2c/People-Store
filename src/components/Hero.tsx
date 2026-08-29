import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { BrickStackLogo } from './Icons';
import { HeroCards } from './HeroCards';
import { ThemeOption } from '../types';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenUpdate: () => void;
  activeTheme: ThemeOption;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDownload,
  onOpenUpdate,
  activeTheme,
}) => {
  return (
    <section className="relative pt-10 pb-16 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white" id="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Centered Logo Badge */}
        <div
          className="inline-flex items-center justify-center p-2 mb-6 cursor-pointer"
          onClick={onOpenDownload}
          id="hero-brick-stack-logo-badge"
        >
          <div className="relative">
            <BrickStackLogo size={72} className="filter drop-shadow-md" />
          </div>
        </div>

        {/* Headline: "The app built to be yours" */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-['Google_Sans',sans-serif] text-[#1f1f1f] tracking-tight max-w-4xl mx-auto leading-[1.08] mb-8"
          id="hero-headline"
        >
          The app <br className="hidden sm:inline" />
          built to be <br className="hidden sm:inline" />
          yours
        </h1>

        {/* Primary CTA Button: Download for Android */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          id="hero-cta-container"
        >
          <button
            onClick={onOpenDownload}
            className="px-8 py-4 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium text-lg sm:text-xl rounded-full shadow-lg transition-colors flex items-center gap-3 cursor-pointer"
            id="hero-get-brick-stack-btn"
          >
            <Download className="w-6 h-6" />
            <span>Get app</span>
          </button>

          {/* Subtitle Link */}
          <button
            onClick={onOpenUpdate}
            className="text-[#1a73e8] hover:text-[#1557b0] text-base font-medium hover:underline transition-colors flex items-center gap-1 cursor-pointer"
            id="hero-update-specs-link"
          >
            <span>Update Brick Stack for Android</span>
          </button>
        </div>

        {/* OS & Architecture callout note */}
        <div
          className="text-xs text-gray-500 mb-10 flex items-center justify-center gap-3 flex-wrap font-medium"
        >
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Available for Android 12.0+
          </span>
        </div>

        {/* Hero Cards Showcase */}
        <HeroCards activeTheme={activeTheme} />

      </div>
    </section>
  );
};

