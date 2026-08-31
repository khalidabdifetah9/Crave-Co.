"use client"

import React from 'react';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-0 min-h-[550px] bg-black text-white flex flex-col justify-between px-8 md:px-12 py-10 font-sans overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold border-b border-white/10 pb-6">
        <span>EST. 2026 / ALL RIGHTS RESERVED</span>
        <span>SCROLL TO TOP ↑</span>
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-8">
        
        <div className="space-y-4">
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Crafting digital experiences with precision, strategy, and bold design.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-[#fcd301] transition">About Us</a></li>
              <li><a href="#services" className="hover:text-[#fcd301] transition">Services</a></li>
              <li><a href="#work" className="hover:text-[#fcd301] transition">Selected Work</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Social
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#fcd301] transition">Instagram</a></li>
              <li><a href="#" className="hover:text-[#fcd301] transition">Twitter / X</a></li>
              <li><a href="#" className="hover:text-[#fcd301] transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="max-w-500 w-full mx-auto py-4">
        <h1 className="text-6xl sm:text-8xl md:text-[15vw] font-black uppercase tracking-tighter text-[#fcd301] leading-none select-none">
          CRAVE &amp; CO.
        </h1>
      </div>

      <div className="max-w-6xl w-full mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Crave &amp; Co. All rights reserved.</p>
        <p>Designed &amp; Built with Care</p>
      </div>
    </footer>
  );
}