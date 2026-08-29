import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FaqItem[] = [
    {
      q: 'How do I download and install Google Chrome?',
      a: 'Click the "Get Chrome" button at the top of this page. Run the downloaded installer file (ChromeSetup.exe for Windows or GoogleChrome.dmg for macOS) and follow the on-screen prompts to complete installation.',
    },
    {
      q: 'Is Google Chrome free to use?',
      a: 'Yes! Google Chrome is completely free to download, install, and use across all supported platforms including Windows, macOS, Linux, iOS, and Android.',
    },
    {
      q: 'How do I set Google Chrome as my default browser?',
      a: 'Open Chrome, click the three-dot menu in the top right corner, select "Settings", navigate to "Default browser" in the left sidebar, and click "Make default".',
    },
    {
      q: 'What is Chrome Memory Saver and how does it work?',
      a: 'Memory Saver frees up RAM from inactive tabs that you aren’t currently viewing. When you click back onto an inactive tab, Chrome reloads it instantly without losing your state.',
    },
    {
      q: 'How does Chrome protect my privacy and password security?',
      a: 'Chrome uses Google Safe Browsing to block malware and phishing websites. Built-in Google Password Manager alerts you if your saved credentials appear in a third-party data breach.',
    },
    {
      q: 'How do I sync my Chrome data across devices?',
      a: 'Sign into Chrome with your Google Account on any phone, tablet, or computer. Enable Sync in Settings to access your bookmarks, passwords, and open tabs everywhere.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-50/70 border-t border-gray-100" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Support & Help</span>
          </div>
          <h2 className="text-4xl font-bold font-['Google_Sans',sans-serif] text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base">
            Everything you need to know about downloading, configuring, and using Chrome.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g., default browser, memory saver)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 font-semibold text-gray-900 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base font-['Google_Sans',sans-serif]">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
