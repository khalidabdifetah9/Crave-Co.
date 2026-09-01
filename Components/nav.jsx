"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleReservationClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    const targetPosition = window.innerHeight * 19.2;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
    },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 flex items-center justify-between bg-black/60 sm:bg-transparent">
        <Link href={"/"} className="flex-shrink-0 z-50">
          <span className="text-[#eec201] font-extrabold text-xl sm:text-2xl">
            CC.
          </span>
        </Link>

        <div className="hidden sm:flex flex-shrink-0 space-x-3 md:space-x-4">
          <button
            onClick={handleReservationClick}
            className="inline-block uppercase bg-[#eec201] text-white text-[10px] md:text-xs font-bold tracking-wider px-4 md:px-5 py-2 md:py-2.5 hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            Reservation
          </button>
          <Link
            href="/menu"
            className="inline-block uppercase bg-[#eec201] text-white text-[10px] md:text-xs font-bold tracking-wider px-4 md:px-5 py-2 md:py-2.5 hover:opacity-90 transition-opacity duration-200"
          >
            Menu
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="sm:hidden z-50 text-[#eec201] bg-black/80 backdrop-blur-md p-2 rounded-md focus:outline-none active:scale-95 transition-transform duration-200"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center px-6 sm:hidden"
          >
            <div className="flex flex-col space-y-3 w-full max-w-xs">
              <a
                href="#reservation"
                onClick={handleReservationClick}
                className="w-full text-center uppercase bg-[#eec201] text-white text-sm font-bold tracking-wider py-4 px-6 hover:opacity-90 active:scale-95 transition-all duration-200 rounded-sm cursor-pointer"
              >
                Reservation
              </a>
              <Link
                href="/menu"
                onClick={() => setIsOpen(false)}
                className="w-full text-center uppercase bg-[#eec201] text-white text-sm font-bold tracking-wider py-4 px-6 hover:opacity-90 active:scale-95 transition-all duration-200 rounded-sm"
              >
                Menu
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 text-white/60 text-xs uppercase tracking-wider hover:text-white transition-colors duration-200"
              >
                Close ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}