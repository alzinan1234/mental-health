"use client";

import Image from "next/image";
import Rectangle from "../image/otherImage/Rectangle 19.png";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why is it important to address?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda cum amet blanditiis quis vero saepe quo veritatis ab dicta ratione cumque.",
    },
    {
      question: "How can I recognize signs of a health issue?",
      answer:
        "Assumenda cum amet blanditiis quis vero saepe quo veritatis ab dicta ratione cumque.",
    },
    {
      question: " How to spot mental health issues?",
      answer:
        "Labore velit omnis sequi voluptatem harum distinctio reiciendis eveniet!",
    },
    {
      question: " Where to find support?",
      answer:
        "Labore velit omnis sequi voluptatem harum distinctio reiciendis eveniet!",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="relative isolate overflow-hidden ">
      <div className="py-24 px-8 max-width mx-auto flex flex-col md:flex gap-[90px] items-center justify-center">
        <div className="">
          <Image className="md:h-[524px] md:w-[313px]" src={Rectangle} alt="" />
        </div>
        <ul className="basis-1/2">
          {faqs.map((faq, index) => (
            <li key={index} className="group">
              <button
                onClick={() => toggleFAQ(index)}
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t border-gray-300 md:text-lg"
                aria-expanded={openIndex === index}
              >
                <span className="flex-1 text-gray-900">{faq.question}</span>
                <svg
                  className={`flex-shrink-0 w-4 h-4 ml-auto transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="fill-current"
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`fill-current ${
                      openIndex === index ? "hidden" : ""
                    }`}
                    style={{
                      transform: "rotate(90deg)",
                      transformOrigin: "center",
                    }}
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-60" : "max-h-0"
                }`}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 text-gray-700">{faq.answer}</div>
                </div>
              </div>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="text-orange-500 mt-3 inline-flex font-medium no-underline group px-2 py-2 items-center tracking-tight"
            >
              See more
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-in-out"
                viewBox="0 0 100 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.1233 27.7777H21.8758C20.1259 27.7777 18.751 26.5555 18.751 24.9999C18.751 23.4444 20.1259 22.2222 21.8758 22.2222H78.1233C79.8732 22.2222 81.2482 23.4444 81.2482 24.9999C81.2482 26.5555 79.8732 27.7777 78.1233 27.7777Z"
                  fill="#FF8E26"
                />
                <path
                  d="M62.4999 47.2222C62.09 47.2266 61.6837 47.1548 61.307 47.0112C60.9302 46.8677 60.5915 46.6557 60.3125 46.3888C59.0625 45.2777 59.0625 43.5555 60.3125 42.4444L79.9991 24.9444L60.3125 7.4444C59.0625 6.33329 59.0625 4.61107 60.3125 3.49996C61.5624 2.38885 63.4998 2.38885 64.7498 3.49996L86.6238 22.9444C87.8737 24.0555 87.8737 25.7777 86.6238 26.8888L64.7498 46.3333C64.1248 46.8888 63.3123 47.1666 62.5624 47.1666L62.4999 47.2222Z"
                  fill="#FF8E26"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
