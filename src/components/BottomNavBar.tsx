import React from 'react';

export type NavTab = 'today' | 'guess' | 'scores' | 'memory';

interface BottomNavBarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onAddClick?: () => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onTabChange,
  onAddClick,
}) => {
  return (
    <nav
      aria-label="Main Navigation"
      className="w-full max-w-[358px] mx-auto bg-[#1A1C22] rounded-full px-3 py-2 flex items-center justify-between shadow-2xl z-40 select-none"
    >
      {/* 1. Today Tab */}
      <button
        type="button"
        onClick={() => onTabChange('today')}
        className="flex-1 flex flex-col items-center justify-center py-1 transition-opacity cursor-pointer group"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke={activeTab === 'today' ? '#FFFFFF' : 'rgba(255,255,255,0.55)'}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span
          className={`text-[12px] font-bold tracking-tight mt-0.5 ${
            activeTab === 'today' ? 'text-white' : 'text-white/55'
          }`}
        >
          Today
        </span>
        {/* Active Indicator Underline */}
        {activeTab === 'today' ? (
          <div className="w-[26px] h-[3px] bg-[#F8D56B] rounded-full mt-0.5" />
        ) : (
          <div className="w-[26px] h-[3px] bg-transparent rounded-full mt-0.5" />
        )}
      </button>

      {/* 2. Guess Tab */}
      <button
        type="button"
        onClick={() => onTabChange('guess')}
        className="flex-1 flex flex-col items-center justify-center py-1 transition-opacity cursor-pointer group"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke={activeTab === 'guess' ? '#FFFFFF' : 'rgba(255,255,255,0.55)'}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7.5" />
          <line x1="21" y1="21" x2="16.5" y2="16.5" />
        </svg>
        <span
          className={`text-[12px] font-bold tracking-tight mt-0.5 ${
            activeTab === 'guess' ? 'text-white' : 'text-white/55'
          }`}
        >
          Guess
        </span>
        {activeTab === 'guess' ? (
          <div className="w-[26px] h-[3px] bg-[#F8D56B] rounded-full mt-0.5" />
        ) : (
          <div className="w-[26px] h-[3px] bg-transparent rounded-full mt-0.5" />
        )}
      </button>

      {/* 3. Center FAB (+) Button */}
      <div className="px-1">
        <button
          type="button"
          onClick={onAddClick}
          aria-label="Add new question or duo activity"
          className="btn-press w-[46px] h-[46px] rounded-full bg-[#F4A7D3] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-md"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1C22"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>

      {/* 4. Scores Tab */}
      <button
        type="button"
        onClick={() => onTabChange('scores')}
        className="flex-1 flex flex-col items-center justify-center py-1 transition-opacity cursor-pointer group"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke={activeTab === 'scores' ? '#FFFFFF' : 'rgba(255,255,255,0.55)'}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34" />
          <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4z" />
        </svg>
        <span
          className={`text-[12px] font-bold tracking-tight mt-0.5 ${
            activeTab === 'scores' ? 'text-white' : 'text-white/55'
          }`}
        >
          Scores
        </span>
        {activeTab === 'scores' ? (
          <div className="w-[26px] h-[3px] bg-[#F8D56B] rounded-full mt-0.5" />
        ) : (
          <div className="w-[26px] h-[3px] bg-transparent rounded-full mt-0.5" />
        )}
      </button>

      {/* 5. Memory Wall Tab */}
      <button
        type="button"
        onClick={() => onTabChange('memory')}
        className="flex-1 flex flex-col items-center justify-center py-1 transition-opacity cursor-pointer group"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke={activeTab === 'memory' ? '#FFFFFF' : 'rgba(255,255,255,0.55)'}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span
          className={`text-[11.5px] font-bold tracking-tight mt-0.5 leading-tight ${
            activeTab === 'memory' ? 'text-white' : 'text-white/55'
          }`}
        >
          Memory Wall
        </span>
        {activeTab === 'memory' ? (
          <div className="w-[26px] h-[3px] bg-[#F8D56B] rounded-full mt-0.5" />
        ) : (
          <div className="w-[26px] h-[3px] bg-transparent rounded-full mt-0.5" />
        )}
      </button>
    </nav>
  );
};
