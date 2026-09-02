"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";

const menuItems = [
  {
    id: 1,
    name: "PIZZA",
    description:
      "Hand-tossed sourdough crust baked to perfection in a wood-fired oven, topped with fresh mozzarella, basil, and San Marzano tomatoes.",
    image: "/menu/Pizza.jpg",
  },
  {
    id: 2,
    name: "HAMBURGER",
    description:
      "Juicy double-smash beef patty topped with aged cheddar, caramelized onions, crisp lettuce, and signature house sauce on a brioche bun.",
    image: "/menu/Hamburger.jpg",
  },
  {
    id: 3,
    name: "SUSHI",
    description:
      "Chef’s selection of fresh, sustainably sourced sashimi and delicate nigiri served alongside seasoned sushi rice and authentic wasabi.",
    image: "/menu/Sushi.jpg",
  },
  {
    id: 4,
    name: "TACOS",
    description:
      "Slow-cooked marinated street tacos served on warm handmade corn tortillas, topped with fresh cilantro, diced white onions, and lime.",
    image: "/menu/Tacos.jpg",
  },
  {
    id: 5,
    name: "PASTA",
    description:
      "Al dente artisanal fettuccine tossed in a rich, creamy Parmigiano-Reggiano sauce finished with freshly cracked black pepper.",
    image: "/menu/Pasta.jpg",
  },
  {
    id: 6,
    name: "FRIED CHICKEN",
    description:
      "Crispy, buttermilk-marinated chicken fried to golden perfection, seasoned with a secret blend of herbs and spices.",
    image: "/menu/Fried_Chicken.jpg",
  },
  {
    id: 7,
    name: "DUMPLINGS",
    description:
      "Steamed handcrafted pork and chive dumplings wrapped in delicate dough, served with a savory garlic-soy dipping sauce.",
    image: "/menu/Dumplings.jpg",
  },
  {
    id: 8,
    name: "RAMEN",
    description:
      "Rich 12-hour pork bone tonkotsu broth served with springy ramen noodles, tender chashu belly, soft-boiled egg, and scallions.",
    image: "/menu/Ramen.jpg",
  },
];

const highlights = [
  {
    id: "(01)",
    title: "TRUSTED QUALITY",
    description:
      "With extensive industry experience, we offer handcrafted culinary excellence you can count on.",
  },
  {
    id: "(02)",
    title: "PERSONALIZED SERVICE",
    description:
      "We prioritize understanding each client's unique needs, tailoring our approach to ensure satisfaction.",
  },
  {
    id: "(03)",
    title: "Italian Delights",
    description:
      "A delicious collection of authentic Italian favorites, crafted with fresh ingredients, traditional flavors, and a touch of Crave & Co. magic.",
  },
];

export default function Menu() {
  const targetRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const totalItems = menuItems.length + 2;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((totalItems - 3) / totalItems) * 100}%`]
  );

  const imageRevealVariants = {
    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
    visible: {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      transition: {
        duration: 1.2,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  };

  const delayedTextContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1.1,
        staggerChildren: 0.03,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
    <>
      {/* MOBILE LAYOUT: Vertical Scroll */}
      <section className="block md:hidden w-full bg-white text-black">
        {/* 1. Hero Chef Image */}
        <div className="relative w-full h-[60vh] overflow-hidden">
          <Image
            src="/yellow_chef_three.jpg"
            alt="Chef Hero"
            fill
            priority
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-center"
          />
        </div>

        {/* 2. Menu Title & Highlights Header */}
        <div className="w-full px-6 py-10 border-b border-black/10">
          <motion.h1
            variants={delayedTextContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl text-[#ebc511] font-extrabold uppercase leading-tight tracking-tight mb-6"
          >
            {renderAnimatedText("Explore Our Menu")}
          </motion.h1>

          <motion.h3
            variants={delayedTextContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg font-extrabold uppercase leading-tight mb-2"
          >
            {renderAnimatedText(highlights[2].title)}
          </motion.h3>

          <motion.p
            variants={delayedTextContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm font-normal leading-relaxed text-black/80"
          >
            {renderAnimatedText(highlights[2].description)}
          </motion.p>
        </div>

        {/* 3. Vertical Menu Items List */}
        <div className="flex flex-col">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col border-b border-black/10 pt-10 pb-6 px-6"
            >
              <div className="flex flex-col items-center text-center gap-3 mb-6">
                <motion.h2
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-3xl font-black uppercase tracking-tighter text-black"
                >
                  {renderAnimatedText(item.name)}
                </motion.h2>

                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="max-w-xs text-xs font-medium leading-relaxed tracking-wide text-gray-700"
                >
                  {renderAnimatedText(`"${item.description}"`)}
                </motion.p>
              </div>

              <div className="relative w-full h-[45vh] overflow-hidden rounded-xs bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESKTOP LAYOUT: Horizontal Scroll */}
      <section ref={targetRef} className="hidden md:block relative h-[400vh]">
        <div className="sticky top-0 flex h-screen w-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex h-full">
            <div className="relative flex h-full w-screen flex-shrink-0">
              <motion.div
                variants={imageRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative h-full w-[40vw] border-r border-black/10 overflow-hidden"
              >
                <Image
                  src="/yellow_chef_three.jpg"
                  alt="Architecture Hero"
                  fill
                  priority
                  loading="eager"
                  fetchPriority="high"
                  sizes="40vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="grid h-full w-[60vw] grid-cols-2 grid-rows-2 border-black/10 text-black">
                <div className="col-span-2 border-b border-black/10 p-8 md:p-12">
                  <motion.h1
                    variants={delayedTextContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-5xl text-[#ebc511] font-extrabold uppercase leading-none tracking-tight md:text-[8vw]"
                  >
                    {renderAnimatedText("Explore Our Menu")}
                  </motion.h1>
                </div>

                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <motion.h3
                      variants={delayedTextContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="mt-3 text-xl font-extrabold uppercase leading-tight md:text-2xl"
                    >
                      {renderAnimatedText(highlights[2].title)}
                    </motion.h3>
                  </div>
                  <motion.p
                    variants={delayedTextContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-4 text-xs font-normal leading-relaxed text-black/80 md:text-sm"
                  >
                    {renderAnimatedText(highlights[2].description)}
                  </motion.p>
                </div>
              </div>
            </div>

            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative flex h-full w-[33.33vw] flex-shrink-0 flex-col justify-between border-r border-black/10 pt-20 pb-0 px-5"
              >
                <div className="z-10 flex flex-col items-center gap-4 text-center">
                  <motion.p
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-xs text-sm font-medium leading-relaxed tracking-wide text-gray-700"
                  >
                    {renderAnimatedText(`"${item.description}"`)}
                  </motion.p>
                  <motion.h2
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-5xl font-black uppercase tracking-tighter text-black"
                  >
                    {renderAnimatedText(item.name)}
                  </motion.h2>
                </div>

                <div className="relative mt-auto h-[70vh] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-top"
                    sizes="33vw"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}