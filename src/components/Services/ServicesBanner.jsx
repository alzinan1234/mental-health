import React from "react";
import ServicesImage from "../image/Services/Rectangle 42.png";
import Image from "next/image";
import "./ServicesBanner.css";

const ServicesBanner = () => {
  return (
    <>
      <div className="flex">
        <div className="md:w-[850px] md:h-[549px] flex flex-col gap-[44px] md:ml-[208px] md:mt-[108px] ">
          <h1 className="md:text-[72px] text-[30px] font-semibold">
            Various health conditions are treated by us
          </h1>
          <p className="text-[25px] font-[300px] text-[#050505] md:w-[510px] md:h-[210px]">
            Mindware Promotes a healthy and active lifestyle - no fanatical
            weight loss or perfect body ideals. Our goal is toteach patient to
            create happiness within.
          </p>
          <button className="bg-[#4B71FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg hover:bg-[#3a5ed7] transition-all duration-300 mx-auto lg:mx-0 md:w-[278px] md:h-[73px]">
            Book an Appointment
          </button>
        </div>
        <div>
          <Image
            className="md:w-[885px] border-image "
            src={ServicesImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ServicesBanner;
