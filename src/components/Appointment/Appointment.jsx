import Image from "next/image";
import preview from "../image/otherImage/-preview 1.png";

const Appointment = () => {
  return (
    <>
      <div className="pb-[99px]">
        <div className="bg-[#4B71FF] max-width mx-auto p-[50px] rounded-[20px]">
          <div className="   md:flex justify-center items-center gap-[97px]">
            <div>
              <Image
                className="md:w-[666px] md:h-[481px]"
                src={preview}
                alt=""
              />
            </div>
            <div className="md:flex flex-col gap-[43px]">
              <h1 className="md:text-[48px] text-[24px] font-bold leading-[72px] text-white">
                Whenever and wherever youneed it
              </h1>
              <button className="md:p-[24px] p-[15px] md:w-[270px]  bg-[#FE9816] rounded-[5px] font-semibold text-[20px] text-[#fff]">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
