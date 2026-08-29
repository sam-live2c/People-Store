import React, { useState } from 'react';
import { Sparkles, MessageSquare, PenTool, Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GeminiSparkle } from './Icons';

export const FeatureAi: React.FC = () => {
  const [promptTab, setPromptTab] = useState<'summarize' | 'write' | 'lens'>('summarize');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiResult, setAiResult] = useState<string | null>(null);

  const handleSimulateAi = () => {
    setIsGenerating(true);
    setAiResult(null);

    setTimeout(() => {
      setIsGenerating(false);
      if (promptTab === 'summarize') {
        setAiResult(
          '1. Chrome now integrates Gemini AI directly into the browser address bar.\n2. Summarize long web pages, PDFs, and articles in seconds.\n3. Draft emails and rewrite content with customizable tone controls.'
        );
      } else if (promptTab === 'write') {
        setAiResult(
          'Subject: Meeting Follow-up & Next Steps\n\nHi Alex,\nThank you for taking the time to discuss our browser deployment strategy today. I have attached the summary notes and timelines for review.\n\nBest regards,\nJordan'
        );
      } else {
        setAiResult(
          'Google Lens identified: "Red Sandstone Formation, Zion National Park". Related search results & visual matches generated below.'
        );
      }
    }, 1200);
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden" id="ai-section">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <GeminiSparkle size={16} />
            <span>Built by Google</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-['Google_Sans',sans-serif] text-white tracking-tight mb-4">
            Smart features powered by Google AI
          </h2>
          <p className="text-lg text-gray-300">
            With Gemini built directly into Chrome, you can summarize complex articles, compose polished emails, and search anything on your screen instantly.
          </p>
        </div>

        {/* AI Playground Card */}
        <div className="max-w-4xl mx-auto bg-gray-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gray-700 shadow-2xl">
          
          {/* AI Feature Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 border-b border-gray-700 pb-6">
            <button
              onClick={() => {
                setPromptTab('summarize');
                setAiResult(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 transition-all cursor-pointer ${
                promptTab === 'summarize'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700/60 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span>Summarize Page</span>
            </button>

            <button
              onClick={() => {
                setPromptTab('write');
                setAiResult(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 transition-all cursor-pointer ${
                promptTab === 'write'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-700/60 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <PenTool className="w-4 h-4 text-purple-300" />
              <span>Help Me Write</span>
            </button>

            <button
              onClick={() => {
                setPromptTab('lens');
                setAiResult(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 transition-all cursor-pointer ${
                promptTab === 'lens'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-700/60 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Search className="w-4 h-4 text-emerald-300" />
              <span>Google Lens Search</span>
            </button>
          </div>

          {/* Interactive Input Box */}
          <div className="bg-gray-900/80 rounded-2xl p-5 border border-gray-700 mb-6">
            <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                <GeminiSparkle size={14} /> Gemini 1.5 Flash in Chrome
              </span>
              <span>Side Panel Assistant</span>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              {promptTab === 'summarize' && 'Click below to generate a 3-bullet summary of the active web page using Gemini.'}
              {promptTab === 'write' && 'Draft a professional email reply with key bullet points.'}
              {promptTab === 'lens' && 'Highlight any image or text on screen to search with Google Lens.'}
            </p>

            <button
              onClick={handleSimulateAi}
              disabled={isGenerating}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Sparkles className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Gemini is thinking...' : 'Run Gemini Demo'}</span>
            </button>
          </div>

          {/* AI Output Window */}
          {aiResult && (
            <div className="bg-gray-950 rounded-2xl p-5 border border-blue-500/30 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" /> Gemini AI Generated Output:
              </div>
              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-200 leading-relaxed">
                {aiResult}
              </pre>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
