"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

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

  const titleText = "CRAVE&CO.";

  // Animation variants
  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const revealFromBottom = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.4,
      },
    },
  };

  return (
    <section className="w-full px-6 pt-35">
      <div className="w-full relative my-2 flex overflow-hidden">
        <motion.h1
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-[#fcd301] text-[16vw] font-extrabold leading-[0.65] tracking-tighter uppercase transform origin-center select-none flex"
        >
          {titleText.split("").map((char, index) => (
            <span key={index} className="inline-block overflow-hidden">
              <motion.span variants={letterVariants} className="inline-block">
                {char}
              </motion.span>
            </span>
          ))}
        </motion.h1>
      </div>

      <motion.div
        variants={revealFromBottom}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between mt-12 mb-6 gap-4"
      >
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
      </motion.div>

      <motion.div
        variants={revealFromBottom}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 max-h-300 md:grid-cols-2 gap-6"
      >
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
      </motion.div>
    </section>
  );
}