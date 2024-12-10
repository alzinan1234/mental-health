import React from "react";
import teamImage1 from "../image/about/Rectangle (1).png";
import teamImage2 from "../image/about/Rectangle 26 (2).png";
import teamImage3 from "../image/about/Rectangle 24 (3).png";
import teamImage4 from "../image/about/Rectangle 23 (4).png";
import Image from "next/image";

const OurTeam = () => {
  return (
    <>
      <div className="max-width mx-auto py-8">
        <div className="md:flex gap-[51px]">
          <div className="flex flex-col gap-10 w-[50%]">
            <h1 className="md:text-[72px] text-[30px] text-[#000] font-semibold leading-[88px]">
              Our Team
            </h1>
            <p className="md:text-[25px] font-normal leading-[35px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industrys standard
              dummy text ever{" "}
            </p>
            <button className="bg-[#4B71FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg hover:bg-[#3a5ed7] transition-all duration-300 mx-auto lg:mx-0 md:w-[278px] md:h-[73px]">
              Book an Appointment
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-[52px] w-[50%]">
            <Image
              className="md:w-[400px] md:h-[400px]"
              src={teamImage1}
              alt=""
            />
            <Image
              className="md:w-[340px] md:h-[356px]"
              src={teamImage2}
              alt=""
            />
            <Image
              className="md:w-[340px] md:h-[356px]"
              src={teamImage3}
              alt=""
            />
            <Image
              className="md:w-[400px] md:h-[400px]"
              src={teamImage4}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
