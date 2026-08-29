import React from 'react';
import { 
  Trophy, 
  Pause, 
  Play,
  RotateCcw, 
  Volume2, 
  Settings, 
  ArrowUp, 
  ArrowLeft, 
  ArrowRight, 
  ArrowDown, 
  RotateCw, 
  Hand, 
  ChevronsDown,
  Layers,
  Signal,
  Wifi,
  Battery
} from 'lucide-react';
import { AppScreenshot } from './HeroCards';

interface PhoneMockupProps {
  screen: AppScreenshot;
  isActive?: boolean;
  scale?: number;
  onClick?: () => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  screen,
  isActive = true,
  onClick,
}) => {
  // High-fidelity Retro LCD / Tetris Brick component with beveled retro brick effect
  const renderBrick = (type: 'solid' | 'ghost' | 'empty' | 'placed' = 'solid', className = '') => {
    if (type === 'empty') {
      return (
        <div className={`w-full aspect-square border border-slate-900/[0.08] rounded-[1.5px] ${className}`} />
      );
    }
    if (type === 'ghost') {
      return (
        <div className={`w-full aspect-square border-2 border-dashed border-slate-900/60 rounded-[1.5px] flex items-center justify-center ${className}`}>
          <div className="w-1 h-1 bg-slate-900/30 rounded-[0.5px]" />
        </div>
      );
    }
    // Solid / Placed Retro 3D Brick Block (Authentic Tetris LCD brick with inner bevel & core pixel)
    return (
      <div className={`w-full aspect-square bg-[#131b11] rounded-[1.5px] p-[1.5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_1px_1px_rgba(0,0,0,0.3)] flex items-center justify-center relative overflow-hidden ${className}`}>
        <div className="w-full h-full border border-slate-800/80 bg-[#1d2719] rounded-[1px] flex items-center justify-center">
          <div className="w-[45%] h-[45%] bg-[#0e140d] rounded-[0.5px] shadow-inner" />
        </div>
      </div>
    );
  };

  const renderPieceGrid = (piece: string | undefined | null) => {
    if (!piece) return <div className="w-8 h-8" />;

    if (piece === 'O') {
      return (
        <div className="grid grid-cols-2 gap-[1.5px] w-7 h-7 bg-transparent p-0.5">
          {renderBrick('solid')}
          {renderBrick('solid')}
          {renderBrick('solid')}
          {renderBrick('solid')}
        </div>
      );
    }

    if (piece === 'I') {
      return (
        <div className="grid grid-cols-4 gap-[1.5px] w-9 h-3.5 p-0.5">
          {renderBrick('solid')}
          {renderBrick('solid')}
          {renderBrick('solid')}
          {renderBrick('solid')}
        </div>
      );
    }

    if (piece === 'T') {
      return (
        <div className="grid grid-cols-3 gap-[1.5px] w-8 h-6 p-0.5">
          <div />
          {renderBrick('solid')}
          <div />
          {renderBrick('solid')}
          {renderBrick('solid')}
          {renderBrick('solid')}
        </div>
      );
    }

    if (piece === 'Z') {
      return (
        <div className="grid grid-cols-3 gap-[1.5px] w-8 h-6 p-0.5">
          {renderBrick('solid')}
          {renderBrick('solid')}
          <div />
          <div />
          {renderBrick('solid')}
          {renderBrick('solid')}
        </div>
      );
    }

    if (piece === 'S') {
      return (
        <div className="grid grid-cols-3 gap-[1.5px] w-8 h-6 p-0.5">
          <div />
          {renderBrick('solid')}
          {renderBrick('solid')}
          {renderBrick('solid')}
          {renderBrick('solid')}
          <div />
        </div>
      );
    }

    if (piece === 'L') {
      return (
        <div className="grid grid-cols-3 gap-[1.5px] w-8 h-6 p-0.5">
          <div />
          <div />
          {renderBrick('solid')}
          {renderBrick('solid')}
          {renderBrick('solid')}
          {renderBrick('solid')}
        </div>
      );
    }

    if (piece === 'J') {
      return (
        <div className="grid grid-cols-3 gap-[1.5px] w-8 h-6 p-0.5">
          {renderBrick('solid')}
          <div />
          <div />
          {renderBrick('solid')}
          {renderBrick('solid')}
          {renderBrick('solid')}
        </div>
      );
    }

    return null;
  };

  return (
    <div 
      onClick={onClick}
      className={`w-full relative transition-all duration-300 ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Edge Hardware Buttons */}
      <div className="absolute right-[-4px] top-[100px] w-[3px] h-[38px] bg-gradient-to-r from-slate-400 to-slate-600 rounded-r-xs shadow-md z-30 pointer-events-none" />
      <div className="absolute right-[-4px] top-[148px] w-[3px] h-[38px] bg-gradient-to-r from-slate-400 to-slate-600 rounded-r-xs shadow-md z-30 pointer-events-none" />
      <div className="absolute right-[-4px] top-[215px] w-[3px] h-[30px] bg-gradient-to-r from-slate-400 to-slate-600 rounded-r-xs shadow-md z-30 pointer-events-none" />

      {/* Samsung Galaxy Ultra Titanium Frame */}
      <div className={`w-full rounded-[28px] p-[3.5px] bg-gradient-to-br from-[#dedfe6] via-[#6f7482] to-[#12141a] border border-slate-700/60 relative overflow-hidden ${
        isActive ? 'shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)]' : 'shadow-lg opacity-60 hover:opacity-90'
      }`}>
        
        {/* Inner Bezel Layer */}
        <div className="w-full rounded-[24px] bg-[#090b0e] p-2 sm:p-2.5 relative flex flex-col justify-between overflow-hidden">
          
          {/* Punch Hole Camera */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-black rounded-full border border-slate-800 shadow-inner flex items-center justify-center">
              <div className="w-1 h-1 bg-[#0b1d3a] rounded-full opacity-80" />
            </div>
          </div>

          {/* Status Bar */}
          <div className="w-full pt-1 pb-1 px-3 flex items-center justify-between text-[11px] font-medium tracking-tight text-white/90 z-20 select-none">
            <div className="flex items-center gap-1">
              <span className="font-bold text-[11px]">10:08</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-90 text-[10px]">
              <span className="font-mono text-[9px] font-bold">5G</span>
              <Signal className="w-3 h-3 fill-current" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none z-20 rounded-[24px]" />

          {/* Console Body Inside Phone Screen */}
          <div className={`w-full rounded-[18px] p-2.5 relative border-2 transition-colors ${
            screen.theme === 'yellow'
              ? 'bg-[#E5A913] border-[#B8820B]'
              : 'bg-[#352952] border-[#251B3D]'
          }`}>
            
            {/* Header */}
            <div className="px-1 mb-2 flex items-center justify-between text-xs font-mono font-bold tracking-tight text-slate-900">
              <span className={`text-xs sm:text-sm tracking-wider font-black ${screen.theme === 'purple' ? 'text-white' : 'text-slate-950'}`}>
                BRICK STACK
              </span>
              
              <div className="flex items-center gap-1.5">
                <div className="px-2 py-0.5 rounded-md bg-[#99B087] border border-[#546844] text-slate-800 text-[10px] font-sans font-medium shadow-2xs flex items-center gap-1">
                  <Layers className="w-3 h-3 text-slate-700 shrink-0" />
                  <span>LEVEL</span>
                </div>
                <div className="px-2 py-0.5 rounded-md bg-[#99B087] border border-[#546844] text-slate-800 text-[10px] font-sans font-medium shadow-2xs flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-slate-700 shrink-0" />
                  <span>SCORE</span>
                </div>
              </div>
            </div>

            {/* Green LCD Screen Frame */}
            <div className="bg-[#99B087] rounded-xl border-2 border-[#546844] p-2 relative shadow-inner overflow-hidden font-mono text-slate-900 min-h-[300px] flex flex-col justify-between">
              
              {/* LCD Screen Grid Layout */}
              <div className="grid grid-cols-12 gap-1 flex-1">
                
                {/* Main Matrix Grid (8 cols) - Reduced opacity & thinned border */}
                <div className="col-span-8 bg-[#88A075]/65 border-[0.5px] border-[#6B825C]/60 rounded-md p-1 flex flex-col justify-between relative overflow-hidden shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)]">
                  
                  {/* GAMEPLAY STATE - Realistic 10x20 Tetris Matrix Playground */}
                  {screen.state === 'gameplay' && (
                    <div className="h-full w-full flex flex-col justify-between relative">
                      {/* Grid background 10 Columns x 18 Rows */}
                      <div className="w-full h-[180px] grid grid-cols-10 grid-rows-18 gap-[1px] relative">
                        {/* Background LCD cell raster dots */}
                        {Array.from({ length: 180 }).map((_, i) => (
                          <div 
                            key={i} 
                            className="w-full h-full border-[0.5px] border-[#7d9669]/60 rounded-[0.5px]" 
                          />
                        ))}

                        {/* TETRIS ACTIVE PLAYGROUND BLOCKS */}
                        {/* 1. Falling Active Piece (T-piece or Z-piece or O-piece with crisp 3D styling) */}
                        {screen.id === 1 && (
                          <>
                            {/* Falling Z Piece at Row 6-7, Col 4-6 */}
                            <div className="absolute top-[28%] left-[30%] w-[30%] grid grid-cols-3 gap-[1px] z-10">
                              {renderBrick('solid')}
                              {renderBrick('solid')}
                              <div />
                              <div />
                              {renderBrick('solid')}
                              {renderBrick('solid')}
                            </div>
                            {/* Ghost projection at bottom */}
                            <div className="absolute bottom-[22%] left-[30%] w-[30%] grid grid-cols-3 gap-[1px] z-5 opacity-40">
                              {renderBrick('ghost')}
                              {renderBrick('ghost')}
                              <div />
                              <div />
                              {renderBrick('ghost')}
                              {renderBrick('ghost')}
                            </div>
                          </>
                        )}

                        {screen.id === 5 && (
                          <>
                            {/* Falling T Piece at Row 5, Col 4-6 */}
                            <div className="absolute top-[24%] left-[30%] w-[30%] grid grid-cols-3 gap-[1px] z-10">
                              <div />
                              {renderBrick('solid')}
                              <div />
                              {renderBrick('solid')}
                              {renderBrick('solid')}
                              {renderBrick('solid')}
                            </div>
                            {/* Ghost projection */}
                            <div className="absolute bottom-[33%] left-[30%] w-[30%] grid grid-cols-3 gap-[1px] z-5 opacity-40">
                              <div />
                              {renderBrick('ghost')}
                              <div />
                              {renderBrick('ghost')}
                              {renderBrick('ghost')}
                              {renderBrick('ghost')}
                            </div>
                          </>
                        )}

                        {/* 2. Realistic Stacked Bricks / Terrain at the Bottom */}
                        {/* Row 17 (Bottom-most stacked layer with well for I-piece) */}
                        <div className="absolute bottom-0 left-0 w-full grid grid-cols-10 gap-[1px] z-10">
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          <div />
                        </div>

                        {/* Row 16 (Second layer) */}
                        <div className="absolute bottom-[5.5%] left-0 w-full grid grid-cols-10 gap-[1px] z-10">
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          <div />
                          <div />
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          <div />
                        </div>

                        {/* Row 15 (Third layer) */}
                        <div className="absolute bottom-[11%] left-0 w-full grid grid-cols-10 gap-[1px] z-10">
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          <div />
                          <div />
                          <div />
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          <div />
                          <div />
                        </div>

                        {/* Row 14 (Fourth layer bump) */}
                        <div className="absolute bottom-[16.5%] left-0 w-full grid grid-cols-10 gap-[1px] z-10">
                          <div />
                          {renderBrick('solid')}
                          <div />
                          <div />
                          <div />
                          <div />
                          {renderBrick('solid')}
                          {renderBrick('solid')}
                          <div />
                          <div />
                        </div>

                        {/* Row 13 (Fifth layer bump for Level 7) */}
                        {screen.id === 5 && (
                          <div className="absolute bottom-[22%] left-0 w-full grid grid-cols-10 gap-[1px] z-10">
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            {renderBrick('solid')}
                            <div />
                            <div />
                            <div />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* PAUSED STATE */}
                  {screen.state === 'paused' && (
                    <div className="h-full w-full flex flex-col items-center justify-center text-center py-6 relative">
                      {/* Grid background behind pause overlay */}
                      <div className="absolute inset-0 grid grid-cols-10 grid-rows-18 gap-[1px] opacity-15 pointer-events-none p-1">
                        {Array.from({ length: 180 }).map((_, i) => (
                          <div key={i} className="border-[0.5px] border-slate-950/20" />
                        ))}
                      </div>

                      <div className="relative z-10 bg-[#99B087]/90 border-2 border-slate-900 px-3 py-2.5 rounded-lg shadow-sm">
                        <span className="text-sm sm:text-base font-black tracking-widest text-slate-950 block mb-0.5">
                          PAUSED
                        </span>
                        <div className="flex items-center justify-center gap-1 text-[8px] tracking-wider text-slate-900 font-sans font-bold">
                          <Pause className="w-2.5 h-2.5 fill-current" />
                          <span>TAP TO RESUME</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VICTORY STATE */}
                  {screen.state === 'victory' && (
                    <div className="h-full w-full flex flex-col items-center justify-center text-center p-1.5 relative overflow-hidden">
                      {/* Victory checkered line clear animation effect */}
                      <div className="flex items-center gap-1 text-slate-950 font-black text-xs mb-1">
                        <Trophy className="w-3.5 h-3.5 fill-slate-950" />
                        <span>STAGE CLEARED</span>
                      </div>
                      
                      <div className="grid grid-cols-8 gap-[1px] w-full my-1 opacity-70">
                        {Array.from({ length: 16 }).map((_, idx) => (
                          <div key={idx} className={idx % 2 === 0 ? 'bg-slate-900 h-1.5' : 'bg-transparent h-1.5'} />
                        ))}
                      </div>

                      <div className="bg-[#839B71] border border-[#637A52] rounded-lg p-1.5 w-full mb-2 text-center">
                        <div className="flex justify-around text-[8px] font-bold text-slate-800 mb-0.5">
                          <span>SCORE</span>
                          <span>LINES</span>
                        </div>
                        <div className="flex justify-around text-xs font-extrabold text-slate-950 font-mono">
                          <span>{screen.victoryScore || '9785'}</span>
                          <span>{screen.victoryLines || '13'}</span>
                        </div>
                      </div>

                      <div className="flex gap-1 w-full">
                        <div className="flex-1 bg-[#839B71] border border-slate-900 rounded py-0.5 text-[8px] font-extrabold flex items-center justify-center gap-0.5 text-slate-950">
                          <RotateCcw className="w-2 h-2" /> REPLAY
                        </div>
                        <div className="flex-1 bg-slate-950 text-[#99B087] rounded py-0.5 text-[8px] font-extrabold flex items-center justify-center">
                          NEXT ▶
                        </div>
                      </div>
                    </div>
                  )}

                  {/* GAME OVER STATE */}
                  {screen.state === 'gameover' && (
                    <div className="h-full w-full flex flex-col items-center justify-center text-center py-4 relative overflow-hidden">
                      {/* Jammed blocks at top */}
                      <div className="w-full grid grid-cols-10 gap-[1px] mb-2 opacity-50">
                        {renderBrick('solid')}
                        {renderBrick('solid')}
                        {renderBrick('solid')}
                        {renderBrick('solid')}
                        {renderBrick('solid')}
                        {renderBrick('solid')}
                        {renderBrick('solid')}
                        {renderBrick('solid')}
                        {renderBrick('solid')}
                        {renderBrick('solid')}
                      </div>

                      <span className="text-sm font-black tracking-widest text-slate-950 mb-0.5">
                        GAME OVER
                      </span>
                      <div className="text-[10px] font-bold text-slate-900 mb-1 font-mono">
                        FINAL: {screen.score.replace(/^0+/, '') || '870'}
                      </div>
                      <div className="bg-slate-950 text-[#99B087] text-[8px] tracking-wider font-sans font-bold px-2 py-0.5 rounded">
                        PRESS RESTART
                      </div>
                    </div>
                  )}

                </div>

                {/* Right Sidebar Stats (4 cols) */}
                <div className="col-span-4 flex flex-col gap-1 justify-between">
                  <div className="bg-[#8EA67B] border border-[#6B825C] rounded-md p-1 flex flex-col items-center">
                    <span className="text-[7px] font-bold tracking-widest text-slate-800">NEXT</span>
                    <div className="my-0.5 flex items-center justify-center min-h-[24px]">
                      {renderPieceGrid(screen.nextPiece)}
                    </div>
                  </div>

                  <div className="bg-[#8EA67B] border border-[#6B825C] rounded-md p-1 flex flex-col items-center min-h-[30px]">
                    <span className="text-[7px] font-bold tracking-widest text-slate-800">HOLD</span>
                    <div className="my-0.5 flex items-center justify-center">
                      {renderPieceGrid(screen.holdPiece)}
                    </div>
                  </div>

                  <div className="bg-[#8EA67B] border border-[#6B825C] rounded-md p-1 px-1.5 text-[7px] flex flex-col gap-0.5 items-start text-left">
                    <span className="font-bold tracking-wider text-slate-800 text-left w-full">STATS</span>
                    <div className="text-left w-full">
                      <div className="text-[6px] text-slate-700 font-semibold tracking-tight">SCORE</div>
                      <div className="font-extrabold text-slate-950 text-[8px] font-mono leading-tight">{screen.score}</div>
                    </div>
                    <div className="text-left w-full">
                      <div className="text-[6px] text-slate-700 font-semibold tracking-tight">HI-SCORE</div>
                      <div className="font-extrabold text-slate-950 text-[8px] font-mono leading-tight">{screen.hiScore}</div>
                    </div>
                    <div className="text-left w-full">
                      <div className="text-[6px] text-slate-700 font-semibold tracking-tight">TIME</div>
                      <div className="font-extrabold text-slate-950 text-[8px] font-mono leading-tight">{screen.time}</div>
                    </div>
                    {screen.lines && (
                      <div className="text-left w-full">
                        <div className="text-[6px] text-slate-700 font-semibold tracking-tight">LINES</div>
                        <div className="font-extrabold text-slate-950 text-[8px] font-mono leading-tight">{screen.lines}</div>
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </div>

            {/* Console Controls */}
            <div className="mt-2.5">
              {/* Top Option / Function Buttons Row with Borderless Pill Style & Labels Bellow */}
              <div className="grid grid-cols-4 gap-1 mb-2.5 px-0.5">
                {/* PAUSE BUTTON */}
                <div className="flex flex-col items-center">
                  <div className="bg-slate-900/45 hover:bg-slate-900/65 rounded-full w-7 h-4 flex items-center justify-center text-white shadow-xs transition-transform active:scale-95">
                    <Pause className="w-2.5 h-2.5" />
                  </div>
                  <span className={`text-[6px] font-black tracking-wider mt-0.5 uppercase ${
                    screen.theme === 'purple' ? 'text-slate-200' : 'text-slate-950'
                  }`}>
                    PAUSE
                  </span>
                </div>

                {/* RESTART BUTTON */}
                <div className="flex flex-col items-center">
                  <div className="bg-slate-900/45 hover:bg-slate-900/65 rounded-full w-7 h-4 flex items-center justify-center text-white shadow-xs transition-transform active:scale-95">
                    <RotateCcw className="w-2.5 h-2.5" />
                  </div>
                  <span className={`text-[6px] font-black tracking-wider mt-0.5 uppercase ${
                    screen.theme === 'purple' ? 'text-slate-200' : 'text-slate-950'
                  }`}>
                    RESTART
                  </span>
                </div>

                {/* SOUND BUTTON */}
                <div className="flex flex-col items-center">
                  <div className="bg-slate-900/45 hover:bg-slate-900/65 rounded-full w-7 h-4 flex items-center justify-center text-white shadow-xs transition-transform active:scale-95">
                    <Volume2 className="w-2.5 h-2.5" />
                  </div>
                  <span className={`text-[6px] font-black tracking-wider mt-0.5 uppercase ${
                    screen.theme === 'purple' ? 'text-slate-200' : 'text-slate-950'
                  }`}>
                    SOUND
                  </span>
                </div>

                {/* OPTION / SETTINGS BUTTON */}
                <div className="flex flex-col items-center">
                  <div className="bg-slate-900/45 hover:bg-slate-900/65 rounded-full w-7 h-4 flex items-center justify-center text-white shadow-xs transition-transform active:scale-95">
                    <Settings className="w-2.5 h-2.5" />
                  </div>
                  <span className={`text-[6px] font-black tracking-wider mt-0.5 uppercase ${
                    screen.theme === 'purple' ? 'text-slate-200' : 'text-slate-950'
                  }`}>
                    OPTION
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between px-0.5">
                <div className="w-16 h-16 bg-slate-900/40 rounded-full p-1 flex items-center justify-center relative shadow-inner">
                  <div className="w-full h-full relative flex items-center justify-center">
                    <div className="w-5 h-12 bg-slate-900 rounded-md absolute" />
                    <div className="w-12 h-5 bg-slate-900 rounded-md absolute" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800 z-10" />
                    <ArrowUp className="w-3 h-3 text-gray-300 absolute top-0.5 z-10" />
                    <ArrowDown className="w-3 h-3 text-gray-300 absolute bottom-0.5 z-10" />
                    <ArrowLeft className="w-3 h-3 text-gray-300 absolute left-0.5 z-10" />
                    <ArrowRight className="w-3 h-3 text-gray-300 absolute right-0.5 z-10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-amber-400 border border-amber-600 shadow-sm flex items-center justify-center text-slate-950 font-bold">
                      <RotateCw className="w-3 h-3" />
                    </div>
                    <span className={`text-[6px] font-extrabold tracking-tight mt-0.5 ${screen.theme === 'purple' ? 'text-slate-200' : 'text-slate-950'}`}>ROT R</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 border border-emerald-700 shadow-sm flex items-center justify-center text-white font-bold">
                      <RotateCcw className="w-3 h-3" />
                    </div>
                    <span className={`text-[6px] font-extrabold tracking-tight mt-0.5 ${screen.theme === 'purple' ? 'text-slate-200' : 'text-slate-950'}`}>ROT L</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-cyan-400 border border-cyan-600 shadow-sm flex items-center justify-center text-slate-950 font-bold">
                      <Hand className="w-3 h-3" />
                    </div>
                    <span className={`text-[6px] font-extrabold tracking-tight mt-0.5 ${screen.theme === 'purple' ? 'text-slate-200' : 'text-slate-950'}`}>HOLD</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-red-500 border border-red-700 shadow-sm flex items-center justify-center text-white font-bold">
                      <ChevronsDown className="w-3 h-3" />
                    </div>
                    <span className={`text-[6px] font-extrabold tracking-tight mt-0.5 ${screen.theme === 'purple' ? 'text-slate-200' : 'text-slate-950'}`}>DROP</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Android Gesture Bar */}
          <div className="w-28 h-1 bg-white/40 rounded-full mx-auto mt-2 mb-0.5 z-20" />

        </div>
      </div>

      {/* Shadow */}
      {isActive && (
        <div className="w-[240px] sm:w-[280px] h-6 bg-slate-900/40 rounded-full blur-lg mx-auto -mt-2 pointer-events-none" />
      )}
    </div>
  );
};
