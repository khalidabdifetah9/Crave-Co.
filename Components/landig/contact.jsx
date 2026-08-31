"use client"

import React from 'react';

export default function Contact() {
  return (
    <section className="bg-[#fcd301] text-black relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 font-sans">
      <div className=" bg-white w-full  py-30 px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl">
        
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight uppercase leading-[0.95] text-black">
            Make Reservation <br />
          </h1>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10  w-full max-w-4xl ml-auto">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-gray-800">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="What should we call you?"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-800">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your work email"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
              />
            </div>

            <div>
              <label htmlFor="projectDetail" className="block text-sm font-semibold mb-2 text-gray-800">
                Detail <span className="text-red-500">*</span>
              </label>
              <textarea
                id="projectDetail"
                rows={4}
                placeholder="Tell us about your project"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition resize-y"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 font-medium py-4 rounded-full text-base transition duration-200 shadow-md"
              >
                Start
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}