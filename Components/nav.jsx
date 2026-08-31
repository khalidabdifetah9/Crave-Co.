"use client";

import Link from "next/link";

export default function Nav() {
  const navLinks = [
    { label: "HOME V1", href: "#" },
    { label: "HOME V2", href: "#" },
    { label: "HOME V3", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "WORK / 08", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 pt-6 pb-4 flex items-center justify-between">
      <Link href={"/"} className="flex-shrink-0">
        <span className="text-[#eec201] font-extrabold text-2xl ">CC.</span>
      </Link>
      <div className="flex-shrink-0 space-x-4">
        <Link
          href="#"
          className="inline-block bg-[#eec201] text-white text-[10px] font-bold tracking-wider px-5 py-2.5 hover:opacity-90 transition-opacity duration-200"
        >
          Reservation
        </Link>
        <Link
          href="#"
          className="inline-block bg-[#eec201] text-white text-[10px] font-bold tracking-wider px-5 py-2.5  hover:opacity-90 transition-opacity duration-200"
        >
          About US
        </Link>
      </div>
    </nav>
  );
}
