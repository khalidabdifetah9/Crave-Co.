"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: "art-direction",
    title: "Authentic Italian Dining",
    description:
      "Enjoy classic Italian dishes prepared with fresh ingredients and traditional techniques.",
    image:
      "/dish.jpg",
  },
  {
    id: "brand-identity",
    title: "Private Dining",
    description:
      "Make your special moments unforgettable with an intimate dining experience designed for birthdays.",
    image:
      "/dining.jpg",
  },
  {
    id: "Catering & Events",
    title: "Catering & Events",
    description:
      "Bring the taste of Crave & Co. to your next event.",
    image:
      "/events.jpg",
  },
  {
    id: "development",
    title: "Takeaway & Delivery",
    description:
      "Craving something delicious at home? Order your favorite Crave & Co. dishes to enjoy wherever you are.",
    image:
      "/delivery.jpg",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1); // start with Brand Identity active
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          root: null,
          rootMargin: "-45% 0px -45% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section className="w-full bg-[#fcd301] relative">
      <div className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column — Service List */}
          <div className="w-full lg:w-[55%]">
            {/* Section Label */}
            <p className="text-black text-lg md:text-xl font-medium mb-12 md:mb-16">
              (Services)
            </p>

            {/* Services Stack */}
            <div className="flex flex-col gap-2 md:gap-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="py-3 md:py-5 transition-all duration-500 ease-out cursor-default"
                >
                  <h2
                    className={`
                      text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight
                      transition-colors duration-500 ease-out select-none
                      ${
                        index === activeIndex
                          ? "text-black"
                          : "text-white/40"
                      }
                    `}
                  >
                    {service.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Sticky Image */}
          <div className="w-full lg:w-[45%]">
            <div className="lg:sticky lg:top-[20vh]">
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`
                      absolute inset-0 transition-opacity duration-700 ease-in-out
                      ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
                    `}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-6 min-h-[80px]">
                {services.map((service, index) => (
                  <p
                    key={service.id}
                    className={`
                      text-black text-base md:text-lg font-medium leading-snug
                      transition-all duration-500 ease-out
                      ${
                        index === activeIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 absolute"
                      }
                    `}
                  >
                    {service.description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}