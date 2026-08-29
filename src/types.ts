export interface ThemeOption {
  id: string;
  name: string;
  category: 'nature' | 'art' | 'dark' | 'minimal' | 'neon';
  primaryColor: string;
  secondaryColor: string;
  tabBg: string;
  addressBarBg: string;
  wallpaperUrl?: string;
  customArt?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'download' | 'privacy' | 'performance' | 'features';
}

export type PlatformType = 'windows' | 'mac-arm' | 'mac-intel' | 'android' | 'ios' | 'linux';

export interface PlatformInfo {
  id: PlatformType;
  name: string;
  os: string;
  reqs: string;
  icon: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
}

