import Image from "next/image";
import svgImage from "../image/about/hand-drawn-illustration-world-mental-health-day_23-2149696692 1 (1).png";

const Health = () => {
  return (
    <>
      <div className=" py-10">
        <div className="flex gap-[10px] items-center justify-center">
          <div className="text-center text-[#000] md:text-[72px] text-[25px] leading-[88px] md:w-[50%] font-normal  ">
            “Being able to be your true self is one of the strongest components
            of good mental health.”
          </div>
          <div className=" ">
            <Image
              className="md:w-[865px] md:h-[600px]"
              src={svgImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Health;
