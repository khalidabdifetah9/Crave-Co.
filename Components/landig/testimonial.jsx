"use client";

import { useRef } from "react";
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full text-black"
      style={{ height: `${testimonials.length * 80}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-6 py-8 md:py-16">
        <div className="max-w-350 w-full mx-auto">
          <div className="flex items-center gap-2 mb-2 sm:mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#eec201]" />
            <span className="text-xs uppercase md:text-base font-medium tracking-wide">
              Testimonial
            </span>
          </div>

          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-none">
            WHAT CLIENTS SAY
          </h2>
        </div>

        <div className="relative max-w-225 w-full mx-auto h-120 sm:h-105 flex items-center justify-center mb-4 sm:mb-8">
          {testimonials.map((item, index) => {
            const total = testimonials.length;
            const step = 1 / total;
            const start = index * step;
            const end = (index + 1) * step;

            return (
              <Card
                key={item.id}
                item={item}
                index={index}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}

function Card({ item, index, progress, start, end }) {
  const safeStart = Math.max(0, start - 0.05);
  const safeEnd = Math.min(1, end + 0.1);

  const y = useTransform(
    progress,
    [safeStart, start, end],
    [index === 0 ? 0 : 400, index === 0 ? 0 : 400, 0]
  );

  const scale = useTransform(
    progress,
    [end, safeEnd],
    [1, 0.95]
  );

  const opacity = useTransform(
    progress,
    [safeStart, start + 0.02],
    [index === 0 ? 1 : 0, 1]
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
        willChange: "transform, opacity",
      }}
      className="absolute w-full bg-white p-5 sm:p-10 shadow-2xl flex flex-col md:flex-row gap-4 sm:gap-8 items-center justify-between rounded-xs max-h-[80vh] overflow-y-auto"
    >
      <div className="w-full md:w-[55%] flex flex-col justify-between h-full">
        <p className="text-base sm:text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-black mb-4 sm:mb-8">
          {item.quote}
        </p>

        <div>
          <h4 className="text-base sm:text-xl font-bold text-black leading-tight">
            {item.name}
          </h4>
          <p className="text-xs sm:text-base text-gray-500 font-medium mt-0.5 sm:mt-1">
            {item.role}
          </p>
        </div>
      </div>

      <div className="w-full md:w-[45%] aspect-[16/9] sm:aspect-[4/3] relative overflow-hidden bg-gray-100 rounded-xs">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 45vw"
          priority
        />
      </div>
    </motion.div>
  );
}