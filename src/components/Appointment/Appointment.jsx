import Image from "next/image";
import preview from "../image/otherImage/-preview 1.png";

const Appointment = () => {
  return (
    <>
      <div className=" py-[99px] max-width mx-auto bg-[#4B71FF] rounded-[20px] md:p-50px md:flex justify-center items-center gap-[97px]">
        <div>
          <Image className="md:w-[666px] md:h-[481px]" src={preview} alt="" />
        </div>
        <div className="md:flex flex-col gap-[43px]">
          <h1 className="text-[48px] font-bold leading-[72px] text-white">
            Whenever and wherever youneed it
          </h1>
          <button className="p-[24px] bg-[#FE9816] rounded-[5px] font-semibold text-[20px] text-[#fff]">
            Book an Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Appointment;
