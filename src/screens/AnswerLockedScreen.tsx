import React, { useState, useEffect } from 'react';
import { Screen } from '../components/Screen';
import { BottomNav, NavTab } from '../components/BottomNav';

interface AnswerLockedScreenProps {
  friendName?: string;
  onEditAnswer: () => void;
  onOpenSettings?: () => void;
  onNavigateTab?: (tab: NavTab) => void;
  onPlayer2Answered?: () => void;
}

export const AnswerLockedScreen: React.FC<AnswerLockedScreenProps> = ({
  friendName = 'Player 2',
  onEditAnswer,
  onOpenSettings,
  onNavigateTab,
  onPlayer2Answered,
}) => {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [nudgeCooldown, setNudgeCooldown] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<NavTab>('today');

  // Cooldown countdown effect for Nudge button
  useEffect(() => {
    if (nudgeCooldown <= 0) return;
    const timer = setInterval(() => {
      setNudgeCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [nudgeCooldown]);

  const handleNudge = () => {
    if (nudgeCooldown > 0) return;
    setToastMessage('Nudge sent 👋');
    setNudgeCooldown(30);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    onNavigateTab?.(tab);
  };

  const handleEditClick = () => {
    localStorage.setItem('today_answer_locked', 'false');
    onEditAnswer();
  };

  return (
    <Screen bg="#F8F3E3">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 animate-pop">
          <div className="bg-[#1C1F23] text-white px-5 py-2.5 rounded-full font-bold text-[15px] shadow-2xl flex items-center gap-2">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* ================= BOTTOM DECORATIVE CORNER PNGs ================= */}

      {/* Yellow Crescent (bottom-left): 61x68 at x 3, y 694 */}
      <img
        src="/assets/waiting/file_00000000da708208827f1ef9e800d5df.png"
        alt=""
        className="absolute object-contain pointer-events-none select-none z-0"
        style={{
          left: '3px',
          bottom: '76px',
          width: '61px',
          height: '68px',
        }}
        draggable={false}
      />

      {/* Pink Heart Right (bottom-right cropped): 54x60 at x 336, y 708 */}
      <img
        src="/assets/waiting/file_000000006d808211a5100a84a56110bf.png"
        alt=""
        className="absolute object-contain pointer-events-none select-none z-0"
        style={{
          right: '-2px',
          bottom: '68px',
          width: '54px',
          height: '60px',
        }}
        draggable={false}
      />

      {/* ================= MAIN RESPONSIVE CONTAINER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[100dvh] sm:min-h-0 sm:h-full px-2 pt-2 pb-2 sm:px-4 sm:pt-4 sm:pb-3 select-none overflow-hidden">
        
        {/* ================= UPPER SECTION: TOP BAR + PNGs ABOVE HEADING ================= */}
        {/* Exact positioning of Duo logo, streak pill, settings gear, lock hero, pink heart, starburst, and olive cross */}
        <div className="relative w-full max-w-[390px] mx-auto h-[286px] flex-shrink-0 select-none">
          
          {/* Duo Logo with yellow rays: 57x24 at x 17, y 37 */}
          <div
            className="absolute flex items-center justify-center select-none"
            style={{
              left: '17px',
              top: '32px',
              width: '57px',
              height: '24px',
            }}
          >
            <img
              src="/assets/waiting/file_00000000ff448208b79cbefea05e0876.png"
              alt="Duo"
              className="w-full h-full object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>

          {/* Streak Pill: 68x32 at x 161, y 33 */}
          <div
            className="absolute flex items-center justify-center gap-1 bg-[#1C1F23] rounded-full select-none"
            style={{
              left: '161px',
              top: '28px',
              width: '68px',
              height: '32px',
            }}
          >
            <span className="text-[15px] leading-none select-none ml-1">🔥</span>
            <span className="text-white font-extrabold text-[16px] leading-none tracking-tight mr-1">
              12
            </span>
          </div>

          {/* Settings Button: 36x36 at x 336, y 32 with dashed ink border */}
          <button
            type="button"
            onClick={onOpenSettings}
            aria-label="Settings"
            className="btn-press absolute rounded-full border-[1.5px] border-dashed border-[#1C1F23] flex items-center justify-center bg-transparent hover:bg-[#1C1F23]/5 transition-colors cursor-pointer focus:outline-none"
            style={{
              left: '336px',
              top: '26px',
              width: '36px',
              height: '36px',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1C1F23"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>

          {/* 1. Pink Heart (top-left): 65x60 at x 26, y 122 */}
          <img
            src="/assets/waiting/file_0000000063908211aaec8f2b04f13fc0.png"
            alt=""
            className="absolute object-contain pointer-events-none select-none z-0"
            style={{
              left: '26px',
              top: '122px',
              width: '65px',
              height: '60px',
            }}
            draggable={false}
          />

          {/* 2. Blue Starburst (top-right): 69x70 at x 294, y 104 */}
          <img
            src="/assets/waiting/file_000000005018820789b75f23f6df0c75.png"
            alt=""
            className="absolute object-contain pointer-events-none select-none z-0"
            style={{
              left: '294px',
              top: '104px',
              width: '69px',
              height: '70px',
            }}
            draggable={false}
          />

          {/* 3. Olive Cross (mid-right): 60x58 at x 300, y 212 */}
          <img
            src="/assets/waiting/file_000000005f3482079b62e3505f080ca7.png"
            alt=""
            className="absolute object-contain pointer-events-none select-none z-0"
            style={{
              left: '300px',
              top: '212px',
              width: '60px',
              height: '58px',
            }}
            draggable={false}
          />

          {/* 4. Lock Hero (yellow blob + padlock + radiating rays): 190x145, centered on x 195.5, y 125 */}
          <div
            className="absolute flex items-center justify-center pointer-events-none select-none z-10"
            style={{
              left: '101px',
              top: '125px',
              width: '190px',
              height: '145px',
            }}
          >
            <img
              src="/assets/waiting/file_00000000eec882118ee77cb44d0263de.png"
              alt="Answer locked"
              className="w-full h-full object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>

        </div>

        {/* ================= LOWER SECTION: HEADING -> AVATAR -> BUTTONS ================= */}
        <div className="flex-1 flex flex-col justify-between items-center w-full max-w-[390px] mx-auto py-1 flex-shrink-0">
          
          {/* Heading and Subtitle */}
          <div className="text-center px-2 flex-shrink-0">
            <h1 className="text-[34px] sm:text-[38px] font-black text-[#1C1F23] leading-tight tracking-[-0.038em]">
              Answer locked in
            </h1>
            <p className="mt-1 text-[16.5px] sm:text-[18px] font-semibold text-[#1C1F23]/55 tracking-tight">
              Waiting for {friendName}...
            </p>
          </div>

          {/* Waiting Avatar with Static 4 Arcs (NO ANIMATION) */}
          <div className="relative w-[140px] h-[140px] sm:w-[154px] sm:h-[154px] flex items-center justify-center flex-shrink-0">
            {/* 4 Static Curved Light Blue Arcs */}
            <div className="absolute inset-0 pointer-events-none select-none">
              <svg viewBox="0 0 154 154" className="w-full h-full text-[#B5CDFB]" fill="none">
                <path
                  d="M 40 26 C 26 38 20 54 20 74"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <path
                  d="M 114 26 C 128 38 134 54 134 74"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <path
                  d="M 23 96 C 27 114 39 128 56 136"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <path
                  d="M 131 96 C 127 114 115 128 98 136"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Waiting Avatar Character PNG */}
            <div className="relative z-10 w-[114px] h-[117px] flex items-center justify-center">
              <img
                src="/assets/waiting/file_00000000dd2c8211aaaa40075fbe3ebf.png"
                alt={friendName}
                className="w-full h-full object-contain pointer-events-none select-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Action Buttons & Note */}
          <div className="w-full max-w-[316px] sm:max-w-[336px] flex flex-col items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* "Nudge them 👋" Button */}
            <button
              type="button"
              onClick={handleNudge}
              disabled={nudgeCooldown > 0}
              className={`btn-press w-full h-[49px] rounded-full font-bold text-[18px] sm:text-[19px] tracking-tight text-white flex items-center justify-center gap-2 transition-all cursor-pointer ${
                nudgeCooldown > 0
                  ? 'bg-[#1C1F23]/75 cursor-not-allowed'
                  : 'bg-[#1C1F23] hover:bg-[#2A2C34]'
              }`}
            >
              <span>{nudgeCooldown > 0 ? `Nudged (${nudgeCooldown}s)` : 'Nudge them'}</span>
              <span className="text-[19px] leading-none">👋</span>
            </button>

            {/* "Edit answer" Button */}
            <button
              type="button"
              onClick={handleEditClick}
              className="btn-press w-full h-[48px] rounded-full font-bold text-[17px] sm:text-[18px] tracking-tight bg-[#FCF7EB] text-[#1C1F23] hover:bg-[#F3EEDC] transition-colors border border-[#1C1F23]/10 cursor-pointer flex items-center justify-center"
            >
              Edit answer
            </button>

            {/* Subtitle Footnote */}
            <p className="text-[12px] sm:text-[13px] font-medium text-[#1C1F23]/55 text-center tracking-tight mt-0.5">
              We’ll tell you when they answer.
            </p>

            {/* Dev Helper Simulation */}
            {onPlayer2Answered && (
              <button
                type="button"
                onClick={onPlayer2Answered}
                className="text-[11px] font-bold text-[#1C1F23]/40 hover:text-[#1C1F23] bg-[#1C1F23]/5 px-3 py-0.5 rounded-full transition-all cursor-pointer mt-0.5"
              >
                ⚡ Simulate friend answered
              </button>
            )}
          </div>

        </div>

        {/* ================= BOTTOM TAB BAR (UNIFIED WAITING VERSION) ================= */}
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} className="mb-1" />

      </div>
    </Screen>
  );
};
