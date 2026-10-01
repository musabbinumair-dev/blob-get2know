import React, { useState } from 'react';

export type NavTab = 'today' | 'guess' | 'scores' | 'memory';

interface BottomNavProps {
  activeTab?: NavTab;
  onTabChange?: (tab: NavTab) => void;
  onPlusClick?: () => void;
}

interface TabConfig {
  id: NavTab;
  label: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab = 'today',
  onTabChange,
  onPlusClick,
}) => {
  const [isPlusPressed, setIsPlusPressed] = useState<boolean>(false);
  const [showPlusMenu, setShowPlusMenu] = useState<boolean>(false);

  const leftTabs: TabConfig[] = [
    { id: 'today', label: 'Today' },
    { id: 'guess', label: 'Guess' },
  ];

  const rightTabs: TabConfig[] = [
    { id: 'scores', label: 'Scores' },
    { id: 'memory', label: 'Memory Wall' },
  ];

  const handlePlusClick = () => {
    setIsPlusPressed(true);
    setTimeout(() => setIsPlusPressed(false), 240);
    if (onPlusClick) {
      onPlusClick();
    } else {
      setShowPlusMenu((prev) => !prev);
    }
  };

  const renderIcon = (tabId: NavTab, isActive: boolean) => {
    const strokeColor = '#FFFFFF';
    const strokeWidth = isActive ? 2.5 : 2.1;

    switch (tabId) {
      case 'today':
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isActive
                ? 'scale-110 drop-shadow-[0_2px_6px_rgba(255,255,255,0.25)]'
                : 'opacity-70 scale-100 group-hover:scale-105 group-hover:opacity-90'
            }`}
          >
            <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );

      case 'guess':
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isActive
                ? 'scale-110 drop-shadow-[0_2px_6px_rgba(255,255,255,0.25)]'
                : 'opacity-70 scale-100 group-hover:scale-105 group-hover:opacity-90'
            }`}
          >
            <circle cx="10.5" cy="10.5" r="7" />
            <line x1="21" y1="21" x2="15.8" y2="15.8" />
          </svg>
        );

      case 'scores':
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isActive
                ? 'scale-110 drop-shadow-[0_2px_6px_rgba(255,255,255,0.25)]'
                : 'opacity-70 scale-100 group-hover:scale-105 group-hover:opacity-90'
            }`}
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
            <path d="M18 4H6v7a6 6 0 0 0 12 0V4z" />
          </svg>
        );

      case 'memory':
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isActive
                ? 'scale-110 drop-shadow-[0_2px_6px_rgba(255,255,255,0.25)]'
                : 'opacity-70 scale-100 group-hover:scale-105 group-hover:opacity-90'
            }`}
          >
            <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        );
    }
  };

  const renderTabButton = (tab: TabConfig) => {
    const isActive = activeTab === tab.id;

    return (
      <button
        key={tab.id}
        type="button"
        onClick={() => onTabChange?.(tab.id)}
        className="group relative flex flex-col items-center justify-center flex-1 h-full cursor-pointer focus:outline-none transition-transform duration-150 active:scale-92"
      >
        {/* Tab Icon */}
        <div className="relative flex items-center justify-center h-[24px]">
          {renderIcon(tab.id, isActive)}
        </div>

        {/* Tab Label */}
        <span
          className={`text-[12px] tracking-[-0.01em] mt-1 select-none transition-all duration-200 whitespace-nowrap ${
            isActive
              ? 'font-black text-white'
              : 'font-bold text-[#8E8E98] group-hover:text-white/85'
          }`}
        >
          {tab.label}
        </span>

        {/* Smooth Yellow Underline Pill Indicator */}
        <div className="h-[4px] mt-1 flex items-center justify-center w-full">
          <div
            className={`h-[3.5px] rounded-full bg-[#F8D56B] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isActive
                ? 'w-[28px] opacity-100 scale-100 translate-y-0'
                : 'w-[0px] opacity-0 scale-50 -translate-y-1 pointer-events-none'
            }`}
          />
        </div>
      </button>
    );
  };

  return (
    <div className="relative w-full max-w-[364px] mx-auto px-2 pb-4 pt-3 select-none z-30">
      {/* Quick Action Sheet Modal if opened */}
      {showPlusMenu && (
        <div
          role="dialog"
          aria-modal="true"
          className="absolute bottom-[90px] left-1/2 -translate-x-1/2 w-[92%] bg-[#1A1C22] text-white p-4 rounded-[28px] shadow-2xl z-40 border border-white/10 animate-pop"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <span className="font-extrabold text-[15px] text-[#F8D56B]">
              Quick Duo Actions
            </span>
            <button
              type="button"
              onClick={() => setShowPlusMenu(false)}
              className="text-white/60 hover:text-white text-[18px] leading-none px-1"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setShowPlusMenu(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-[16px] bg-white/5 hover:bg-white/10 text-left transition-colors cursor-pointer"
            >
              <span className="text-[17px]">✨</span>
              <span className="text-[14px] font-bold">Surprise Prompt</span>
            </button>
            <button
              type="button"
              onClick={() => setShowPlusMenu(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-[16px] bg-white/5 hover:bg-white/10 text-left transition-colors cursor-pointer"
            >
              <span className="text-[17px]">🎲</span>
              <span className="text-[14px] font-bold">Shuffle Question</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Bar Container */}
      <div className="relative h-[68px] w-full">
        {/* Center Arched Black Cradle Dome */}
        {/* SVG creates the continuous curved collar seamlessly rising above the navbar */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-[20px] pointer-events-none z-10 w-[96px] h-[36px]">
          <svg
            width="96"
            height="36"
            viewBox="0 0 96 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20 L12 20 C22 20 24 16 27 12 C33 4 38 2 48 2 C58 2 63 4 69 12 C72 16 74 20 84 20 L96 20 L96 36 L0 36 Z"
              fill="#1A1C22"
            />
          </svg>
        </div>

        {/* Center Pink Plus Button Nestled in the Cradle */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-[13px] z-20">
          <button
            type="button"
            onClick={handlePlusClick}
            aria-label="Add or quick actions"
            className={`btn-press w-[50px] h-[50px] rounded-full bg-[#F4A7D3] flex items-center justify-center text-[#1A1C22] shadow-none outline-none cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isPlusPressed
                ? 'scale-90 rotate-90'
                : 'hover:scale-108 hover:rotate-45'
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A1C22"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>

        {/* The Black Capsule Bar Body */}
        <div className="bg-[#1A1C22] h-[68px] rounded-full px-3 flex items-center justify-between shadow-none relative z-0">
          {/* Left Two Tabs: Today, Guess */}
          <div className="flex items-center justify-around flex-1 h-full pr-5">
            {leftTabs.map(renderTabButton)}
          </div>

          {/* Spacer under the center dome */}
          <div className="w-[46px] flex-shrink-0" />

          {/* Right Two Tabs: Scores, Memory Wall */}
          <div className="flex items-center justify-around flex-1 h-full pl-5">
            {rightTabs.map(renderTabButton)}
          </div>
        </div>
      </div>
    </div>
  );
};
