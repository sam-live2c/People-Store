import React from 'react';
import { 
  Trophy, 
  Pause, 
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
  const renderPieceGrid = (piece: string | undefined | null) => {
    if (!piece) return <div className="w-10 h-10" />;

    if (piece === 'O') {
      return (
        <div className="grid grid-cols-2 gap-0.5 w-7 h-7 bg-transparent p-0.5">
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
        </div>
      );
    }

    if (piece === 'T') {
      return (
        <div className="grid grid-cols-3 gap-0.5 w-10 h-7 p-0.5">
          <div />
          <div className="bg-slate-900 rounded-[1px]" />
          <div />
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
        </div>
      );
    }

    if (piece === 'Z') {
      return (
        <div className="grid grid-cols-3 gap-0.5 w-10 h-7 p-0.5">
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
          <div />
          <div />
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
        </div>
      );
    }

    if (piece === 'L') {
      return (
        <div className="grid grid-cols-3 gap-0.5 w-10 h-7 p-0.5">
          <div />
          <div />
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
        </div>
      );
    }

    if (piece === 'J') {
      return (
        <div className="grid grid-cols-3 gap-0.5 w-10 h-7 p-0.5">
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
          <div className="bg-slate-900 rounded-[1px]" />
          <div />
          <div />
          <div className="bg-slate-900 rounded-[1px]" />
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
                <div className="px-2 py-0.5 rounded-md bg-[#99B087] border border-[#546844] text-slate-950 text-[10px] font-sans font-bold shadow-2xs flex items-center gap-1">
                  <Layers className="w-3 h-3 text-slate-900 shrink-0" />
                  <span>LEVEL</span>
                </div>
                <div className="px-2 py-0.5 rounded-md bg-[#99B087] border border-[#546844] text-slate-950 text-[10px] font-sans font-bold shadow-2xs flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-slate-900 shrink-0" />
                  <span>SCORE</span>
                </div>
              </div>
            </div>

            {/* Green LCD Screen Frame */}
            <div className="bg-[#99B087] rounded-xl border-2 border-[#546844] p-2 relative shadow-inner overflow-hidden font-mono text-slate-900 min-h-[300px] flex flex-col justify-between">
              
              {/* LCD Screen Grid Layout */}
              <div className="grid grid-cols-12 gap-1 flex-1">
                
                {/* Main Matrix Grid (8 cols) */}
                <div className="col-span-8 bg-[#8EA67B] border border-[#6B825C] rounded-md p-1.5 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* GAMEPLAY STATE */}
                  {screen.state === 'gameplay' && (
                    <div className="h-full w-full flex flex-col justify-between relative">
                      <div className="absolute inset-0 grid grid-cols-10 grid-rows-20 gap-[1px] opacity-25 pointer-events-none">
                        {Array.from({ length: 80 }).map((_, i) => (
                          <div key={i} className="border border-slate-950/20" />
                        ))}
                      </div>

                      <div className="relative z-10 my-auto flex flex-col items-center">
                        {screen.id === 4 ? (
                          <div className="grid grid-cols-3 gap-1 my-6">
                            <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                            <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                            <div className="w-3.5 h-3.5" />
                            <div className="w-3.5 h-3.5" />
                            <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                            <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-1 my-5">
                            <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                            <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                            <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                            <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-5 gap-0.5 justify-center mt-auto">
                        <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                        <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                        <div className="w-3.5 h-3.5 bg-slate-900 rounded-[1px]" />
                        <div className="w-3.5 h-3.5 border border-slate-900 rounded-[1px]" />
                        <div className="w-3.5 h-3.5 border border-slate-900 rounded-[1px]" />
                      </div>
                    </div>
                  )}

                  {/* PAUSED STATE */}
                  {screen.state === 'paused' && (
                    <div className="h-full w-full flex flex-col items-center justify-center text-center py-8">
                      <span className="text-lg font-extrabold tracking-widest text-slate-950 mb-1">
                        PAUSED
                      </span>
                      <span className="text-[9px] tracking-wider text-slate-800 font-sans font-bold">
                        TAP TO RESUME
                      </span>
                    </div>
                  )}

                  {/* VICTORY STATE */}
                  {screen.state === 'victory' && (
                    <div className="h-full w-full flex flex-col items-center justify-center text-center p-1.5">
                      <div className="flex items-center gap-1 text-slate-950 font-black text-xs mb-1">
                        <Trophy className="w-3.5 h-3.5 fill-slate-950" />
                        <span>VICTORY!</span>
                      </div>
                      <span className="text-[8px] tracking-widest font-extrabold text-slate-800 mb-2">
                        STAGE CLEARED
                      </span>

                      <div className="bg-[#839B71] border border-[#637A52] rounded-lg p-1.5 w-full mb-2 text-center">
                        <div className="flex justify-around text-[8px] font-bold text-slate-800 mb-0.5">
                          <span>SCORE</span>
                          <span>LINES</span>
                        </div>
                        <div className="flex justify-around text-xs font-extrabold text-slate-950">
                          <span>{screen.victoryScore || '9785'}</span>
                          <span>{screen.victoryLines || '13'}</span>
                        </div>
                      </div>

                      <div className="flex gap-1 w-full">
                        <div className="flex-1 bg-[#839B71] border border-slate-900 rounded py-0.5 text-[8px] font-extrabold flex items-center justify-center gap-0.5">
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
                    <div className="h-full w-full flex flex-col items-center justify-center text-center py-6">
                      <span className="text-base font-black tracking-widest text-slate-950 mb-1">
                        GAME OVER
                      </span>
                      <div className="text-[11px] font-bold text-slate-900 mb-1">
                        SCORE: {screen.score.replace(/^0+/, '') || '870'}
                      </div>
                      <span className="text-[8px] tracking-wider text-slate-800 font-sans font-bold">
                        PRESS RESTART
                      </span>
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

                  <div className="bg-[#8EA67B] border border-[#6B825C] rounded-md p-1 text-[7px] flex flex-col gap-0.5">
                    <span className="font-bold tracking-wider text-slate-800 text-center">STATS</span>
                    <div>
                      <div className="text-[6px] text-slate-700">SCORE</div>
                      <div className="font-extrabold text-slate-950 text-[8px]">{screen.score}</div>
                    </div>
                    <div>
                      <div className="text-[6px] text-slate-700">HI-SCORE</div>
                      <div className="font-extrabold text-slate-950 text-[8px]">{screen.hiScore}</div>
                    </div>
                    <div>
                      <div className="text-[6px] text-slate-700">TIME</div>
                      <div className="font-extrabold text-slate-950 text-[8px]">{screen.time}</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Console Controls */}
            <div className="mt-2.5">
              <div className="grid grid-cols-4 gap-1.5 mb-2.5 px-0.5">
                <div className="bg-slate-800/90 rounded-full h-6 flex items-center justify-center text-white shadow-2xs">
                  <Pause className="w-3 h-3" />
                </div>
                <div className="bg-slate-800/90 rounded-full h-6 flex items-center justify-center text-white shadow-2xs">
                  <RotateCcw className="w-3 h-3" />
                </div>
                <div className="bg-slate-800/90 rounded-full h-6 flex items-center justify-center text-white shadow-2xs">
                  <Volume2 className="w-3 h-3" />
                </div>
                <div className="bg-slate-800/90 rounded-full h-6 flex items-center justify-center text-white shadow-2xs">
                  <Settings className="w-3 h-3" />
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
                    <span className="text-[6px] font-extrabold tracking-tight mt-0.5 text-slate-950">ROT R</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 border border-emerald-700 shadow-sm flex items-center justify-center text-white font-bold">
                      <RotateCcw className="w-3 h-3" />
                    </div>
                    <span className="text-[6px] font-extrabold tracking-tight mt-0.5 text-slate-950">ROT L</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-cyan-400 border border-cyan-600 shadow-sm flex items-center justify-center text-slate-950 font-bold">
                      <Hand className="w-3 h-3" />
                    </div>
                    <span className="text-[6px] font-extrabold tracking-tight mt-0.5 text-slate-950">HOLD</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-red-500 border border-red-700 shadow-sm flex items-center justify-center text-white font-bold">
                      <ChevronsDown className="w-3 h-3" />
                    </div>
                    <span className="text-[6px] font-extrabold tracking-tight mt-0.5 text-slate-950">DROP</span>
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
