import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { GoogleAuthModal } from './components/GoogleAuthModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { LegalPoliciesPage } from './components/LegalPoliciesPage';
import { ThemeOption, UserProfile } from './types';
import { Download, RefreshCw, Lock, ExternalLink, X } from 'lucide-react';
import { auth, logUserDownload, signOutUser } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const THEMES: ThemeOption[] = [
  {
    id: 'canyon',
    name: 'Canyon Landscape',
    category: 'nature',
    primaryColor: '#7C2D12',
    secondaryColor: '#FFEDD5',
    tabBg: '#9A3412',
    addressBarBg: '#FFFFFF',
    wallpaperUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'vibrant-art',
    name: 'Vibrant Art',
    category: 'art',
    primaryColor: '#F59E0B',
    secondaryColor: '#FEF3C7',
    tabBg: '#D97706',
    addressBarBg: '#FFFFFF',
    wallpaperUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    customArt: true,
  },
  {
    id: 'ocean',
    name: 'Ocean Breeze',
    category: 'nature',
    primaryColor: '#0284C7',
    secondaryColor: '#E0F2FE',
    tabBg: '#0369A1',
    addressBarBg: '#FFFFFF',
    wallpaperUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'midnight',
    name: 'Midnight Dark',
    category: 'dark',
    primaryColor: '#1F2937',
    secondaryColor: '#111827',
    tabBg: '#374151',
    addressBarBg: '#1F2937',
    wallpaperUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'minimal',
    name: 'Classic Light',
    category: 'minimal',
    primaryColor: '#F3F4F6',
    secondaryColor: '#FFFFFF',
    tabBg: '#FFFFFF',
    addressBarBg: '#F9FAFB',
  },
];

// Direct download URL for Brick Stack APK from GitHub Release
const GITHUB_RELEASE_TAG_URL = 'https://github.com/sam-live2c/Retro-Bricks-Stacks/releases/tag/Brick-Stack';
const GITHUB_APK_URL = 'https://github.com/sam-live2c/Retro-Bricks-Stacks/releases/download/Brick-Stack/Brick-Stack.apk';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'legal'>(() => {
    const hash = window.location.hash;
    return (hash.includes('terms') || hash.includes('privacy') || hash.includes('legal')) ? 'legal' : 'home';
  });
  const [activeTheme] = useState<ThemeOption>(THEMES[0]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isGoogleAuthOpen, setIsGoogleAuthOpen] = useState<boolean>(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(false);
  const [notification, setNotification] = useState<{ 
    message: string; 
    type: 'download' | 'update' | 'auth_required'; 
    learnMoreLink?: boolean 
  } | null>(null);

  // Listen to hash changes for direct deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('terms') || hash.includes('privacy') || hash.includes('legal')) {
        setCurrentView('legal');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName || 'Google User',
          email: firebaseUser.email || '',
          avatarUrl: firebaseUser.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
        });
      }
    });
    return () => unsubscribe();
  }, []);

  // Trigger direct 1-click APK download without navigating to GitHub pages
  const triggerActualDownload = () => {
    // 1. Direct anchor click without target="_blank"
    const a = document.createElement('a');
    a.href = GITHUB_APK_URL;
    a.setAttribute('download', 'Brick-Stack.apk');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // 2. Hidden iframe fallback to guarantee browser download trigger in background
    try {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = GITHUB_APK_URL;
      document.body.appendChild(iframe);
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 8000);
    } catch {
      // Ignore if iframe creation is restricted
    }

    // Log to Firebase Firestore
    if (auth.currentUser) {
      logUserDownload(auth.currentUser);
    }
  };

  // Main "Get App" handler: If user didn't sign in, acts as sign in with google (without mentioning in UI button)
  const handleGetAppClick = () => {
    if (!user) {
      setIsGoogleAuthOpen(true);
    } else {
      triggerActualDownload();
    }
  };

  // Handle cancellation of Google Auth
  const handleGoogleAuthCancel = () => {
    setIsGoogleAuthOpen(false);
  };

  // Handle successful Google Account selection
  const handleGoogleAccountSelect = (selectedUser: UserProfile) => {
    setUser(selectedUser);
    setIsGoogleAuthOpen(false);
    triggerActualDownload();
  };

  const handleSingleClickUpdate = () => {
    handleGetAppClick();
  };

  const openLegalPrivacy = () => {
    setCurrentView('legal');
    window.location.hash = 'privacy-policy';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLegalTerms = () => {
    setCurrentView('legal');
    window.location.hash = 'terms-and-conditions';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If user requested full screen legal & policies page
  if (currentView === 'legal') {
    return (
      <LegalPoliciesPage
        onBackToHome={() => {
          setCurrentView('home');
          window.location.hash = '';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-700 flex flex-col justify-between relative overflow-x-hidden">
      
      {/* Toast Notification */}
      {notification && (
        <div 
          className={`fixed top-20 right-4 z-50 max-w-md w-[92vw] sm:w-auto px-4 py-3.5 rounded-2xl shadow-2xl border flex items-center justify-between gap-3 ${
            notification.type === 'auth_required' 
              ? 'bg-slate-900 text-white border-amber-500/40 ring-1 ring-amber-500/30' 
              : 'bg-gray-900 text-white border-gray-800'
          }`} 
          id="app-toast-notification"
        >
          <div className="flex items-center gap-3">
            {notification.type === 'download' ? (
              <Download className="w-5 h-5 text-blue-400 shrink-0" />
            ) : notification.type === 'update' ? (
              <RefreshCw className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <Lock className="w-5 h-5 text-amber-400 shrink-0" />
            )}

            <div className="text-xs font-medium leading-relaxed">
              {notification.message}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {notification.learnMoreLink && (
              <button
                onClick={openLegalPrivacy}
                className="px-2.5 py-1 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                id="toast-learn-more-btn"
              >
                <span>Learn More</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </button>
            )}

            <button
              onClick={() => setNotification(null)}
              className="p-1 text-slate-400 hover:text-white rounded-full transition-colors cursor-pointer"
              aria-label="Dismiss toast"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <Header
        onOpenDownload={handleGetAppClick}
        onOpenUpdate={handleSingleClickUpdate}
        onOpenLegal={openLegalPrivacy}
        user={user}
        onSignOut={() => {
          signOutUser();
          setUser(null);
        }}
        onOpenPrivacyPolicy={openLegalPrivacy}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDownload={handleGetAppClick}
          onOpenUpdate={handleSingleClickUpdate}
          activeTheme={activeTheme}
        />
      </main>

      {/* Footer Section */}
      <Footer 
        onOpenPrivacyPolicy={openLegalPrivacy}
        onOpenTerms={openLegalTerms}
      />

      {/* Google Sign-in Modal (Implicit trigger when unsigned user clicks Get app) */}
      <GoogleAuthModal
        isOpen={isGoogleAuthOpen}
        onCancel={handleGoogleAuthCancel}
        onSelectAccount={handleGoogleAccountSelect}
        onOpenPrivacyPolicy={openLegalPrivacy}
        onDownloadWithoutSignIn={() => {
          setIsGoogleAuthOpen(false);
          triggerActualDownload();
        }}
      />

      {/* Sign-in Email Privacy & Policy Viewing Page Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        onProceedSignIn={() => {
          setIsGoogleAuthOpen(true);
        }}
      />

    </div>
  );
}


