import React, { useState } from 'react';
import { Shield, FileText, X, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy, onOpenTerms }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  const handlePrivacyClick = () => {
    if (onOpenPrivacyPolicy) {
      onOpenPrivacyPolicy();
    } else {
      setActiveModal('privacy');
    }
  };

  const handleTermsClick = () => {
    if (onOpenTerms) {
      onOpenTerms();
    } else {
      setActiveModal('terms');
    }
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'privacy':
        return {
          title: 'Game Privacy Policy',
          icon: <Shield className="w-5 h-5 text-amber-500" />,
          content: (
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-slate-800 font-medium text-sm">
                Hey Gamer! Your privacy is 100% respected here. We collect zero personal data, and all your high scores & retro console settings stay stored safely right on your device. Have fun stacking bricks!
              </div>
              <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100 text-xs text-blue-900">
                <strong>Account Deletion &amp; Log Out:</strong> To delete your account or log out, email <a href="mailto:prople.site@gmail.com" className="font-semibold underline">prople.site@gmail.com</a>. Our 24/7 customer service is active and takes immediate action.
              </div>
              <p className="text-xs text-gray-500">
                Official Brick Stack Privacy Statement.
              </p>
            </div>
          ),
        };
      case 'terms':
        return {
          title: 'Game Terms and Conditions',
          icon: <FileText className="w-5 h-5 text-amber-500" />,
          content: (
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-slate-800 font-medium text-sm">
                Welcome Player! By playing this retro brick game, you default to accept our fair play terms & conditions. Enjoy smooth retro gameplay, craft your high scores, and stack like a champion!
              </div>
              <p className="text-xs text-gray-500">
                Official Brick Stack Fair Play Terms & Conditions.
              </p>
            </div>
          ),
        };
      default:
        return null;
    }
  };

  const modal = renderModalContent();

  return (
    <footer className="w-full bg-slate-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 border-0 mt-auto m-0" id="app-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <button
            onClick={handlePrivacyClick}
            className="hover:text-amber-400 transition-colors cursor-pointer"
            id="footer-privacy-policy-link"
          >
            Privacy Policy
          </button>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <button
            onClick={handleTermsClick}
            className="hover:text-amber-400 transition-colors cursor-pointer"
            id="footer-terms-link"
          >
            Terms and Conditions
          </button>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a
            href="https://cloaktail.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
            id="footer-about-redirect-link"
          >
            <span>About</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a
            href="https://cloaktail.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
            id="footer-help-support-redirect-link"
          >
            <span>Help and Support</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>

        {/* Copyright Label */}
        <div className="text-xs text-slate-400 text-center md:text-right font-mono">
          © {currentYear} Brick Stack (v1.0). All rights reserved.
        </div>

      </div>

      {/* Simple Information Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-900">
                {modal.icon}
                <span>{modal.title}</span>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              {modal.content}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};
