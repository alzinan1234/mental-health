import Image from "next/image";
import React from "react";
import Rectangle from "../image/Achievement/Rectangle 44.png";

const Certification = () => {
  return (
    <div>
      <div className=" max-width mx-auto ">
        <h1 className="md:text-[63px] text-[30px] font-semibold text-center py-10">
          Correctional Behavioral Health Certification - Behavioral Specialty
          (CBHC-BS)
        </h1>

        <div>
          <Image
            className="md:w-[1060px] md:h-[644px] flex items-center justify-center mx-auto"
            src={Rectangle}
            alt=""
          />
        </div>
        <div>
          <p className="text-[25px] font-light text-center py-10 pb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certification;
