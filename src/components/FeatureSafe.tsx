import React, { useState } from 'react';
import { ShieldCheck, Key, Lock, CheckCircle2, Copy, RefreshCw, AlertTriangle, Eye, EyeOff } from 'lucide-react';

export const FeatureSafe: React.FC = () => {
  // Password Generator state
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('k9#XmP2$vR9L!wQz');
  const [copied, setCopied] = useState(false);
  const [showPass, setShowPass] = useState(true);

  // Safety Check simulation state
  const [safetyCheckRunning, setSafetyCheckRunning] = useState(false);
  const [safetyCheckDone, setSafetyCheckDone] = useState(false);

  const generateNewPassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' + (includeSymbols ? '!@#$%^&*()' : '');
    let res = '';
    for (let i = 0; i < passwordLength; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPassword(res);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runSafetyCheck = () => {
    setSafetyCheckRunning(true);
    setSafetyCheckDone(false);
    setTimeout(() => {
      setSafetyCheckRunning(false);
      setSafetyCheckDone(true);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 via-white to-gray-50/50 border-t border-gray-100" id="safe-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-100">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Built-in Privacy & Security</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-['Google_Sans',sans-serif] text-gray-900 tracking-tight mb-4">
            Safe by design
          </h2>
          <p className="text-lg text-gray-600">
            Chrome continuously scans for malicious sites, alerts you to compromised passwords, and safeguards your personal data automatically.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Interactive Google Password Manager Generator */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl flex flex-col justify-between" id="card-password-manager">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Key className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Google Password Manager
                  </h3>
                  <p className="text-xs text-gray-500">Built right into Chrome</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6">
                Chrome creates, saves, and fills strong unique passwords for all your online accounts with enterprise-grade encryption.
              </p>

              {/* Password Generator Interactive Demo Widget */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6 space-y-4">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Try Password Generator Demo
                </div>

                {/* Password Result Display */}
                <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 flex items-center justify-between shadow-xs">
                  <span className="font-mono text-base font-bold text-gray-800 tracking-wider truncate mr-2">
                    {showPass ? generatedPassword : '••••••••••••••••'}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowPass(!showPass)}
                      className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                      title="Toggle password visibility"
                    >
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={generateNewPassword}
                      className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
                      title="Generate new password"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Controls */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Length: {passwordLength} chars</span>
                    <span className="text-emerald-600 font-semibold">Strong Entropy</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="32"
                    value={passwordLength}
                    onChange={(e) => {
                      setPasswordLength(Number(e.target.value));
                      generateNewPassword();
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Synced seamlessly across your phone, tablet, and laptop
            </div>
          </div>

          {/* Card 2: Interactive Safety Check */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl flex flex-col justify-between" id="card-safety-check">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Chrome Safety Check
                  </h3>
                  <p className="text-xs text-gray-500">Real-time security auditing</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6">
                Runs in the background to confirm your browser is up to date, passwords haven’t been leaked online, and malicious extensions are removed.
              </p>

              {/* Safety Check Widget */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-sm font-semibold text-gray-800">1-Click Safety Scan</span>
                  <button
                    onClick={runSafetyCheck}
                    disabled={safetyCheckRunning}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${safetyCheckRunning ? 'animate-spin' : ''}`} />
                    <span>{safetyCheckRunning ? 'Scanning...' : 'Check Now'}</span>
                  </button>
                </div>

                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-gray-500" /> Chrome Updates
                    </span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Latest Build Installed
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <span className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-gray-500" /> Password Breaches
                    </span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 0 Compromised Passwords
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-gray-500" /> Safe Browsing
                    </span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Standard Protection Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Blocks over 5 billion malicious phishing attacks every single day
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
