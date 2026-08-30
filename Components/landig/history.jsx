// components/History.jsx
import React from 'react';

export default function History() {
  return (
    <section className="relative w-full h-250 bg-[#fcd301] -top-60 z-100 flex flex-col justify-between p-8 md:p-16 lg:p-24 overflow-hidden select-none">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-5 w-full h-full opacity-20">
        <div className="border-r border-neutral-700"></div>
        <div className="border-r border-neutral-700"></div>
        <div className="border-r border-neutral-700"></div>
        <div className="border-r border-neutral-700"></div>
        <div></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between my-auto">
        
        {/* Top Tag & Main Heading Section */}
        <div className="max-w-5xl mt-12 md:mt-20">
          {/* Subtitle / Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-black inline-block"></span>
            <span className="text-xs uppercase tracking-widest text-black font-mono">
              History
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-black lg:text-7xl font-light tracking-tight leading-[1.15] ">
            We blend creativity with purpose, creating visuals that are as functional as they are beautiful.
          </h1>
        </div>

        {/* Bottom Paragraph Section - Aligned to the Right */}
        <div className="w-full flex justify-end mt-20 md:mt-32">
          <div className="max-w-md text-right text-black text-sm md:text-base leading-relaxed space-y-3 font-normal">
            <p>
              Your brand deserves a space that communicates with intention and impact.
            </p>
            <p>
              At Journey, we transform ideas into experiences, combining strategy, aesthetics, and usability. Our goal is to express who you are with precision and create a presence that truly sets you apart.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}