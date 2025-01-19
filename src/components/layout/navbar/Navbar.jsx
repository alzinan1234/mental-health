"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../components/image/nav/logo-health.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
          isScrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className="relative max-width mx-auto flex justify-between items-center py-[13px] px-4 md:pb-[37px] md:pt-[25px]">
          {/* Logo */}
          <div className="flex items-center justify-center gap-[30px]">
            <Link href="/">
              <Image
                className="w-[90px] h-[69px] cursor-pointer"
                src={logo}
                alt="Health Logo"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center lg:text-[24px] md:text-[14px] md:font-normal md:gap-[56px]">
              <li className="cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/Services">Services</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/About">About Me</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/Achievement">Achievement</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/Gallery">Gallery</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/Blog">Blog</Link>
              </li>
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
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/Services">Services</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/About">About Me</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/Achievement">Achievement</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/Gallery">Gallery</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/Blog">Blog</Link>
              </li>
              <button className="md:text-[20px] md:font-semibold text-[#636363] border border-[#636363] p-4 rounded-[5px]">
                Book an Appointment
              </button>
            </ul>
          )}

          {/* Appointment Button (Desktop Only) */}
          <button className="hidden lg:block md:text-[20px] md:font-semibold text-[#636363] border border-[#636363] md:p-[24px] md:rounded-[5px]">
            Book an Appointment
          </button>
        </div>
        <div className=" max-width mx-auto h-[1px] bg-[#D1D1D1]"></div>{" "}
      </nav>
      {/* Divider */}

      <div className="h-[100px] " />
      {/* Prevent content overlap */}
    </>
  );
};

export default Navbar;
