"use client";

import Image from "next/image";
import Rectangle from "../image/otherImage/Rectangle 19.png";

import { useState } from "react";

const Faq = () => {
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
    <div className="relative isolate overflow-hidden  ">
      <div className="py-24 px-8  md:flex gap-[90px] items-center justify-center">
        <div className="">
          <Image
            className="md:h-[1000px] md:w-[1100px]"
            src={Rectangle}
            alt=""
          />
        </div>
        <ul className="md:w-[1084px] md:p-[90px]">
          {faqs.map((faq, index) => (
            <li key={index} className="group bg-[#fff]">
              <button
                onClick={() => toggleFAQ(index)}
                className="relative flex gap-2 items-center w-full py-10 text-base font-semibold text-left border-t border-gray-300 md:text-lg"
                aria-expanded={openIndex === index}
              >
                <span className="flex-1 md:text-[38px] text-[10px] font-bold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`flex-shrink-0 md:w-[70px] md:h-[70px] w-4 h-4 ml-auto transform transition-transform border md:p-4 duration-200 ${
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
                <div className="pb-[40px] leading-relaxed text-[25px] font-normal">
                  <div className="space-y-2 text-gray-700">{faq.answer}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
