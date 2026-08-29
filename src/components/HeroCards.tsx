import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { ThemeOption } from '../types';
import { PhoneMockup } from './PhoneMockup';

export interface AppScreenshot {
  id: number;
  title: string;
  theme: 'yellow' | 'purple';
  state: 'gameplay' | 'victory' | 'paused' | 'gameover';
  score: string;
  hiScore: string;
  level: string;
  time: string;
  lines: string;
  nextPiece: 'O' | 'T' | 'Z' | 'L' | 'J';
  holdPiece?: 'L' | null;
  victoryScore?: string;
  victoryLines?: string;
  description: string;
}

export const SCREENSHOTS: AppScreenshot[] = [
  {
    id: 1,
    title: 'Yellow Arcade - Active Gameplay',
    theme: 'yellow',
    state: 'gameplay',
    score: '000234',
    hiScore: '012606',
    level: 'L02',
    time: '00:08',
    lines: '0/11',
    nextPiece: 'T',
    holdPiece: 'L',
    description: 'Active brick stacking arcade gameplay with falling Z-piece.'
  },
  {
    id: 2,
    title: 'Yellow Arcade - Paused',
    theme: 'yellow',
    state: 'paused',
    score: '000234',
    hiScore: '012606',
    level: 'L02',
    time: '00:09',
    lines: '0/11',
    nextPiece: 'T',
    holdPiece: 'L',
    description: 'Instant pause screen overlay with quick tap to resume feature.'
  },
  {
    id: 3,
    title: 'Yellow Arcade - Stage Victory',
    theme: 'yellow',
    state: 'victory',
    score: '009785',
    hiScore: '012606',
    level: 'L05',
    time: '02:46',
    lines: '13/13',
    victoryScore: '9785',
    victoryLines: '13',
    nextPiece: 'O',
    holdPiece: 'L',
    description: 'Stage cleared victory modal with Next Level & Replay arcade controls.'
  },
  {
    id: 4,
    title: 'Yellow Arcade - Game Over',
    theme: 'yellow',
    state: 'gameover',
    score: '000370',
    hiScore: '012606',
    level: 'L02',
    time: '00:12',
    lines: '0/11',
    nextPiece: 'O',
    description: 'Classic yellow console Game Over screen on Level 2.'
  },
  {
    id: 5,
    title: 'Dark Arcade - Active Gameplay',
    theme: 'purple',
    state: 'gameplay',
    score: '000700',
    hiScore: '012606',
    level: 'L07',
    time: '00:06',
    lines: '0/15',
    nextPiece: 'Z',
    description: 'Dark mode Level 7 fast-paced brick drop gameplay.'
  },
  {
    id: 6,
    title: 'Dark Arcade - Paused',
    theme: 'purple',
    state: 'paused',
    score: '000700',
    hiScore: '012606',
    level: 'L07',
    time: '00:08',
    lines: '0/15',
    nextPiece: 'Z',
    description: 'Dark purple theme pause mode screen.'
  },
  {
    id: 7,
    title: 'Dark Arcade - Stage Victory',
    theme: 'purple',
    state: 'victory',
    score: '008830',
    hiScore: '012606',
    level: 'L04',
    time: '02:57',
    lines: '12/12',
    victoryScore: '8830',
    victoryLines: '12',
    nextPiece: 'J',
    description: 'Dark mode Level 4 stage victory celebration screen.'
  },
  {
    id: 8,
    title: 'Dark Arcade - Game Over',
    theme: 'purple',
    state: 'gameover',
    score: '000870',
    hiScore: '012606',
    level: 'L07',
    time: '00:09',
    lines: '0/15',
    nextPiece: 'O',
    description: 'Level 7 Game Over screen with score breakdown and press restart prompt.'
  }
];

interface HeroCardsProps {
  activeTheme?: ThemeOption;
}

export const HeroCards: React.FC<HeroCardsProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);

  const activeIndex = ((currentIndex % SCREENSHOTS.length) + SCREENSHOTS.length) % SCREENSHOTS.length;
  const activeScreen = SCREENSHOTS[activeIndex];

  const prevIndex = (activeIndex - 1 + SCREENSHOTS.length) % SCREENSHOTS.length;
  const prevScreen = SCREENSHOTS[prevIndex];

  const nextIndex = (activeIndex + 1) % SCREENSHOTS.length;
  const nextScreen = SCREENSHOTS[nextIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SCREENSHOTS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  };

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      rotate: dir > 0 ? 5 : -5,
      scale: 0.95,
      opacity: 1,
    }),
    center: {
      x: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      rotate: dir > 0 ? -5 : 5,
      scale: 0.95,
      opacity: 1,
    }),
  };

  return (
    <div className="w-full py-4 select-none flex flex-col items-center" id="hero-cards-showcase">
      
      {/* Main Showcase Stage (3 Card style for desktop/tablets, top z-index layer, desktop-only arrows) */}
      <div className="w-full max-w-6xl px-2 sm:px-4 flex items-center justify-center gap-2 lg:gap-6 relative z-40">
        
        {/* Left Manual Arrow Button (Desktop Viewport Only: hidden lg:flex) */}
        <button
          onClick={handlePrev}
          className="hidden lg:flex p-3 text-slate-800 hover:text-amber-500 bg-white hover:bg-slate-50 rounded-full shadow-lg border border-slate-200/80 transition-all hover:scale-110 active:scale-95 z-50 shrink-0 cursor-pointer items-center justify-center"
          title="Previous Mobile Card"
          aria-label="Previous mobile screen card"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Card Deck Stage Container with Top Z-Index Layering */}
        <div className="flex items-center justify-center w-full py-4 relative z-40">
          
          {/* DESKTOP & TABLET: Left Side Preview Card (3 Card Style - Exact Same Dimensions as Middle Card) */}
          {prevScreen && (
            <div 
              className="hidden md:flex flex-col items-center w-[290px] sm:w-[320px] md:w-[340px] shrink-0 -mr-10 md:-mr-14 lg:-mr-12 transition-all duration-300 cursor-pointer z-30 drop-shadow-xl hover:z-40 hover:scale-102" 
              onClick={handlePrev}
              title={`View ${prevScreen.title}`}
            >
              <div className="w-full pointer-events-none opacity-80 hover:opacity-100 transition-opacity">
                <PhoneMockup screen={prevScreen} isActive={false} />
              </div>
            </div>
          )}

          {/* MAIN CENTER MOBILE PHONE CARD (Highest Z-Index Layer z-50, Exact Same Dimensions, Freely Draggable) */}
          <div className="relative flex flex-col items-center w-[290px] sm:w-[320px] md:w-[340px] shrink-0 z-50">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={activeScreen.id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.35}
                whileDrag={{ scale: 1.03, cursor: 'grabbing' }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40 || info.velocity.x < -200) {
                    handleNext();
                  } else if (info.offset.x > 40 || info.velocity.x > 200) {
                    handlePrev();
                  }
                }}
                className="w-full relative touch-pan-y shadow-2xl rounded-[48px] cursor-grab active:cursor-grabbing z-50"
              >
                <PhoneMockup screen={activeScreen} isActive={true} onClick={handleNext} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DESKTOP & TABLET: Right Side Preview Card (3 Card Style - Exact Same Dimensions as Middle Card) */}
          {nextScreen && (
            <div 
              className="hidden md:flex flex-col items-center w-[290px] sm:w-[320px] md:w-[340px] shrink-0 -ml-10 md:-ml-14 lg:-ml-12 transition-all duration-300 cursor-pointer z-30 drop-shadow-xl hover:z-40 hover:scale-102" 
              onClick={handleNext}
              title={`View ${nextScreen.title}`}
            >
              <div className="w-full pointer-events-none opacity-80 hover:opacity-100 transition-opacity">
                <PhoneMockup screen={nextScreen} isActive={false} />
              </div>
            </div>
          )}

        </div>

        {/* Right Manual '>' Arrow Button (Desktop Viewport Only: hidden lg:flex) */}
        <button
          onClick={handleNext}
          className="hidden lg:flex p-3 text-slate-800 hover:text-amber-500 bg-white hover:bg-slate-50 rounded-full shadow-lg border border-slate-200/80 transition-all hover:scale-110 active:scale-95 z-50 shrink-0 cursor-pointer items-center justify-center"
          title="Next Mobile Card (>)"
          aria-label="Next mobile screen card"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

      </div>

    </div>
  );
};
