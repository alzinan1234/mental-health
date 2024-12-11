import React from "react";
import badge from "../image/Achievement/badge-emblem-with-red.png";
import certificate07 from "../image/Achievement/certificate07 1.png";
import winner from "../image/Achievement/5-01 1.png";
import award from "../image/Achievement/award.png";
import Image from "next/image";

const Specialty = () => {
  return (
    <>
      <div>
        <h1 className="md:text-[63px] text-[30px] font-semibold text-center py-10">
          Correctional Behavioral Health Certification - Behavioral Specialty
          (CBHC-BS)
        </h1>

        <div className=" max-width mx-auto md:flex gap-[50px] items-center justify-center">
          <div className=" flex flex-col gap-[37px]">
            <Image className="md:w-[640px] md:h-[339px]" src={badge} alt="" />
            <Image className="md:w-[650px] md:h-[604px]" src={winner} alt="" />
          </div>

          <div className="flex flex-col gap-[37px]">
            <Image
              className="md:w-[796px] md:h-[600px]"
              src={certificate07}
              alt=""
            />
            <Image className="md:w-[796px] md:h-[343px]" src={award} alt="" />
          </div>
        </div>
        <div>
          <p className=" max-width mx-auto font-light text-[25px] text-justify py-12 pb-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever .Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Specialty;
