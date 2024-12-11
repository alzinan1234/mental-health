import Image from "next/image";
import React from "react";
import preview from "../image/Achievement/preview 1.png";

const AchievementPart = () => {
  return (
    <>
      <div className=" max-width mx-auto md:flex items-center justify-center gap-[57px]">
        <div className="flex flex-col gap-[57px]">
          <h1 className="md:text-7xl text-3xl">Our Achievement</h1>
          <p className="text-[25px] font-light leading-9 md:w-[623px] md:h-[112px]">
            Mindware Promotes a healthy and active lifestyle - no fanatical
            weight loss or perfect body ideals. Our goal is toteach patient to
            create happiness within.
          </p>
          <button className="bg-[#4B71FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg hover:bg-[#3a5ed7] transition-all duration-300 mx-auto lg:mx-0 md:w-[278px] md:h-[73px]">
            Book an Appointment
          </button>
        </div>

        <div className="md:w-[]">
          <Image className="md:w-[885px] md:h-[760px]" src={preview} alt="" />
        </div>
      </div>
    </>
  );
};

export default AchievementPart;
