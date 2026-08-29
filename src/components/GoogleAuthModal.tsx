import React, { useState } from 'react';
import { X, Loader2, Download } from 'lucide-react';
import { GoogleGLogo } from './Icons';
import { UserProfile } from '../types';
import { signInWithGoogle } from '../lib/firebase';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onSelectAccount: (user: UserProfile) => void;
  onOpenPrivacyPolicy: () => void;
  onDownloadWithoutSignIn: () => void;
}

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({
  isOpen,
  onCancel,
  onSelectAccount,
  onOpenPrivacyPolicy,
  onDownloadWithoutSignIn,
}) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  if (!isOpen) return null;

  const handleRealGooglePopup = async () => {
    setIsAuthenticating(true);

    try {
      const user = await signInWithGoogle();
      if (user) {
        onSelectAccount({
          name: user.displayName || 'Google User',
          email: user.email || '',
          avatarUrl: user.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'
        });
      }
    } catch (err: any) {
      console.warn("Firebase Google auth error:", err);
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden text-slate-900"
        id="google-signin-modal"
      >
        {/* Modal Header */}
        <div className="px-6 pt-6 pb-2 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-100 rounded-2xl shrink-0">
              <GoogleGLogo size={22} />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 font-['Google_Sans',sans-serif] leading-tight">
                Sign in with Google
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Download Brick Stack for Android
              </p>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            title="Close"
            aria-label="Close"
            id="close-signin-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-5 space-y-4">
          
          {/* Primary Option: Google Sign-in */}
          <div>
            <button
              onClick={handleRealGooglePopup}
              disabled={isAuthenticating}
              id="google-signin-submit-btn"
              className="w-full py-3 px-4 bg-white hover:bg-slate-50 border border-slate-300 rounded-2xl font-medium text-sm text-slate-800 shadow-xs transition-colors flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
            >
              {isAuthenticating ? (
                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
              ) : (
                <GoogleGLogo size={18} />
              )}
              <span>
                {isAuthenticating ? 'Connecting to Google Auth...' : 'Continue with Google Account'}
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-2">
            <div className="h-px bg-slate-200 flex-1" />
            <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider shrink-0">
              Or
            </span>
            <div className="h-px bg-slate-200 flex-1" />
          </div>

          {/* Secondary Option: Direct APK Download Without Sign-in */}
          <div className="flex flex-col items-center justify-center pt-0.5 space-y-1.5">
            <button
              onClick={onDownloadWithoutSignIn}
              id="direct-apk-download-btn"
              className="py-2 px-4 bg-slate-100/80 hover:bg-slate-200/80 active:bg-slate-200 text-slate-700 hover:text-slate-900 rounded-full font-medium text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-none"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Download Apk</span>
            </button>
            <p className="text-[11px] text-slate-400 text-center max-w-[260px] leading-tight">
              Direct downloads will not receive priority update alerts.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onOpenPrivacyPolicy}
            className="text-xs text-slate-500 hover:text-blue-600 font-medium transition-colors cursor-pointer hover:underline"
          >
            Privacy &amp; Terms
          </button>
          <button
            onClick={onCancel}
            className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
