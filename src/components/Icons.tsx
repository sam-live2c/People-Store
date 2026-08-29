import React from 'react';
import logoImg from '../assets/images/brick_stack_logo_1787990202685.jpg';

// Brick Stack Isolated Retro Handheld Console Icon (Exact Brick Game 9999 IN 1 with rightward head tilt)
export const BrickStackConsoleIcon: React.FC<{ size?: number; className?: string; tilt?: boolean }> = ({ 
  size = 36, 
  className = '',
  tilt = true 
}) => (
  <svg 
    width={size} 
    height={Math.round(size * 1.45)} 
    viewBox="0 0 100 145" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-xl ${tilt ? 'rotate-[14deg] transform origin-center' : ''} ${className}`}
    id="brick-stack-console-svg"
  >
    {/* Console Outer Yellow Body Shell */}
    <rect x="5" y="4" width="90" height="137" rx="16" fill="url(#yellow-body-grad)" stroke="#D97706" strokeWidth="1.5" />
    
    {/* Outer Shell Inner Highlight */}
    <rect x="7" y="6" width="86" height="133" rx="14" stroke="#FFE066" strokeWidth="1" opacity="0.6" fill="none" />
    
    {/* Dark Housing Bevel Box around Screen */}
    <rect x="13" y="12" width="74" height="64" rx="10" fill="#18181B" stroke="#27272A" strokeWidth="1.5" />
    
    {/* Green Pixel LCD Screen */}
    <rect x="20" y="17" width="60" height="42" rx="4" fill="#84CC16" />
    <rect x="20" y="17" width="60" height="42" rx="4" fill="url(#lcd-matrix-pattern)" opacity="0.95" />
    <rect x="20" y="17" width="60" height="42" rx="4" stroke="#4D7C0F" strokeWidth="1.5" fill="none" />
    
    {/* LCD Screen Graphics: ::TK, Tetromino Blocks & Score 00220 */}
    <g fill="#1F2937">
      {/* Top right pixel text: ::TK */}
      <text x="74" y="24" textAnchor="end" fill="#14532D" fontSize="4" fontFamily="monospace" fontWeight="900" letterSpacing="0.5">
        ::TK
      </text>

      {/* Screen Inner L-Border Lines */}
      <line x1="23" y1="20" x2="23" y2="54" stroke="#14532D" strokeWidth="1" />
      <line x1="23" y1="20" x2="52" y2="20" stroke="#14532D" strokeWidth="1" />

      {/* Falling Block 1 (Cross/T Block) */}
      <rect x="38" y="23" width="4" height="4" rx="0.5" />
      <rect x="42.5" y="23" width="4" height="4" rx="0.5" />
      <rect x="47" y="23" width="4" height="4" rx="0.5" />
      <rect x="42.5" y="27.5" width="4" height="4" rx="0.5" />

      {/* Falling Block 2 (Z-shape) */}
      <rect x="62" y="30" width="4" height="4" rx="0.5" />
      <rect x="66.5" y="30" width="4" height="4" rx="0.5" />
      <rect x="66.5" y="34.5" width="4" height="4" rx="0.5" />
      <rect x="71" y="34.5" width="4" height="4" rx="0.5" />

      {/* Stacked Bottom Blocks */}
      <rect x="25" y="42" width="4" height="4" rx="0.5" />
      <rect x="25" y="46.5" width="4" height="4" rx="0.5" />
      <rect x="25" y="51" width="4" height="4" rx="0.5" />
      <rect x="29.5" y="46.5" width="4" height="4" rx="0.5" />
      <rect x="29.5" y="51" width="4" height="4" rx="0.5" />
      <rect x="34" y="51" width="4" height="4" rx="0.5" />
      <rect x="38.5" y="51" width="4" height="4" rx="0.5" />

      <rect x="43" y="46.5" width="4" height="4" rx="0.5" />
      <rect x="43" y="51" width="4" height="4" rx="0.5" />
      <rect x="47.5" y="51" width="4" height="4" rx="0.5" />

      {/* Score Text bottom right: 00220 */}
      <text x="75" y="54" textAnchor="end" fill="#14532D" fontSize="5" fontFamily="monospace" fontWeight="900" letterSpacing="0.5">
        00220
      </text>
    </g>

    {/* BRICK GAME 9999 IN 1 Text in dark bezel */}
    <text x="50" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontFamily="monospace" letterSpacing="0.8">
      BRICK GAME
    </text>
    <text x="50" y="71" textAnchor="middle" fill="#E4E4E7" fontSize="4" fontWeight="800" fontFamily="monospace" letterSpacing="0.5">
      9999 IN 1
    </text>

    {/* D-Pad (Black Cross Controller with directional arrows) */}
    <g>
      <rect x="18" y="93" width="24" height="9" rx="2" fill="#18181B" stroke="#09090B" strokeWidth="0.8" />
      <rect x="25.5" y="85.5" width="9" height="24" rx="2" fill="#18181B" stroke="#09090B" strokeWidth="0.8" />
      
      {/* Directional Arrows */}
      <path d="M30 87.5 L28 90 H32 Z" fill="#71717A" />
      <path d="M30 107.5 L28 105 H32 Z" fill="#71717A" />
      <path d="M20 97.5 L22.5 95.5 V99.5 Z" fill="#71717A" />
      <path d="M40 97.5 L37.5 95.5 V99.5 Z" fill="#71717A" />
      <rect x="28.5" y="96" width="3" height="3" fill="#27272A" />
    </g>

    {/* Red Action Buttons (A & B) */}
    <g>
      {/* Button B (Top Right Red Circle) */}
      <circle cx="75" cy="88" r="7.5" fill="url(#red-btn-grad)" stroke="#991B1B" strokeWidth="1" />
      <text x="75" y="103" textAnchor="middle" fill="#18181B" fontSize="4.5" fontWeight="900" fontFamily="sans-serif">
        B
      </text>

      {/* Button A (Bottom Left Red Circle) */}
      <circle cx="61" cy="100" r="7.5" fill="url(#red-btn-grad)" stroke="#991B1B" strokeWidth="1" />
      <text x="61" y="115" textAnchor="middle" fill="#18181B" fontSize="4.5" fontWeight="900" fontFamily="sans-serif">
        A
      </text>
    </g>

    {/* Bottom 4 Black Pill Buttons */}
    <g>
      {/* S/P */}
      <rect x="19" y="121" width="12" height="4.5" rx="2.2" fill="#27272A" stroke="#18181B" strokeWidth="0.5" />
      <text x="25" y="132" textAnchor="middle" fill="#18181B" fontSize="3.5" fontWeight="800" fontFamily="sans-serif">
        S/P
      </text>

      {/* SOUND */}
      <rect x="35" y="121" width="12" height="4.5" rx="2.2" fill="#27272A" stroke="#18181B" strokeWidth="0.5" />
      <text x="41" y="132" textAnchor="middle" fill="#18181B" fontSize="3.2" fontWeight="800" fontFamily="sans-serif">
        SOUND
      </text>

      {/* RESET */}
      <rect x="51" y="121" width="12" height="4.5" rx="2.2" fill="#27272A" stroke="#18181B" strokeWidth="0.5" />
      <text x="57" y="132" textAnchor="middle" fill="#18181B" fontSize="3.2" fontWeight="800" fontFamily="sans-serif">
        RESET
      </text>

      {/* ON/OFF */}
      <rect x="67" y="14" width="14" height="4.5" rx="2.2" fill="#27272A" stroke="#18181B" strokeWidth="0.5" />
      <rect x="67" y="121" width="14" height="4.5" rx="2.2" fill="#27272A" stroke="#18181B" strokeWidth="0.5" />
      <text x="74" y="132" textAnchor="middle" fill="#18181B" fontSize="3" fontWeight="800" fontFamily="sans-serif">
        ON/OFF
      </text>
    </g>

    <defs>
      <linearGradient id="yellow-body-grad" x1="5" y1="4" x2="95" y2="141" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="0.4" stopColor="#F59E0B" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
      
      <linearGradient id="lcd-matrix-pattern" x1="20" y1="17" x2="80" y2="59" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BEF264" />
        <stop offset="1" stopColor="#84CC16" />
      </linearGradient>
      
      <radialGradient id="red-btn-grad" cx="60%" cy="40%" r="60%">
        <stop stopColor="#FCA5A5" />
        <stop offset="0.5" stopColor="#EF4444" />
        <stop offset="1" stopColor="#DC2626" />
      </radialGradient>
    </defs>
  </svg>
);

export const BrickStackLogo: React.FC<{ className?: string; size?: number; tilt?: boolean }> = ({ className = '', size = 36, tilt = true }) => (
  <BrickStackConsoleIcon size={size} className={className} tilt={tilt} />
);

export const BrickStackWordmark: React.FC<{ className?: string; showLogo?: boolean }> = ({ className = 'h-7', showLogo = false }) => (
  <div className={`flex items-center select-none ${className}`} id="brick-stack-wordmark-container">
    {showLogo && <BrickStackLogo size={32} className="mr-2.5" />}
    <span className="inline-flex items-center text-2xl font-black tracking-tight font-['Google_Sans',sans-serif]">
      <span className="text-gray-900 font-black tracking-tight">Brick</span>
      <span className="ml-1.5 px-2 py-0.5 rounded-lg bg-amber-500 text-slate-950 text-xl font-extrabold tracking-normal shadow-2xs border border-amber-600/30">
        Stack
      </span>
    </span>
  </div>
);

export const PropleStoreWordmark: React.FC<{ className?: string; showLogo?: boolean }> = ({ className = 'h-7', showLogo = false }) => (
  <div className={`flex items-center select-none ${className}`} id="prople-store-wordmark-container">
    {showLogo && <BrickStackLogo size={32} className="mr-2.5" />}
    <span className="inline-flex items-center text-2xl font-black tracking-tight font-['Google_Sans',sans-serif]">
      <span className="text-gray-900 font-black tracking-tight">Prople</span>
      <span className="ml-1.5 px-2 py-0.5 rounded-lg bg-amber-500 text-slate-950 text-xl font-extrabold tracking-normal shadow-2xs border border-amber-600/30">
        Store
      </span>
    </span>
  </div>
);

// Google Chrome 4-color multi-layered SVG logo
export const ChromeIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    id="chrome-logo-icon"
  >
    {/* Base shadow & circle */}
    <circle cx="50" cy="50" r="48" fill="white" />
    
    {/* Red section */}
    <path
      d="M50 2A48 48 0 0 1 91.56 26H50L31 50L50 2Z"
      fill="#EA4335"
    />
    <path
      d="M50 2L91.56 26H50Z"
      fill="#EA4335"
    />
    <path
      d="M50 2A48 48 0 0 1 91.56 26L65 71.96L31 50L50 2Z"
      fill="#EA4335"
    />

    {/* Green section */}
    <path
      d="M50 2A48 48 0 0 0 2 50A48 48 0 0 0 8.44 74L31 50L50 2Z"
      fill="#0F9D58"
    />
    <path
      d="M8.44 74A48 48 0 0 0 50 98A48 48 0 0 0 65 95.6L42 55.8L8.44 74Z"
      fill="#0F9D58"
    />

    {/* Yellow section */}
    <path
      d="M91.56 26A48 48 0 0 1 65 95.6L42 55.8L91.56 26Z"
      fill="#FFC107"
    />

    {/* Better seamless Chrome 4-Color gradient representation */}
    <circle cx="50" cy="50" r="48" fill="none" />
    
    {/* Precision SVG paths for Chrome Logo */}
    <g transform="translate(0,0)">
      <path d="M50,2 C76.5,2 98,23.5 98,50 C98,54.2 97.4,58.3 96.3,62.2 L65.3,62.2 C68.3,58.7 70,54.5 70,50 C70,39 61,30 50,30 C47,30 44.2,30.7 41.7,32 L25.5,4 C32.7,2.7 41.2,2 50,2 Z" fill="#EA4335" />
      <path d="M96.3,62.2 C91.5,79 78,91.8 60.7,96.3 L45.2,69.4 C46.7,69.8 48.3,70 50,70 C61,70 70,61 70,50 C70,48.3 69.8,46.7 69.4,45.2 L96.3,45.2 C97.4,49.7 98,54.4 98,50 C98,54.2 97.4,58.3 96.3,62.2 Z" fill="#FFC107" />
      <path d="M60.7,96.3 C44.5,100.5 27,95.5 15.6,83.4 L31.1,56.5 C34.6,62.5 41.3,66.5 49,66.9 L33.5,93.8 C42,97.7 51.5,98.6 60.7,96.3 Z" fill="#34A853" />
      <path d="M15.6,83.4 C3.5,70.5 -1.2,52 3.1,34.7 L30,50.2 C29.7,51.8 29.5,53.4 29.5,55 C29.5,66 38.5,75 49.5,75 C51.1,75 52.7,74.8 54.2,74.4 L38.7,101.3 C29.5,98 21.3,92.1 15.6,83.4 Z" fill="#34A853" opacity="0.9" />
      <path d="M3.1,34.7 C7.5,17 21.4,4.2 38.8,0.7 L54.3,27.6 C52.8,27.2 51.2,27 49.5,27 C38.5,27 29.5,36 29.5,47 C29.5,48.7 29.7,50.3 30.1,51.8 L3.1,34.7 Z" fill="#EA4335" opacity="0.85" />
      {/* Center White ring and Blue core */}
      <circle cx="50" cy="50" r="23" fill="#FFFFFF" />
      <circle cx="50" cy="50" r="18" fill="#1A73E8" />
    </g>
  </svg>
);

export const ChromeWordmark: React.FC<{ className?: string }> = ({ className = 'h-7' }) => (
  <div className={`flex items-center gap-2 select-none ${className}`} id="chrome-wordmark-container">
    <ChromeIcon size={30} />
    <span className="text-gray-700 font-medium text-xl tracking-tight font-['Google_Sans',sans-serif]">
      chrome
    </span>
  </div>
);

export const GoogleGLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

export const GoogleWordmark: React.FC<{ className?: string }> = ({ className = 'h-6' }) => (
  <span className={`font-['Google_Sans',sans-serif] font-bold text-2xl tracking-tight text-gray-800 ${className}`}>
    <span className="text-[#4285F4]">G</span>
    <span className="text-[#EA4335]">o</span>
    <span className="text-[#FBBC05]">o</span>
    <span className="text-[#4285F4]">g</span>
    <span className="text-[#34A853]">l</span>
    <span className="text-[#EA4335]">e</span>
  </span>
);

export const AppIconYouTube: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="12" fill="#FF0000" />
    <path d="M9.5 7.5L16 12L9.5 16.5V7.5Z" fill="white" />
  </svg>
);

export const AppIconGmail: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#F8F9FA" />
    <path d="M4 6L12 12L20 6V18H4V6Z" fill="#EA4335" opacity="0.15" />
    <path d="M4 6L12 12.5L20 6" stroke="#EA4335" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 6V18H7V10.5L12 14.5L17 10.5V18H20V6" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const AppIconMaps: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="12" fill="#34A853" />
    <path d="M12 4C8.7 4 6 6.7 6 10C6 14.5 12 20 12 20C12 20 18 14.5 18 10C18 6.7 15.3 4 12 4ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill="white" />
  </svg>
);

export const AppIconDrive: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M8 17.5L3 8.8L8.2 0H18.2L13 8.8L8 17.5Z" fill="#FFC107" transform="scale(0.8) translate(3,3)" />
    <path d="M15 17.5L8 17.5L13 8.8L23 8.8L18 17.5H15Z" fill="#1A73E8" transform="scale(0.8) translate(1,3)" />
    <path d="M8.2 0L13.2 8.8L8.2 17.5L3.2 8.8L8.2 0Z" fill="#0F9D58" transform="scale(0.8) translate(3,3)" />
  </svg>
);

export const GeminiSparkle: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-grad)" />
    <defs>
      <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A73E8" />
        <stop offset="0.5" stopColor="#8AB4F8" />
        <stop offset="1" stopColor="#D93025" />
      </linearGradient>
    </defs>
  </svg>
);
