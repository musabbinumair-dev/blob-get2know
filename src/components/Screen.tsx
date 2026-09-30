import React from 'react';

interface ScreenProps {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}

export const Screen: React.FC<ScreenProps> = ({
  children,
  bg = '#FAF6EA',
  className = '',
}) => {
  return (
    <div
      className="w-full h-full flex justify-center items-center overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      <main
        className={`w-full max-w-[390px] h-full max-h-[844px] relative overflow-hidden flex flex-col justify-between select-none ${className}`}
        style={{ backgroundColor: bg }}
      >
        {children}
      </main>
    </div>
  );
};
