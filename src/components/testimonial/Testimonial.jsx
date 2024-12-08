import React from "react";
import dotIcon from "../image/otherImage/“.svg";
import star from "../image/otherImage/icon.svg";
import abater from "../image/otherImage/change image.png";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <div className="max-width mx-auto ">
        <div className="md:flex gap-[46px] items-center justify-center">
          <div>
            <h1 className="md:text-[72px] text-[30px] font-bold text-[#000] leading-[88px] mb-[64px]">
              Transformative Healing: Stories of Personal Growth and Resilience
            </h1>
            <button className="bg-[#4B71FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg hover:bg-[#3a5ed7] transition-all duration-300 mx-auto lg:mx-0 md:w-[278px] md:h-[73px]">
              Book an Appointment
            </button>
          </div>
          <div>
            <div className=" shadow md:p-[99px]">
              <div className="flex gap-[30px] items-center">
                <div>
                  <Image className="" src={abater} alt="abater" />
                </div>
                <div>
                  <h1 className="font-bold text-[32px]">Jon Doe</h1>
                  <p className="text-[18px] font-normal">Patient</p>
                  <span className="rounded-[20px] bg-[#E7E7E7] flex items-center w-[82px]">
                    <Image src={star} alt="" />
                    <span>5.0</span>
                  </span>
                </div>
                <div>
                  <Image src={dotIcon} alt="" />
                </div>
              </div>
              <h1 className="text-[38px] font-bold py-[30px]">
                {" "}
                A Mental Health Website That Truly Cares{" "}
              </h1>
              <p className="text-[18px] font-medium">
                The mental health website has been a game-changer for me. With
                its comprehensive resources, supportive community, and
                compassionate team, it has provided the tools and empowerment I
                needed to overcome challenges. I highly recommend this website
                for accessible and impactful mental health support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
