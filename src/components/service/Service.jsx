"use client";
import React from "react";
import Slider from "react-slick";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import slider1 from "../image/blog/Chane image (1).png";
import slider2 from "../image/blog/Chane image (2).png";
import slider3 from "../image/blog/Chane image.png";
import slider4 from "../image/blog/Chane image (1).png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <button
      className={`${className} bg-[#000] text-[#fff] rounded-full p-10 shadow-md hover:bg-[#444] flex items-center justify-center`}
      style={{
        ...style,
        display: "block",
        zIndex: 1,
        [direction === "left" ? "left" : "right"]: "30px",
      }}
      onClick={onClick}
    >
      {direction === "left" ? (
        <FaArrowLeftLong size={24} />
      ) : (
        <FaArrowRight size={24} />
      )}
    </button>
  );
};

const Service = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="font-bold md:text-[72px] text-[30px] leading-[88px] text-[#000] py-[64px] text-center">
        <h1>
          We provide psychological <br /> Service
        </h1>
      </div>

      <div className="pb-[64px] max-width mx-auto px-4">
        <Slider {...settings}>
          <div className="bg-[#FFF] p-[24px] shadow-md">
            <Image
              className="w-[298px] h-[245px] rounded-[5px]"
              src={slider1}
              alt="1 to 1 Therapy"
            />
            <p className="text-[25px] font-bold text-[#1F1F1F] mt-[19px]">
              1 to 1 Therapy
            </p>
          </div>
          <div className="bg-[#FFF] p-[24px] shadow-md">
            <Image
              className="w-[298px] h-[245px] rounded-[5px]"
              src={slider2}
              alt="Group Therapy"
            />
            <p className="text-[25px] font-bold text-[#1F1F1F] mt-[19px]">
              Group Therapy
            </p>
          </div>
          <div className="bg-[#FFF] p-[24px] shadow-md">
            <Image
              className="w-[298px] h-[245px] rounded-[5px]"
              src={slider4}
              alt="Couple Therapy"
            />
            <p className="text-[25px] font-bold text-[#1F1F1F] mt-[19px]">
              Couple Therapy
            </p>
          </div>
          <div className="bg-[#FFF] p-[24px] shadow-md">
            <Image
              className="w-[298px] h-[245px] rounded-[5px]"
              src={slider3}
              alt="Family Therapy"
            />
            <p className="text-[25px] font-bold text-[#1F1F1F] mt-[19px]">
              Family Therapy
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Service;
