import React from 'react';

interface TopBarProps {
  streak?: number;
  onSettingsClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  streak = 12,
  onSettingsClick,
}) => {
  return (
    <>
      {/* Logo on Left: two people in ink with 2 short spark lines on each side. Spans x 18 to 73, y 39 to 60 */}
      <div
        className="absolute flex items-center justify-center select-none z-20 pointer-events-none"
        style={{ left: '18px', top: '39px', width: '55px', height: '21px' }}
      >
        <div className="relative flex items-center justify-center">
          {/* Left spark lines */}
          <div className="absolute -left-[10px] top-[1px] flex flex-col gap-[3px]">
            <div className="w-[5px] h-[2.5px] bg-[#F7C948] rounded-full rotate-[-25deg]" />
            <div className="w-[5px] h-[2.5px] bg-[#F7C948] rounded-full rotate-[25deg]" />
          </div>

          {/* Two people icon */}
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            className="text-[#191D1F]"
          >
            {/* Person 1 (left) */}
            <circle cx="9" cy="6" r="4.2" fill="#191D1F" />
            <path
              d="M3 18.5C3 14.5 5.5 12.5 9 12.5C12.5 12.5 15 14.5 15 18.5"
              stroke="#191D1F"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Person 2 (right) */}
            <circle cx="19" cy="6" r="4.2" fill="#191D1F" />
            <path
              d="M13 18.5C13 14.5 15.5 12.5 19 12.5C22.5 12.5 25 14.5 25 18.5"
              stroke="#191D1F"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          </svg>

          {/* Right spark lines */}
          <div className="absolute -right-[10px] top-[1px] flex flex-col gap-[3px]">
            <div className="w-[5px] h-[2.5px] bg-[#F7C948] rounded-full rotate-[25deg]" />
            <div className="w-[5px] h-[2.5px] bg-[#F7C948] rounded-full rotate-[-25deg]" />
          </div>
        </div>
      </div>

      {/* Streak pill in Center: x 162, y 33, 68x32, fully rounded, background ink */}
      <div
        className="absolute flex items-center justify-center gap-1.5 bg-[#191D1F] rounded-full select-none z-20 pointer-events-none"
        style={{
          left: '162px',
          top: '33px',
          width: '68px',
          height: '32px',
        }}
      >
        <span className="text-[17px] leading-none select-none">🔥</span>
        <span className="text-white font-extrabold text-[17px] leading-none tracking-tight">
          {streak}
        </span>
      </div>

      {/* Settings button on Right: 36x36 circle at x 336, y 32. 1.5px dashed ink border */}
      <button
        type="button"
        onClick={onSettingsClick}
        aria-label="Settings"
        className="btn-press absolute rounded-full flex items-center justify-center bg-transparent border-[1.5px] border-dashed border-[#191D1F] hover:bg-[#191D1F]/5 transition-colors z-20 cursor-pointer focus:outline-none"
        style={{
          left: '336px',
          top: '32px',
          width: '36px',
          height: '36px',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#191D1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </>
  );
};
