"use client"
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "Do you have gluten free options",
    answer:
      "Yes! We offer a selection of gluten free dishes and can accommodate certain dietary requirements. Please let our team know about any allergies or preferences when ordering.",
  },
  {
    id: 2,
    question: "Do you offer vegetarian options",
    answer:
      "Absolutely! We have a variety of vegetarian dishes, including fresh pasta, pizzas, salads, and seasonal vegetable dishes. Just let our staff know if you have any dietary preferences.",
  },
  {
    id: 3,
    question: "Do I need to make a reservation",
    answer:
      "Reservations are recommended, especially for evenings and weekends. However, walk-ins are always welcome when tables are available.",
  },
  {
    id: 4,
    question: "Can I celebrate a special occasion at the restaurant",
    answer:
      "Of course! Whether it is a birthday, anniversary, or a simple night out, we would love to make your visit special. Contact us in advance and we can help arrange the perfect table.",
  },
  {
    id: 5,
    question: "Do you offer takeaway",
    answer:
      "Yes! Many of our dishes are available for takeaway, so you can enjoy your favorite Italian meals wherever you are.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex px-10 mt-30 bg-[#fcd301] py-20 flex-col text-black space-y-10">
      <div>
        <h1 className="uppercase text-8xl">key question</h1>
      </div>
      <div>
        {questions.map((qus) => {
          const isOpen = openId === qus.id;
          return (
            <div 
              className="border-b border-black/20" 
              key={qus.id}
            >
              <div 
                className="flex justify-between items-center pt-13 pb-5 cursor-pointer"
                onClick={() => toggleAnswer(qus.id)}
              >
                <h1 className="text-3xl capitalize">{qus.question}</h1>
                <span className="text-5xl font-light ml-4 flex-shrink-0">
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeInOut",
                      opacity: { duration: 0.2 }
                    }}
                  >
                    <p className="max-w-200 pb-5 text-xl text-black/70 capitalize">{qus.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;