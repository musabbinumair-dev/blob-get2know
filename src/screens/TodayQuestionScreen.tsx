import React, { useState } from 'react';
import { Screen } from '../components/Screen';
import { PillButton } from '../components/PillButton';
import { BottomNav, NavTab } from '../components/BottomNav';

interface TodayQuestionScreenProps {
  onOpenSettings?: () => void;
  onNavigateTab?: (tab: NavTab) => void;
  onLockInSuccess?: () => void;
}

export const TodayQuestionScreen: React.FC<TodayQuestionScreenProps> = ({
  onOpenSettings,
  onNavigateTab,
  onLockInSuccess,
}) => {
  const [answer, setAnswer] = useState<string>(() => {
    return localStorage.getItem('today_answer') || '';
  });
  const [isLocked, setIsLocked] = useState<boolean>(() => {
    return localStorage.getItem('today_answer_locked') === 'true';
  });
  const [showLockedToast, setShowLockedToast] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<NavTab>('today');

  const maxChars = 200;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isLocked) return;
    const text = e.target.value.slice(0, maxChars);
    setAnswer(text);
    localStorage.setItem('today_answer', text);
  };

  const handleLockIn = () => {
    if (!answer.trim()) return;
    setIsLocked(true);
    localStorage.setItem('today_answer_locked', 'true');
    setShowLockedToast(true);
    setTimeout(() => {
      onLockInSuccess?.();
    }, 450);
  };

  const handleUnlockForEdit = () => {
    setIsLocked(false);
    localStorage.setItem('today_answer_locked', 'false');
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    onNavigateTab?.(tab);
  };

  return (
    <Screen bg="#F8D56B">
      {/* ---------------- DECORATIVE BACKGROUND BLOBS ---------------- */}

      {/* Top-Left: Pink Heart */}
      <div
        className="absolute top-[105px] -left-[24px] pointer-events-none select-none z-0"
        style={{ width: '92px', height: '92px' }}
      >
        <img
          src="/assets/blobs/heart-pink-small.svg"
          alt=""
          className="w-full h-full object-contain rotate-[-15deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Top-Right: Olive Cross */}
      <div
        className="absolute top-[105px] right-[95px] pointer-events-none select-none z-0"
        style={{ width: '74px', height: '78px' }}
      >
        <img
          src="/assets/blobs/cross-olive-decorative.svg"
          alt=""
          className="w-full h-full object-contain rotate-[10deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Top-Right: Blue Starburst (edge) */}
      <div
        className="absolute top-[135px] -right-[22px] pointer-events-none select-none z-0"
        style={{ width: '88px', height: '88px' }}
      >
        <img
          src="/assets/blobs/starburst-blue-join.svg"
          alt=""
          className="w-full h-full object-contain rotate-[18deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Bottom-Left: Pink Heart (above nav) */}
      <div
        className="absolute bottom-[95px] -left-[16px] pointer-events-none select-none z-0"
        style={{ width: '96px', height: '96px' }}
      >
        <img
          src="/assets/blobs/heart-pink-small.svg"
          alt=""
          className="w-full h-full object-contain rotate-[-8deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Bottom-Right: Blue Starburst (above nav) */}
      <div
        className="absolute bottom-[105px] -right-[16px] pointer-events-none select-none z-0"
        style={{ width: '94px', height: '94px' }}
      >
        <img
          src="/assets/blobs/starburst-blue-join.svg"
          alt=""
          className="w-full h-full object-contain rotate-[-5deg] select-none pointer-events-none"
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
              {/* Rays around silhouettes */}
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

          {/* Question Heading */}
          <div className="mt-5">
            <h2 className="text-[17px] sm:text-[18px] font-bold text-[#1A1C22]/80 tracking-tight">
              Today’s question
            </h2>
            <h1 className="mt-2 text-[36px] sm:text-[39px] font-black text-[#1A1C22] leading-[1.08] tracking-[-0.035em]">
              What’s a fear you’d never tell anyone?
            </h1>
          </div>

          {/* Cream Textarea Card */}
          <div className="mt-6 relative w-full max-w-[342px] mx-auto bg-[#FAF6EA] rounded-[30px] p-5 sm:p-6 flex flex-col justify-between min-h-[185px]">
            <textarea
              value={answer}
              onChange={handleTextChange}
              disabled={isLocked}
              placeholder="Type your answer..."
              rows={4}
              maxLength={maxChars}
              className={`w-full bg-transparent resize-none outline-none font-bold text-[17px] text-[#1A1C22] placeholder:text-[#1A1C22]/35 leading-relaxed ${
                isLocked ? 'cursor-default opacity-85' : 'cursor-text'
              }`}
            />

            {/* Character Counter */}
            <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#1A1C22]/5">
              {isLocked ? (
                <button
                  type="button"
                  onClick={handleUnlockForEdit}
                  className="text-[12px] font-extrabold text-[#1A1C22]/60 hover:text-[#1A1C22] underline cursor-pointer"
                >
                  Edit answer
                </button>
              ) : (
                <div />
              )}
              <span className="text-[13px] font-extrabold text-[#1A1C22]/40 tracking-tight">
                {answer.length} / {maxChars}
              </span>
            </div>
          </div>

          {/* Privacy Note with Avatar and Lock Badge */}
          <div className="mt-4 flex items-center gap-3.5 w-full max-w-[342px] mx-auto px-1">
            {/* Avatar on Blue Blob with Lock Icon */}
            <div className="relative w-[54px] h-[54px] flex items-center justify-center flex-shrink-0">
              <img
                src="/assets/blobs/avatar-blob-blue-join.svg"
                alt=""
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                draggable={false}
              />
              <img
                src="/assets/avatars/avatar-1.png"
                alt="You"
                className="relative z-10 w-[78%] h-[78%] object-contain pointer-events-none select-none"
                draggable={false}
              />
              {/* Black Lock Circle Badge */}
              <div className="absolute -bottom-1 -right-1 w-[20px] h-[20px] rounded-full bg-[#1A1C22] flex items-center justify-center z-20">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>

            {/* Note text */}
            <p className="text-[15px] sm:text-[15.5px] font-bold text-[#1A1C22]/75 leading-[1.25]">
              {isLocked
                ? "Locked! They can't see it until you both answer."
                : "They can’t see it until you both answer."}
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="mt-5 w-full max-w-[342px] mx-auto">
            <PillButton
              variant="black"
              onClick={handleLockIn}
              disabled={!answer.trim()}
              className={`w-full h-[56px] text-[18px] font-bold tracking-tight shadow-none transition-all ${
                isLocked
                  ? 'bg-[#1A1C22] opacity-90 cursor-default'
                  : answer.trim()
                  ? 'hover:bg-[#2A2C34] cursor-pointer'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              {isLocked ? 'Answer locked! 🔒' : 'Lock in my answer'}
            </PillButton>
          </div>

          {/* Feedback message when locked */}
          {showLockedToast && (
            <p className="mt-2 text-center text-[13px] font-extrabold text-[#1A1C22]/80 animate-pop">
              Saved! Waiting for your friend’s answer ✨
            </p>
          )}
        </div>

        {/* Bottom Navigation Dock */}
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </Screen>
  );
};
