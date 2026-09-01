// components/History.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function History() {
  const headingText =
    "We blend creativity with purpose, creating visuals that are as functional as they are beautiful.";

  const paragraph1Text =
    "Your brand deserves a space that communicates with intention and impact.";

  const paragraph2Text =
    "At Journey, we transform ideas into experiences, combining strategy, aesthetics, and usability. Our goal is to express who you are with precision and create a presence that truly sets you apart.";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.01,
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

  const renderAnimatedText = (text) => {
    return text.split(" ").map((word, wordIdx) => (
      <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
        {word.split("").map((char, charIdx) => (
          <span
            key={charIdx}
            className="inline-block overflow-hidden py-1 px-[0.01em]"
          >
            <motion.span variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section className="relative w-full h-250 bg-[#fcd301] -top-60 z-100 flex flex-col justify-between p-8 md:p-16 lg:p-24 overflow-hidden select-none">
      <div className="absolute inset-0 pointer-events-none grid grid-cols-5 w-full h-full opacity-20">
        <div className="border-r border-neutral-700"></div>
        <div className="border-r border-neutral-700"></div>
        <div className="border-r border-neutral-700"></div>
        <div className="border-r border-neutral-700"></div>
        <div></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between my-auto">
        <div className="max-w-5xl mt-12 md:mt-20">
          <div className="flex items-center gap-2 mb-6"></div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl md:text-6xl text-black lg:text-7xl font-light tracking-tight leading-[1]"
          >
            {renderAnimatedText(headingText)}
          </motion.h1>
        </div>

        <div className="w-full flex justify-end mt-20 md:mt-32">
          <div className="max-w-md text-right text-black text-sm md:text-base leading-[1] space-y-3 font-normal">
            <motion.p
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {renderAnimatedText(paragraph1Text)}
            </motion.p>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {renderAnimatedText(paragraph2Text)}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}