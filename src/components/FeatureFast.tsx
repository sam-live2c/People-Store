import React, { useState } from 'react';
import { Zap, Cpu, Battery, Gauge, RotateCcw, CheckCircle2 } from 'lucide-react';

export const FeatureFast: React.FC = () => {
  const [memorySaverActive, setMemorySaverActive] = useState(true);
  const [activeTabCount, setActiveTabCount] = useState(14);
  const [energySaverActive, setEnergySaverActive] = useState(false);

  // Calculate simulated memory saved
  const memorySavedMB = memorySaverActive ? activeTabCount * 145 : 0;
  const ramUsagePercent = memorySaverActive ? 32 : 78;

  return (
    <section className="py-20 bg-white" id="fast-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>Built for Speed & Efficiency</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-['Google_Sans',sans-serif] text-gray-900 tracking-tight mb-4">
            Fast by default
          </h2>
          <p className="text-lg text-gray-600">
            Chrome is engineered to load pages faster, consume less RAM with Memory Saver, and optimize battery life when you’re unplugged.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Memory Saver Interactive Demo */}
          <div className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between" id="card-memory-saver">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Memory Saver
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Chrome frees up memory from inactive tabs so your active web apps run up to 30% faster.
              </p>

              {/* Memory Saver Simulator Widget */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs mb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-800">Memory Saver Status</span>
                  <button
                    onClick={() => setMemorySaverActive(!memorySaverActive)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      memorySaverActive ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        memorySaverActive ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>RAM Utilization</span>
                    <span className="font-semibold text-gray-800">{ramUsagePercent}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        memorySaverActive ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${ramUsagePercent}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                  <span>RAM Reclaimed:</span>
                  <span className="font-bold text-emerald-600">{(memorySavedMB / 1024).toFixed(2)} GB Saved</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automatically pauses idle tabs
            </div>
          </div>

          {/* Card 2: Energy Saver Demo */}
          <div className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between" id="card-energy-saver">
            <div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Battery className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Energy Saver
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Extends your device’s battery by limiting background activity and visual effects when your laptop reaches 20% battery.
              </p>

              {/* Energy Saver Widget */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs mb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-800">Energy Saver Mode</span>
                  <button
                    onClick={() => setEnergySaverActive(!energySaverActive)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      energySaverActive ? 'bg-emerald-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        energySaverActive ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl text-emerald-800 text-xs">
                  <Battery className="w-5 h-5 text-emerald-600" />
                  <span>
                    {energySaverActive
                      ? 'Energy Saver On: Background animations paused to extend battery life by +45 mins.'
                      : 'Standard Mode: High performance visual effects active.'}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Triggers automatically on battery power
            </div>
          </div>

          {/* Card 3: V8 Engine & Speedometer */}
          <div className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between md:col-span-2 lg:col-span-1" id="card-v8-engine">
            <div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Lightning V8 Engine
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Powered by Google’s standard V8 JavaScript engine for instant page renders and smooth 60fps web apps.
              </p>

              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Speedometer 3.0 Score</div>
                  <div className="text-3xl font-extrabold text-gray-900">41.8 pts</div>
                  <div className="text-xs text-emerald-600 font-medium">#1 Fastest Browser 2026</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center border-4 border-purple-500 text-purple-700 font-bold text-sm">
                  100%
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Optimized for modern web standard frameworks
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
