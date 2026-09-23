"use client";

import Image from "next/image";
import { useRef, useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const [imageLoadCount, setImageLoadCount] = useState(0);

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

  // Fallback: don't let the loader hang forever if an event never fires
  useEffect(() => {
    const timeout = setTimeout(() => setVideoReady(true), 6000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (imageLoadCount >= 2) setImagesReady(true);
  }, [imageLoadCount]);

  const allReady = videoReady; // gate primarily on video per the request

  const titleText = "CRAVE&CO.";

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
    <section className="w-full px-6 pt-35 relative">
      <div className="w-full relative my-2 flex overflow-hidden">
        <motion.h1
          variants={titleContainerVariants}
          initial="hidden"
          animate={allReady ? "visible" : "hidden"}
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
        animate={allReady ? "visible" : "hidden"}
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
        animate={allReady ? "visible" : "hidden"}
        className="w-full grid grid-cols-1 max-h-300 md:grid-cols-2 gap-6"
      >
        <div className="group relative w-full aspect-[3/3] min-h-[300px] rounded-2xl overflow-hidden cursor-pointer bg-black">
          <Image
            src="/yellow_chef_two.jpg"
            alt="Portrait close-up base"
            fill
            className="object-cover"
            priority
            onLoad={() => setImageLoadCount((c) => c + 1)}
          />
          <Image
            src="/yellow_chef_three.jpg"
            alt="Portrait close-up hover"
            fill
            className="object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-105"
            priority
            onLoad={() => setImageLoadCount((c) => c + 1)}
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
            preload="auto"
            loop
            muted
            playsInline
            onCanPlayThrough={() => setVideoReady(true)}
            onLoadedData={() => setVideoReady(true)}
            className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:blur-sm group-hover:scale-105"
            poster="/yellow_chef.jpg"
          >
            <source src="/cooking.webm" type="video/webm" />
            <source src="/cooking-optimized.mp4" type="video/mp4" />
          </video>

          {/* Loader overlay for the video tile */}
          <AnimatePresence>
            {!videoReady && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10"
              >
                <div className="relative w-14 h-14 mb-4">
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-[#fcd301]/20"
                  />
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#fcd301]"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
                <motion.p
                  className="text-[#eec201] text-[10px] font-bold tracking-widest uppercase"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  Loading
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Full-hero loading veil until video is ready */}
      <AnimatePresence>
        {!allReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 bg-black z-20 pointer-events-none flex items-center justify-center"
          >
            <motion.div
              className="flex gap-1.5"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15, repeat: Infinity } },
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#fcd301]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}