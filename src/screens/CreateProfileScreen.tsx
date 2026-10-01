import React, { useState } from 'react';
import { Screen } from '../components/Screen';

export interface UserProfile {
  avatarId: number;
  name: string;
  color: 'pink' | 'blue';
}

interface CreateProfileScreenProps {
  initialProfile?: UserProfile;
  onBack: () => void;
  onContinue: (profile: UserProfile) => void;
}

const AVATAR_OPTIONS = [
  { id: 1, blob: '/assets/blobs/avatar-blob-pink-01.svg', alt: 'Boy avatar' },
  { id: 2, blob: '/assets/blobs/avatar-blob-blue-01.svg', alt: 'Girl with heart hairpin' },
  { id: 3, blob: '/assets/blobs/avatar-blob-olive-01.svg', alt: 'Boy with glasses' },
  { id: 4, blob: '/assets/blobs/avatar-blob-blue-02.svg', alt: 'Girl with bun' },
  { id: 5, blob: '/assets/blobs/avatar-blob-yellow-01.svg', alt: 'Boy with bucket hat' },
  { id: 6, blob: '/assets/blobs/avatar-blob-pink-02.svg', alt: 'Girl with headphones' },
];

const COLOR_OPTIONS: Array<{ id: 'pink' | 'blue'; blob: string; label: string }> = [
  { id: 'pink', blob: '/assets/blobs/card-blob-a-pink.svg', label: 'Pink' },
  { id: 'blue', blob: '/assets/blobs/card-blob-b-blue.svg', label: 'Blue' },
];

export const CreateProfileScreen: React.FC<CreateProfileScreenProps> = ({
  initialProfile = { avatarId: 1, name: '', color: 'pink' },
  onBack,
  onContinue,
}) => {
  const [selectedAvatarId, setSelectedAvatarId] = useState<number>(initialProfile.avatarId);
  const [name, setName] = useState<string>(initialProfile.name);
  const [selectedColor, setSelectedColor] = useState<'pink' | 'blue'>(initialProfile.color);

  const isFormValid = name.trim().length > 0;

  const handleContinue = () => {
    if (!isFormValid) return;
    const profile: UserProfile = {
      avatarId: selectedAvatarId,
      name: name.trim(),
      color: selectedColor,
    };
    console.log('Saved profile:', profile);
    onContinue(profile);
  };

  return (
    <Screen bg="#F8D56B" className="overflow-y-auto">
      {/* ---------------- DECORATIVE BACKGROUND BLOBS ---------------- */}

      {/* Top-Right: Blue Starburst (cropped at top right) */}
      <div
        className="absolute -top-[24px] -right-[22px] pointer-events-none z-0"
        style={{ width: '94px', height: '94px' }}
      >
        <img
          src="/assets/blobs/starburst-blue-decorative.svg"
          alt=""
          className="w-full h-full object-contain rotate-[16deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Bottom-Left: Blue Starburst (cropped at bottom left) */}
      <div
        className="absolute -bottom-[20px] -left-[20px] pointer-events-none z-0"
        style={{ width: '88px', height: '88px' }}
      >
        <img
          src="/assets/blobs/starburst-blue-decorative.svg"
          alt=""
          className="w-full h-full object-contain rotate-[-12deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Bottom-Right: Pink Crescent (cropped at bottom right) */}
      <div
        className="absolute -bottom-[22px] -right-[16px] pointer-events-none z-0"
        style={{ width: '92px', height: '96px' }}
      >
        <img
          src="/assets/blobs/crescent-pink.svg"
          alt=""
          className="w-full h-full object-contain scale-x-[-1] rotate-[-14deg] select-none pointer-events-none"
          draggable={false}
        />
      </div>


      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="relative z-10 flex flex-col justify-between min-h-full px-7 pt-9 pb-8 sm:px-8 sm:pt-10 sm:pb-9">
        <div>
          {/* Top Navigation Row: Back Button & Step Dots */}
          <div className="flex items-center justify-between w-full">
            {/* Dashed Circular Back Button */}
            <button
              type="button"
              onClick={onBack}
              aria-label="Back to welcome"
              className="btn-press w-[42px] h-[42px] rounded-full border-[1.5px] border-dashed border-[#1A1C22]/50 flex items-center justify-center hover:bg-[#1A1C22]/5 transition-colors focus:outline-none cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1A1C22"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Step Dots: Step 1 filled black, Step 2 dashed empty */}
            <div className="flex items-center gap-1.5 pr-1">
              <div className="w-[8.5px] h-[8.5px] rounded-full bg-[#1A1C22]" />
              <div className="w-[8.5px] h-[8.5px] rounded-full border-[1.5px] border-dashed border-[#1A1C22]" />
            </div>
          </div>

          {/* Heading Section */}
          <div className="mt-5">
            <h1 className="text-[37px] sm:text-[39px] font-black text-[#1A1C22] leading-[1.08] tracking-[-0.035em]">
              Who are you?
            </h1>
            <p className="mt-2 text-[16.5px] font-semibold text-[#1A1C22]/65 tracking-[-0.015em]">
              Pick how your friend will see you.
            </p>
          </div>

          {/* 3x2 Avatar Picker Grid */}
          <div className="mt-5 grid grid-cols-3 gap-x-4 gap-y-3.5 justify-items-center w-full max-w-[340px] mx-auto">
            {AVATAR_OPTIONS.map((avatar) => {
              const isSelected = selectedAvatarId === avatar.id;
              return (
                <button
                  key={avatar.id}
                  type="button"
                  onClick={() => setSelectedAvatarId(avatar.id)}
                  aria-label={`Choose avatar ${avatar.id}`}
                  className="relative w-[92px] h-[92px] flex items-center justify-center rounded-full group focus:outline-none cursor-pointer select-none"
                >
                  {/* Selected Ring + Check Badge */}
                  {isSelected && (
                    <>
                      <div className="absolute inset-0 rounded-full border-[3px] border-[#1A1C22] pointer-events-none animate-pop" />
                      <div className="absolute bottom-[2px] right-[2px] w-[21px] h-[21px] bg-[#1A1C22] rounded-full flex items-center justify-center text-white shadow-sm z-30 animate-pop">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </>
                  )}

                  {/* Organic Blob Base */}
                  <img
                    src={avatar.blob}
                    alt=""
                    className="absolute inset-[4px] w-[84px] h-[84px] object-contain pointer-events-none select-none transition-transform duration-150 group-active:scale-95"
                    draggable={false}
                  />

                  {/* Avatar Face */}
                  <img
                    src={`/assets/avatars/avatar-${avatar.id}.png`}
                    alt={avatar.alt}
                    className="relative z-10 w-[74%] h-[74%] object-contain pointer-events-none select-none transition-transform duration-150 group-active:scale-95"
                    draggable={false}
                  />
                </button>
              );
            })}
          </div>

          {/* "Your name" Input Section */}
          <div className="mt-5 w-full max-w-[340px] mx-auto">
            <label
              htmlFor="user-name-input"
              className="block text-[17px] font-extrabold text-[#1A1C22] mb-2 tracking-[-0.01em]"
            >
              Your name
            </label>
            <input
              id="user-name-input"
              type="text"
              placeholder="Type your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[54px] px-6 rounded-full bg-[#FAF6EA] text-[#1A1C22] placeholder-[#A49E8E] font-bold text-[17px] focus:outline-none focus:ring-2 focus:ring-[#1A1C22]/20 shadow-none border-none transition-all"
              autoComplete="off"
            />
          </div>

          {/* "Your color" Blob Selector Section */}
          <div className="mt-4 w-full max-w-[340px] mx-auto">
            <label className="block text-[17px] font-extrabold text-[#1A1C22] mb-2 tracking-[-0.01em]">
              Your color
            </label>
            <div className="flex items-center gap-5">
              {COLOR_OPTIONS.map((colorOption) => {
                const isSelected = selectedColor === colorOption.id;
                return (
                  <button
                    key={colorOption.id}
                    type="button"
                    onClick={() => setSelectedColor(colorOption.id)}
                    aria-label={`Select ${colorOption.label} color`}
                    className="relative w-[82px] h-[82px] flex items-center justify-center rounded-full group focus:outline-none cursor-pointer select-none"
                  >
                    {/* Selected Ring + Check Badge */}
                    {isSelected && (
                      <>
                        <div className="absolute inset-0 rounded-full border-[3px] border-[#1A1C22] pointer-events-none animate-pop" />
                        <div className="absolute bottom-[2px] right-[2px] w-[21px] h-[21px] bg-[#1A1C22] rounded-full flex items-center justify-center text-white shadow-sm z-30 animate-pop">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      </>
                    )}

                    {/* Color Blob Shape */}
                    <img
                      src={colorOption.blob}
                      alt={colorOption.label}
                      className="w-[74px] h-[74px] object-contain pointer-events-none select-none transition-transform duration-150 group-active:scale-95"
                      draggable={false}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-6 w-full max-w-[340px] mx-auto">
          <button
            type="button"
            disabled={!isFormValid}
            onClick={handleContinue}
            className={`w-full h-[58px] rounded-full font-bold text-[18px] tracking-tight flex items-center justify-center transition-all bg-[#1A1C22] text-white shadow-none ${
              isFormValid
                ? 'btn-press hover:bg-[#2A2C34] opacity-100 cursor-pointer'
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </Screen>
  );
};
