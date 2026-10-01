import React, { useState } from 'react';
import { Screen } from '../components/Screen';
import { PillButton } from '../components/PillButton';
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
  const [nudged, setNudged] = useState<boolean>(false);
  const [nudgeCount, setNudgeCount] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<NavTab>('today');

  const handleNudge = () => {
    setNudged(true);
    setNudgeCount((prev) => prev + 1);
    setTimeout(() => setNudged(false), 2400);
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    onNavigateTab?.(tab);
  };

  return (
    <Screen bg="#FAF6EA">
      {/* ---------------- DECORATIVE BACKGROUND BLOBS ---------------- */}

      {/* Top-Left: Pink Heart */}
      <div
        className="absolute top-[130px] left-[18px] pointer-events-none select-none z-0"
        style={{ width: '74px', height: '74px' }}
      >
        <img
          src="/assets/blobs/heart-pink-small.svg"
          alt=""
          className="w-full h-full object-contain rotate-[-12deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Top-Right: Blue Starburst */}
      <div
        className="absolute top-[120px] right-[24px] pointer-events-none select-none z-0"
        style={{ width: '78px', height: '78px' }}
      >
        <img
          src="/assets/blobs/starburst-blue-join.svg"
          alt=""
          className="w-full h-full object-contain rotate-[15deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Right Side: Olive Cross */}
      <div
        className="absolute top-[230px] right-[26px] pointer-events-none select-none z-0"
        style={{ width: '66px', height: '70px' }}
      >
        <img
          src="/assets/blobs/cross-olive-decorative.svg"
          alt=""
          className="w-full h-full object-contain rotate-[22deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Bottom-Left: Yellow Crescent Moon */}
      <div
        className="absolute bottom-[100px] left-[2px] pointer-events-none select-none z-0"
        style={{ width: '84px', height: '90px' }}
      >
        <img
          src="/assets/blobs/crescent-yellow-join.svg"
          alt=""
          className="w-full h-full object-contain rotate-[-15deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Bottom-Right: Pink Heart */}
      <div
        className="absolute bottom-[90px] right-[10px] pointer-events-none select-none z-0"
        style={{ width: '82px', height: '82px' }}
      >
        <img
          src="/assets/blobs/heart-pink-small.svg"
          alt=""
          className="w-full h-full object-contain rotate-[10deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>


      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[100dvh] pt-8 select-none">
        <div className="px-7 sm:px-8">
          {/* Top Bar: Duo Icon | Streak 12 | Settings Gear */}
          <div className="flex items-center justify-between w-full">
            {/* Duo Icon with rays */}
            <div className="relative w-[38px] h-[38px] flex items-center justify-center">
              <div className="absolute -top-[1px] -left-[1px] w-[5px] h-[2px] bg-[#1A1C22]/30 rounded-full rotate-[-45deg]" />
              <div className="absolute -top-[1px] -right-[1px] w-[5px] h-[2px] bg-[#1A1C22]/30 rounded-full rotate-[45deg]" />
              <div className="absolute -bottom-[1px] -left-[1px] w-[5px] h-[2px] bg-[#1A1C22]/30 rounded-full rotate-[45deg]" />
              <div className="absolute -bottom-[1px] -right-[1px] w-[5px] h-[2px] bg-[#1A1C22]/30 rounded-full rotate-[-45deg]" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#1A1C22">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>

            {/* Streak Pill */}
            <div className="bg-[#1A1C22] h-[34px] px-3.5 rounded-full flex items-center gap-1.5 shadow-none">
              <span className="text-[16px] leading-none select-none">🔥</span>
              <span className="text-white font-extrabold text-[15px] tracking-tight leading-none">
                12
              </span>
            </div>

            {/* Settings Gear Button */}
            <button
              type="button"
              onClick={onOpenSettings}
              aria-label="Settings"
              className="btn-press w-[38px] h-[38px] rounded-full border-[1.5px] border-dashed border-[#1A1C22]/50 flex items-center justify-center hover:bg-[#1A1C22]/5 transition-colors focus:outline-none cursor-pointer"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1A1C22"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
          </div>

          {/* ================= HERO: LOCK ON YELLOW BLOB WITH RAYS ================= */}
          <div className="mt-7 flex items-center justify-center relative w-full max-w-[200px] mx-auto h-[160px]">
            {/* Radiating Yellow Rays */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {/* Ray top-left */}
              <div className="absolute top-[18px] left-[18px] w-[14px] h-[4px] bg-[#F8D56B] rounded-full rotate-[-40deg]" />
              {/* Ray mid-left */}
              <div className="absolute top-[68px] left-[6px] w-[15px] h-[4px] bg-[#F8D56B] rounded-full rotate-[-10deg]" />
              {/* Ray bottom-left */}
              <div className="absolute bottom-[24px] left-[16px] w-[14px] h-[4px] bg-[#F8D56B] rounded-full rotate-[35deg]" />

              {/* Ray top-right */}
              <div className="absolute top-[18px] right-[18px] w-[14px] h-[4px] bg-[#F8D56B] rounded-full rotate-[40deg]" />
              {/* Ray mid-right */}
              <div className="absolute top-[68px] right-[6px] w-[15px] h-[4px] bg-[#F8D56B] rounded-full rotate-[10deg]" />
              {/* Ray bottom-right */}
              <div className="absolute bottom-[24px] right-[16px] w-[14px] h-[4px] bg-[#F8D56B] rounded-full rotate-[-35deg]" />
            </div>

            {/* Organic Yellow Blob */}
            <svg
              className="w-[136px] h-[142px] text-[#F8D56B] filter drop-shadow-none"
              viewBox="0 0 140 146"
              fill="currentColor"
            >
              <path d="M68 6C104 2 128 26 134 58C140 90 120 128 86 138C52 148 18 132 8 100C-2 68 8 20 68 6Z" />
            </svg>

            {/* Black Lock Silhouette with Yellow Keyhole */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                {/* Lock Shackle */}
                <div className="w-[38px] h-[30px] rounded-t-full border-[7.5px] border-[#1A1C22] border-b-0 -mb-[2px]" />
                {/* Lock Body */}
                <div className="w-[58px] h-[48px] bg-[#1A1C22] rounded-[15px] flex flex-col items-center justify-center shadow-none">
                  {/* Yellow Keyhole */}
                  <div className="flex flex-col items-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#F8D56B]" />
                    <div className="w-[4px] h-[8px] bg-[#F8D56B] -mt-[1px] rounded-b-[2px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-3 text-center">
            <h1 className="text-[38px] sm:text-[42px] font-black text-[#1A1C22] leading-[1.08] tracking-[-0.035em]">
              Answer locked in
            </h1>
            <p className="mt-1.5 text-[17px] font-bold text-[#1A1C22]/65 tracking-tight">
              Waiting for {friendName}...
            </p>
          </div>

          {/* ================= PLAYER 2 AVATAR STAGE WITH WAITING ARCS ================= */}
          <div className="mt-7 relative flex items-center justify-center w-full max-w-[200px] mx-auto h-[140px]">
            {/* 4 Light Blue Waiting Arcs around Avatar */}
            <svg
              className="absolute inset-0 w-full h-full text-[#97B4FD]/70 animate-pulse pointer-events-none"
              viewBox="0 0 140 140"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              {/* Top-left arc */}
              <path d="M38 28 C26 38 20 54 20 70" />
              {/* Top-right arc */}
              <path d="M102 28 C114 38 120 54 120 70" />
              {/* Bottom-left arc */}
              <path d="M24 85 C28 98 38 108 50 116" />
              {/* Bottom-right arc */}
              <path d="M116 85 C112 98 102 108 90 116" />
            </svg>

            {/* Blue Avatar Blob */}
            <div className="relative w-[100px] h-[100px] flex items-center justify-center">
              <img
                src="/assets/blobs/avatar-blob-blue-join.svg"
                alt="Player 2"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                draggable={false}
              />
              <img
                src="/assets/avatars/avatar-2.png"
                alt={friendName}
                className="relative z-10 w-[78%] h-[78%] object-contain pointer-events-none select-none"
                draggable={false}
              />

              {/* Waiting Clock Badge */}
              <div className="absolute -bottom-1 -right-1 w-[28px] h-[28px] rounded-full bg-[#3D404A] border-[2.5px] border-[#FAF6EA] flex items-center justify-center z-20 shadow-none">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>
          </div>

          {/* ================= ACTION BUTTONS ================= */}
          <div className="mt-8 flex flex-col gap-3 w-full max-w-[342px] mx-auto">
            {/* Primary: Nudge them 👋 */}
            <PillButton
              variant="black"
              onClick={handleNudge}
              className="w-full h-[56px] text-[18px] font-bold tracking-tight shadow-none hover:bg-[#2A2C34] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Nudge them</span>
              <span className={`inline-block ${nudged ? 'animate-bounce' : ''}`}>
                👋
              </span>
            </PillButton>

            {/* Secondary: Edit answer */}
            <button
              type="button"
              onClick={onEditAnswer}
              className="btn-press w-full h-[56px] rounded-full font-bold text-[18px] tracking-tight bg-[#FAF6EA] hover:bg-[#F3EEDC] text-[#1A1C22] transition-colors cursor-pointer border border-[#1A1C22]/8"
            >
              Edit answer
            </button>
          </div>

          {/* Nudge Confirmation or Footnote */}
          <p className="mt-4 text-center text-[14px] font-semibold text-[#1A1C22]/60 tracking-tight">
            {nudged
              ? `Nudged ${friendName}! (x${nudgeCount}) 👋✨`
              : 'We’ll tell you when they answer.'}
          </p>

          {/* Dev helper to simulate player 2 answering */}
          {onPlayer2Answered && (
            <div className="mt-3 flex justify-center">
              <button
                type="button"
                onClick={onPlayer2Answered}
                className="text-[11.5px] font-bold text-[#1A1C22]/50 hover:text-[#1A1C22] bg-[#1A1C22]/5 hover:bg-[#1A1C22]/10 px-3 py-1 rounded-full transition-all cursor-pointer"
              >
                ⚡ Simulate {friendName} answered
              </button>
            </div>
          )}
        </div>

        {/* Bottom Navigation Dock */}
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </Screen>
  );
};
