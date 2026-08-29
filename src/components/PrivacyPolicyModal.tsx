import React from 'react';
import { X, ShieldCheck, Mail, Lock, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedSignIn?: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  onProceedSignIn,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 flex flex-col max-h-[90vh]"
        id="privacy-policy-viewing-modal"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-2 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-2xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-['Google_Sans',sans-serif]">
                Sign-in Email Privacy & Policy
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Official Privacy Safeguards for Brick Stack Downloads
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-700 leading-relaxed">
          
          {/* Game Popups Highlights */}
          <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-amber-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> Game Fair Play Terms & Conditions
              </span>
              <span className="text-[10px] text-slate-400 font-mono">POPUP 1</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-200 italic bg-slate-800/80 p-3 rounded-xl border border-slate-700 font-sans">
              "Welcome Player! By playing this retro brick game, you default to accept our fair play terms & conditions. Enjoy smooth retro gameplay, craft your high scores, and stack like a champion!"
            </p>

            <div className="flex items-center justify-between text-xs font-semibold text-blue-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-blue-400" /> Game Privacy Policy
              </span>
              <span className="text-[10px] text-slate-400 font-mono">POPUP 2</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-200 italic bg-slate-800/80 p-3 rounded-xl border border-slate-700 font-sans">
              "Hey Gamer! Your privacy is 100% respected here. We collect zero personal data, and all your high scores & retro console settings stay stored safely right on your device. Have fun stacking bricks!"
            </p>
          </div>

          <div className="p-4 bg-slate-50/80 rounded-2xl flex items-start gap-3">
            <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                Why is Google Sign-in required for downloads?
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                To protect our software distribution, prevent automated bot downloads, and provide smooth APK updates for Android devices, Brick Stack requires a quick Google account verification prior to downloading.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
              1. Email Privacy & Data Protection
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Zero Promotional Spam:</strong> Your sign-in email address is strictly used for download access authorization. We will never sell, lease, or use your email for marketing blasts.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Minimal OAuth Scopes:</strong> Brick Stack requests only basic identity scopes (Name, Email, Profile picture) necessary to authenticate your download request.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>No Password Access:</strong> All authentication is processed directly by Google's secure OAuth servers. Brick Stack never sees or stores your Google password.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              2. User Rights, Account Deletion & 24/7 Support Action
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You maintain 100% control over your account. If any user wants to delete their logged-in account, clear download records, or log out remotely, please send a request to our support email at <a href="mailto:prople.site@gmail.com" className="text-blue-600 font-semibold underline">prople.site@gmail.com</a>. Our customer service is active <strong>24/7</strong> and will take <strong>immediate action</strong> to delete and purge your data.
            </p>
            <p className="text-xs text-slate-500">
              You can also manage or revoke Brick Stack's permissions anytime via <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" className="text-blue-600 underline font-medium">Google Account Permissions</a>.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 pb-6 pt-3 bg-white flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            Close
          </button>
          
          {onProceedSignIn && (
            <button
              onClick={() => {
                onClose();
                onProceedSignIn();
              }}
              className="px-5 py-2.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium text-xs rounded-full shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Sign in to Download</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
