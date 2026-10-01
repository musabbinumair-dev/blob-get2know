import React from 'react';
import { Screen } from '../components/Screen';
import { PillButton } from '../components/PillButton';

interface WelcomeScreenProps {
  onGetStarted?: () => void;
  onJoinCode?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted, onJoinCode }) => {
  return (
    <Screen bg="#FAF6EA">
      {/* ---------------- DECORATIVE BACKGROUND BLOBS ---------------- */}
      
      {/* Top-Left: Yellow Crescent (cleanly positioned inside margin) */}
      <div
        className="absolute left-[10px] top-[28px] pointer-events-none z-0 animate-float"
        style={{ width: '72px', height: '86px' }}
      >
        <img
          src="/assets/blobs/crescent-yellow-large.svg"
          alt=""
          className="w-full h-full object-contain rotate-[-4deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Top-Right: Pink Heart (anchored to top-right corner) */}
      <div
        className="absolute -right-[4px] top-[24px] pointer-events-none z-0 animate-float-reverse"
        style={{ width: '82px', height: '84px' }}
      >
        <img
          src="/assets/blobs/heart-pink-small.svg"
          alt=""
          className="w-full h-full object-contain rotate-[-10deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Upper-Right Side: Blue Starburst (partially cropped on right edge) */}
      <div
        className="absolute -right-[14px] top-[144px] pointer-events-none z-0 animate-float"
        style={{ width: '66px', height: '78px' }}
      >
        <img
          src="/assets/blobs/starburst-blue-decorative.svg"
          alt=""
          className="w-full h-full object-contain rotate-[14deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Mid-Left: Blue Starburst (below subtitle on left edge) */}
      <div
        className="absolute left-[4px] top-[61.5%] pointer-events-none z-0 animate-float-reverse"
        style={{ width: '76px', height: '78px' }}
      >
        <img
          src="/assets/blobs/starburst-blue-decorative.svg"
          alt=""
          className="w-full h-full object-contain rotate-[-8deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Mid-Right: Olive Cross (below subtitle on right side) */}
      <div
        className="absolute right-[18px] top-[63.5%] pointer-events-none z-0 animate-float"
        style={{ width: '68px', height: '72px' }}
      >
        <img
          src="/assets/blobs/cross-olive-decorative.svg"
          alt=""
          className="w-full h-full object-contain rotate-[12deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Bottom-Left: Pink Heart (flanking top-left of the action button) */}
      <div
        className="absolute left-0 top-[75.5%] pointer-events-none z-0 animate-float"
        style={{ width: '70px', height: '65px' }}
      >
        <img
          src="/assets/blobs/heart-pink-small.svg"
          alt=""
          className="w-full h-full object-contain rotate-[4deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Bottom-Right: Yellow Crescent (flanking right side of the action button) */}
      <div
        className="absolute right-0 top-[77%] pointer-events-none z-0 animate-float-reverse"
        style={{ width: '70px', height: '80px' }}
      >
        <img
          src="/assets/blobs/crescent-yellow-large.svg"
          alt=""
          className="w-full h-full object-contain scale-x-[-1] rotate-[18deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>


      {/* ---------------- TOP HEADER / LOGO ---------------- */}
      <header className="relative z-10 flex flex-col items-center pt-[50px] sm:pt-[56px] w-full">
        <img
          src="/assets/icons/logo-icon.png"
          alt="Get-to-Know-You Icon"
          className="w-[66px] h-auto object-contain select-none pointer-events-none"
          draggable={false}
        />
        <h2 className="text-[17px] font-black tracking-[-0.02em] text-[#1A1C22] mt-1.5 select-none">
          Get-to-Know-You
        </h2>
      </header>


      {/* ---------------- CENTER HERO: AVATARS & TITLE ---------------- */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 my-auto">
        {/* Avatars + Sparks Stage */}
        <div className="relative w-full max-w-[370px] h-[176px]">
          
          {/* Left Yellow Spark Lines */}
          <div className="absolute left-[16px] top-[66px] animate-pulse-gentle pointer-events-none">
            <img
              src="/assets/icons/spark-left.png"
              alt=""
              className="w-[26px] h-auto object-contain select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Left Avatar (Player 1: avatar-1 on Pink Card-Blob) */}
          <div className="absolute left-[54px] top-[2px] z-10 w-[148px] h-[160px]">
            {/* Pink blob base */}
            <img
              src="/assets/blobs/card-blob-a-pink.svg"
              alt="Pink Blob"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
              draggable={false}
            />
            {/* Avatar 1 Face */}
            <img
              src="/assets/avatars/avatar-1.png"
              alt="Player 1"
              className="absolute inset-0 m-auto w-[84%] h-[84%] object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>

          {/* Small Yellow Starburst between avatars */}
          <div className="absolute left-[158px] top-[60px] z-20 w-[52px] h-[52px] animate-pulse-gentle pointer-events-none">
            <img
              src="/assets/blobs/starburst-small-yellow.svg"
              alt=""
              className="w-full h-full object-contain select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Right Avatar (Player 2: avatar-2 on Blue Card-Blob) */}
          <div className="absolute left-[174px] top-[18px] z-10 w-[142px] h-[152px]">
            {/* Blue blob base */}
            <img
              src="/assets/blobs/card-blob-b-blue.svg"
              alt="Blue Blob"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
              draggable={false}
            />
            {/* Avatar 2 Face */}
            <img
              src="/assets/avatars/avatar-2.png"
              alt="Player 2"
              className="absolute inset-0 m-auto w-[84%] h-[84%] object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>

          {/* Right Yellow Spark Lines */}
          <div className="absolute right-[16px] top-[74px] animate-pulse-gentle pointer-events-none">
            <img
              src="/assets/icons/spark-right.png"
              alt=""
              className="w-[26px] h-auto object-contain select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center mt-3.5 px-4 w-full">
          <h1 className="text-[36px] leading-[1.12] font-black tracking-[-0.035em] text-[#1A1C22]">
            Get-to-Know-You
          </h1>
          <p className="mt-2.5 text-[17px] font-semibold text-[#8A8A93] tracking-[-0.015em]">
            Two friends. One question a day.
          </p>
        </div>
      </div>


      {/* ---------------- BOTTOM ACTIONS ---------------- */}
      <footer className="relative z-10 flex flex-col items-center w-full px-8 pb-[36px] sm:pb-[44px]">
        <PillButton
          variant="black"
          className="w-full max-w-[326px] h-[58px] text-[18px] font-bold tracking-tight shadow-none hover:bg-[#2A2C34]"
          onClick={onGetStarted}
        >
          Get started
        </PillButton>

        <p className="mt-3.5 text-[14px] font-semibold text-[#8A8A93] tracking-[-0.01em]">
          Already have a code?{' '}
          <a
            href="#join"
            onClick={(e) => {
              e.preventDefault();
              onJoinCode?.();
            }}
            className="text-[#8A8A93] underline underline-offset-2 hover:text-[#1A1C22] transition-colors cursor-pointer"
          >
            Join
          </a>
        </p>
      </footer>
    </Screen>
  );
};
