"use client";

export default function Info() {
  return (
    <section className="w-full px-6 py-20  text-black">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
        <div className="max-w-7xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#eec201] inline-block" />
            <p className="text-sm font-medium tracking-tight">
              Inside <span className="italic font-normal">(the)</span> Crave&Co
            </p>
          </div>

          <h2 className="text-4xl w-full sm:text-5xl md:text-6xl font-black uppercase text-[#fcd301] leading-[1.2] tracking-tight mb-8">
            Tucked away in the heart of Italy, Crave & Co. is a place where good
            food, great company, and a little Italian magic come together at the
            table. 
          </h2>
        </div>
      </div>

      <div className="w-full flex justify-end overflow-hidden">
        <div className="relative flex items-center gap-4">
          <div className="relative inline-block">
            <span className="text-8xl sm:text-[11rem] font-black tracking-tighter leading-none select-none">
              1976
            </span>
            <span className="absolute top-[35%] left-[30%] -rotate-12 bg-[#eec201] text-black text-[10px] sm:text-xs font-black tracking-wider uppercase px-3 py-1 shadow-sm whitespace-nowrap">
              Opened
            </span>
          </div>
          <span className="text-6xl sm:text-8xl font-light text-black/30">
            &mdash;
          </span>
        </div>

        <div className="relative flex items-center mr-5">
          <div className="relative inline-block">
            <span className="text-8xl sm:text-[11rem] font-black tracking-tighter leading-none select-none">
              2026
            </span>
            <span className="absolute top-[35%] left-[30%] -rotate-12 bg-[#eec201] text-black text-[10px] sm:text-xs font-black tracking-wider uppercase px-3 py-1 shadow-sm whitespace-nowrap">
              23 branches 
            </span>
          </div>
         
        </div>
      </div>
    </section>
  );
}
