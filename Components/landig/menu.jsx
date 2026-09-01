"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/menu/Dumplings.jpg" },
  { src: "/menu/Fried_Chicken.jpg" },
  { src: "/menu/Hamburger.jpg" },
  { src: "/menu/Pasta.jpg" },
  { src: "/menu/Pizza.jpg" },
  { src: "/menu/Ramen.jpg" },
  { src: "/menu/Sandwich.jpg" },
  { src: "/menu/Sushi.jpg" },
  { src: "/menu/Tacos.jpg" },
  { src: "/menu/Dumplings.jpg" },
  { src: "/menu/Fried_Chicken.jpg" },
  { src: "/menu/Hamburger.jpg" },
  { src: "/menu/Pasta.jpg" },
  { src: "/menu/Ramen.jpg" },
];

export default function Menu() {
  const wrapperRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let rafId;
    let targetRotation = 0;
    let currentRotation = 0;

    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const wrapper = wrapperRef.current;
      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrolled = -rect.top;
      const totalScrollable = wrapperHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      targetRotation = progress * 240; // Controlled slow rotation angle
    };

    const updateAnimation = () => {
      currentRotation += (targetRotation - currentRotation) * 0.02;
      setRotation(currentRotation);
      rafId = requestAnimationFrame(updateAnimation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    rafId = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const total = images.length;

  return (
    <section
      ref={wrapperRef}
      className="relative w-full z-20"
      style={{ height: "650vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden pt-50 flex items-center justify-center z-20">
        <div className="relative w-[95vmin] h-[95vmin] flex items-center justify-center">
          {images.map((img, i) => {
            const angleDeg = (i / total) * 360 + rotation;

            return (
              <div
                key={i}
                className="absolute origin-center transition-[transform] duration-0"
                style={{
                  width: "clamp(90px, 16vmin, 160px)",
                  height: "clamp(80px, 12vmin, 140px)",
                  transform: `rotate(${angleDeg}deg) translateY(var(--circle-radius, -400%))`,
                }}
              >
                <style jsx>{`
                  @media (max-width: 767px) {
                    div {
                      --circle-radius: -250%;
                    }
                  }
                  @media (min-width: 768px) {
                    div {
                      --circle-radius: -400%;
                    }
                  }
                `}</style>
                <div className="relative w-full h-full rounded-2xl md:rounded-xl overflow-hidden shadow-md border border-black/5 bg-neutral-100">
                  <Image
                    src={img.src}
                    alt={`Menu Item ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="140px"
                  />
                </div>
              </div>
            );
          })}

          <div className="relative z-30 flex flex-col items-center md:pb-50 text-center px-4 max-w-[550px]">
            <h2
              className="text-black font-black leading-none tracking-tight uppercase"
              style={{
                fontSize: "clamp(2.5rem, 7.5vw, 6rem)",
                fontFamily:
                  '"Oswald", "Bebas Neue", "Impact", "Arial Narrow", sans-serif',
              }}
            >
              {"WHAT'S ON THE MENU"}.
            </h2>

            <p className="mt-4 md:mt-6 text-black text-[10px] md:text-xs font-semibold uppercase tracking-wider leading-relaxed max-w-[360px]">
              Discover a menu inspired by the heart of Italy, where timeless recipes meet fresh ingredients and a little Crave & Co. creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}