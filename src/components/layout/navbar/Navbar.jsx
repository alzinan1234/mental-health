"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../components/image/nav/logo-health.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative max-width mx-auto flex justify-between items-center bg-white py-6 px-4 md:pb-[37px] md:pt-25px">
        {/* Logo */}
        <div className="flex items-center justify-center gap-[30px]">
          <Image
            className="w-[90px] h-[69px]"
            src={logo}
            alt="Health Logo"
            priority
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center lg:text-[24px] md:text-[14px] md:font-normal md:gap-[56px]">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">About Me</li>
            <li className="cursor-pointer">Achievement</li>
            <li className="cursor-pointer">Gallery</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-[100%] left-0 w-full bg-black shadow-md flex flex-col items-center gap-4 py-4 text-white font-medium z-50">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">About Me</li>
            <li className="hover:text-blue-500 cursor-pointer">Achievement</li>
            <li className="hover:text-blue-500 cursor-pointer">Gallery</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
            {/* Appointment Button */}
            <button className="md:text-[20px] md:font-semibold text-[#636363] border border-[#636363] p-4 rounded-[5px]">
              Book an Appointment
            </button>
          </ul>
        )}

        {/* Appointment Button (Desktop Only) */}
        <button className="hidden lg:block md:text-[20px] md:font-semibold text-[#636363] border border-[#636363] md:p-[24px] md:rounded-[5px]">
          Book an Appointment
        </button>
      </nav>

      {/* Divider */}
      <div className="max-width mx-auto border-b border-gray-300"></div>
    </>
  );
};

export default Navbar;
