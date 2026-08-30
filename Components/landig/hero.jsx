"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";

export default function Hero() {
  const videoRef = useRef(null);

  const setVideoRef = useCallback((node) => {
    if (node) {
      videoRef.current = node;
    }
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  };

  return (
    <section className="w-full px-6 pt-35">
      <div className="w-full relative my-2 flex">
        <h1 className="text-[#fcd301] text-[16vw] font-extrabold  leading-[0.65] tracking-tighter uppercase transform origin-center select-none">
          <span className="inline-block">CRAVE&CO.</span>
        </h1>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between mt-12 mb-6 gap-4">
        <div className="flex items-center gap-1.5">
          <svg
            width="16"
            height="10"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#eec201]"
          >
            <path d="M12 0L0 14H24L12 0Z" fill="currentColor" />
          </svg>
          <p className="text-[#eec201] text-[10px] font-bold tracking-wide uppercase">
            &mdash; CERTIFIED PARTNER
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 max-h-300 md:grid-cols-2 gap-6">
        <div className="group relative w-full aspect-[3/3] min-h-[300px] rounded-2xl overflow-hidden cursor-pointer bg-black">
          <Image
            src="/yellow_chef_two.jpg"
            alt="Portrait close-up base"
            fill
            className="object-cover"
            priority
          />
          <Image
            src="/yellow_chef_three.jpg"
            alt="Portrait close-up hover"
            fill
            className="object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-105"
          />
        </div>

        <div
          className="group relative w-full aspect-[3/3] min-h-[300px] rounded-2xl overflow-hidden bg-black cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={setVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:blur-sm group-hover:scale-105"
            poster="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
          >
            <source src="/cooking.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}