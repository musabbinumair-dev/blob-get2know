import React from 'react';
import { Screen } from '../components/Screen';
import { Blob } from '../components/Blob';
import { PillButton } from '../components/PillButton';

export const WelcomeScreen: React.FC = () => {
  return (
    <Screen bg="#FAF6EA">
      {/* ---------------- DECORATIVE BACKGROUND BLOBS (FLOAT ANIMATION) ---------------- */}
      
      {/* Top-Left: Yellow Crescent (partly cropped) */}
      <div className="absolute -left-[8px] top-[26px] animate-float pointer-events-none z-0">
        <Blob
          shape="crescent"
          color="yellow"
          size={78}
          className="rotate-[-10deg]"
        />
      </div>

      {/* Top-Right: Pink Heart (partly cropped) */}
      <div className="absolute -right-[14px] top-[22px] animate-float-reverse pointer-events-none z-0">
        <Blob
          shape="heart"
          color="pink"
          size={84}
          className="rotate-[-15deg]"
        />
      </div>

      {/* Upper-Right Side: Blue Starburst (partly cropped) */}
      <div className="absolute -right-[32px] top-[142px] animate-float pointer-events-none z-0">
        <Blob
          shape="starburst"
          color="blue"
          size={84}
          className="rotate-[12deg]"
        />
      </div>

      {/* Lower-Left: Blue Starburst (partly cropped) */}
      <div className="absolute -left-[14px] top-[520px] animate-float-reverse pointer-events-none z-0">
        <Blob
          shape="starburst"
          color="blue"
          size={78}
          className="rotate-[-8deg]"
        />
      </div>

      {/* Lower-Left: Pink Heart (partly cropped) */}
      <div className="absolute -left-[14px] top-[638px] animate-float pointer-events-none z-0">
        <Blob
          shape="heart"
          color="pink"
          size={74}
          className="rotate-[10deg]"
        />
      </div>

      {/* Lower-Right: Olive Cross (partly cropped) */}
      <div className="absolute -right-[10px] top-[536px] animate-float pointer-events-none z-0">
        <Blob
          shape="cross"
          color="green"
          size={72}
          className="rotate-[10deg]"
        />
      </div>

      {/* Lower-Right: Yellow Crescent (partly cropped) */}
      <div className="absolute -right-[12px] top-[650px] animate-float-reverse pointer-events-none z-0">
        <Blob
          shape="crescent"
          color="yellow"
          size={68}
          className="scale-x-[-1] rotate-[15deg]"
        />
      </div>


      {/* ---------------- TOP HEADER / LOGO ---------------- */}
      <header className="relative z-10 flex flex-col items-center pt-[68px] w-full">
        <img
          src="/assets/icons/logo-icon.png"
          alt="Get-to-Know-You Icon"
          className="w-[94px] h-auto object-contain mb-1.5 select-none pointer-events-none"
          draggable={false}
        />
        <h2 className="text-[17px] font-black tracking-[-0.02em] text-[#1A1C22]">
          Get-to-Know-You
        </h2>
      </header>


      {/* ---------------- CENTER HERO: AVATARS & TITLE ---------------- */}
      <div className="relative z-10 flex flex-col items-center w-full -mt-2">
        {/* Avatars + Sparks Stage (Width 390 centered) */}
        <div className="relative w-full max-w-[390px] h-[184px]">
          
          {/* Left Yellow Spark Lines */}
          <div className="absolute left-[30px] top-[68px] animate-pulse-gentle pointer-events-none">
            <img
              src="/assets/icons/spark-left.png"
              alt="Spark"
              className="w-[23px] h-auto object-contain"
              draggable={false}
            />
          </div>

          {/* Left Avatar (Player 1: avatar-1 on Pink Card-Blob) */}
          <div className="absolute left-[62px] top-[2px] z-10 w-[140px] h-[160px]">
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
              className="absolute inset-0 m-auto w-[82%] h-[82%] object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>

          {/* Small Yellow Starburst between avatars */}
          <div className="absolute left-[170px] top-[64px] z-20 w-[48px] h-[48px] animate-pulse-gentle pointer-events-none">
            <img
              src="/assets/blobs/starburst-small-yellow.svg"
              alt="Star"
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
          </div>

          {/* Right Avatar (Player 2: avatar-2 on Blue Card-Blob) */}
          <div className="absolute left-[188px] top-[18px] z-10 w-[138px] h-[148px]">
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
              className="absolute inset-0 m-auto w-[82%] h-[82%] object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>

          {/* Right Yellow Spark Lines */}
          <div className="absolute right-[30px] top-[74px] animate-pulse-gentle pointer-events-none">
            <img
              src="/assets/icons/spark-right.png"
              alt="Spark"
              className="w-[23px] h-auto object-contain"
              draggable={false}
            />
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center mt-3 px-4 w-full">
          <h1 className="text-[34px] leading-tight font-black tracking-[-0.035em] text-[#1A1C22]">
            Get-to-Know-You
          </h1>
          <p className="mt-2 text-[16px] font-semibold text-[#8A8A93] tracking-[-0.01em]">
            Two friends. One question a day.
          </p>
        </div>
      </div>


      {/* ---------------- BOTTOM ACTIONS ---------------- */}
      <footer className="relative z-10 flex flex-col items-center w-full px-8 pb-[34px]">
        <PillButton
          variant="black"
          className="w-full h-[56px] text-[18px] font-bold tracking-tight shadow-none hover:bg-[#2A2C34]"
          onClick={() => {
            // Future navigation
          }}
        >
          Get started
        </PillButton>

        <p className="mt-3.5 text-[14px] font-semibold text-[#8A8A93] tracking-[-0.01em]">
          Already have a code?{' '}
          <a
            href="#join"
            onClick={(e) => e.preventDefault()}
            className="text-[#8A8A93] underline underline-offset-2 hover:text-[#1A1C22] transition-colors"
          >
            Join
          </a>
        </p>
      </footer>
    </Screen>
  );
};
