"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Such a beautiful restaurant with an amazing atmosphere. Everything from the presentation of the food to the little details around the dining area felt thoughtfully done!",
    name: "Emma Wilson",
    role: "Interior Designer",
    image: "/clients/client1.jpg",
    rotation: -2,
    xOffset: "-3%",
  },
  {
    id: 2,
    quote:
      "Absolutely loved this place! The pasta tasted incredibly fresh, and the atmosphere made the whole evening feel special.",
    name: "Sophia Romano",
    role: "Travel Blogger",
    image: "/clients/client2.jpg",
    rotation: 3,
    xOffset: "4%",
  },
  {
    id: 3,
    quote:
      "I had such a lovely evening there. The pizza was perfectly cooked, the ingredients tasted fresh, and the staff were incredibly welcoming.",
    name: "Chloe Bennett",
    role: "Marketing Manager",
    image: "/clients/client3.jpg",
    rotation: -3.5,
    xOffset: "-2%",
  },
  {
    id: 4,
    quote:
      "The food was absolutely delicious. I ordered the truffle pasta and it was easily one of the best pasta dishes I've ever had",
    name: "Isabella Moretti",
    role: "Fashion Stylist",
    image: "/clients/client5.jpg",
    rotation: 4,
    xOffset: "2%",
  },
];

export default function Testimonial() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full text-black min-h-screen"
      style={{ height: isMobile ? 'auto' : `${testimonials.length * 100}vh` }}
    >
      <div className={`${isMobile ? 'relative' : 'sticky top-0 h-screen'} w-full flex flex-col justify-between overflow-hidden px-4 sm:px-6 py-8 sm:py-12 md:py-16`}>
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#eec201]" />
            <span className="text-sm uppercase md:text-base font-medium tracking-wide">
              Testimonial
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight uppercase leading-none">
            WHAT CLIENTS SAY
          </h2>
        </div>

        <div className={`relative max-w-[900px] w-full mx-auto ${isMobile ? 'mt-8 space-y-6' : 'h-[420px] sm:h-[380px] flex items-center justify-center mb-8'}`}>
          {isMobile ? (
            // Mobile view - stacked cards
            testimonials.map((item) => (
              <div
                key={item.id}
                className="w-full bg-white p-4 sm:p-6 shadow-2xl flex flex-col gap-4 rounded-xs"
                style={{
                  rotate: item.rotation,
                  transform: `translateX(${item.xOffset})`,
                }}
              >
                <div className="w-full flex flex-col justify-between">
                  <p className="text-base sm:text-lg md:text-xl font-semibold leading-snug tracking-tight text-black mb-4">
                    {item.quote}
                  </p>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-black leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority={item.id === 1}
                  />
                </div>
              </div>
            ))
          ) : (
            // Desktop view - animated cards
            testimonials.map((item, index) => {
              const total = testimonials.length;
              const step = 1 / total;
              const start = index * step;
              const end = (index + 1) * step;

              return (
                <Card
                  key={item.id}
                  item={item}
                  index={index}
                  total={total}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })
          )}
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}

function Card({ item, index, progress, start, end }) {
  const y = useTransform(
    progress,
    [start - 0.1, start, end],
    [index === 0 ? 0 : 1000, index === 0 ? 0 : 1000, 0],
  );

  const scale = useTransform(progress, [end, end + 0.2], [1, 0.95]);

  const opacity = useTransform(
    progress,
    [start - 0.05, start + 0.05],
    [index === 0 ? 1 : 0, 1],
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        rotate: item.rotation,
        x: item.xOffset,
        zIndex: index + 1,
      }}
      className="absolute w-full bg-white p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row gap-8 items-center justify-between rounded-xs"
    >
      <div className="w-full md:w-[55%] flex flex-col justify-between h-full">
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-black mb-8">
          {item.quote}
        </p>

        <div>
          <h4 className="text-lg sm:text-xl font-bold text-black leading-tight">
            {item.name}
          </h4>
          <p className="text-sm sm:text-base text-gray-500 font-medium mt-1">
            {item.role}
          </p>
        </div>
      </div>

      <div className="w-full md:w-[45%] aspect-[4/3] relative overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 45vw"
          priority={index === 0}
        />
      </div>
    </motion.div>
  );
}