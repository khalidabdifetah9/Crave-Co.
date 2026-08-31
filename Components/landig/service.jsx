"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const services = [
  {
    id: "art-direction",
    title: "Authentic Italian Dining",
    description:
      "Enjoy classic Italian dishes prepared with fresh ingredients and traditional techniques.",
    image: "/dish.jpg",
  },
  {
    id: "brand-identity",
    title: "Private Dining",
    description:
      "Make your special moments unforgettable with an intimate dining experience designed for birthdays.",
    image: "/dining.jpg",
  },
  {
    id: "Catering & Events",
    title: "Catering & Events",
    description: "Bring the taste of Crave & Co. to your next event.",
    image: "/events.jpg",
  },
  {
    id: "development",
    title: "Takeaway & Delivery",
    description:
      "Craving something delicious at home? Order your favorite Crave & Co. dishes to enjoy wherever you are.",
    image: "/delivery.jpg",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalSteps = services.length;
    const newIndex = Math.min(
      Math.floor(latest * totalSteps),
      totalSteps - 1
    );
    setActiveIndex(newIndex);
  });

  return (
    <section ref={containerRef} className="w-full h-[400vh] bg-[#fcd301] relative">
      
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            <div className="w-full lg:w-[55%]">
              <p className="text-black text-lg md:text-xl font-medium mb-12 md:mb-16">
                Services
              </p>

              <div className="flex flex-col gap-2 md:gap-4">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className="py-3 md:py-5 cursor-default"
                  >
                    <motion.h2
                      animate={{
                        color: index === activeIndex ? "#000000" : "rgba(255, 255, 255, 0.4)",
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight select-none"
                    >
                      {service.title}
                    </motion.h2>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[45%]">
              
              <div className="relative w-full aspect-square overflow-hidden">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={false}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{
                      zIndex: index === activeIndex ? 10 : 0,
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority={index === 0}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 min-h-[80px] relative">
                {services.map((service, index) => (
                  <motion.p
                    key={service.id}
                    initial={false}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0,
                      y: index === activeIndex ? 0 : 8,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-black text-base md:text-lg font-medium leading-snug absolute top-0 left-0 right-0"
                    style={{
                      pointerEvents: index === activeIndex ? "auto" : "none",
                    }}
                  >
                    {service.description}
                  </motion.p>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}