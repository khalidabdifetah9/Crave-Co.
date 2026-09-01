"use client";

import { motion } from "framer-motion";

export default function Info() {
  const paragraphText =
    "Tucked away in the heart of Italy, Crave & Co. is a place where good food, great company, and a little Italian magic come together at the table.";

  const words = paragraphText.split(" ");

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-20 text-black">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 sm:mb-32">
        <div className="max-w-7xl w-full">
          <div className="flex items-center gap-2 mb-6"></div>

          <motion.h2
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#fcd301] leading-[1.1] sm:leading-[1] tracking-tight mb-8"
          >
            {words.map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
                {word.split("").map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className="inline-block overflow-hidden py-1 px-[0.01em]"
                  >
                    <motion.span
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </motion.h2>
        </div>
      </div>

      <div className="w-full flex flex-wrap sm:flex-nowrap justify-center sm:justify-end items-center gap-4 sm:gap-0 overflow-hidden">
        <div className="relative flex items-center gap-2 sm:gap-4">
          <div className="relative inline-block">
            <span className="text-5xl xs:text-6xl sm:text-[11rem] font-black tracking-tighter leading-none select-none">
              1976
            </span>
            <span className="absolute top-[35%] left-[30%] -rotate-12 bg-[#eec201] text-black text-[8px] xs:text-[10px] sm:text-xs font-black tracking-wider uppercase px-1.5 xs:px-2 sm:px-3 py-0.5 sm:py-1 shadow-sm whitespace-nowrap">
              Opened
            </span>
          </div>
          <span className="text-3xl xs:text-4xl sm:text-8xl font-light text-black/30">
            &mdash;
          </span>
        </div>

        <div className="relative flex items-center sm:mr-5">
          <div className="relative inline-block">
            <span className="text-5xl xs:text-6xl sm:text-[11rem] font-black tracking-tighter leading-none select-none">
              2026
            </span>
            <span className="absolute top-[35%] left-[30%] -rotate-12 bg-[#eec201] text-black text-[8px] xs:text-[10px] sm:text-xs font-black tracking-wider uppercase px-1.5 xs:px-2 sm:px-3 py-0.5 sm:py-1 shadow-sm whitespace-nowrap">
              23 branches
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}