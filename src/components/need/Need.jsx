import Image from "next/image";
import paperImage from "../image/otherImage/paper-bag-removebg-preview 1.png";

const Need = () => {
  return (
    <>
      ➗
      <div className="md:flex md:gap-[123px] py-[99px]">
        <div>
          <Image
            className="md:w-[939px] md:h-[933px] relative"
            src={paperImage}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold md:text-[63px] text-[40px] leading-[72px]">
            Whenever and <br /> wherever you <br /> need it
          </h1>
          <p className="font-[300px] leading-[35px] text-[25px]  md:w-[649px] mt-3">
            Mindware Promotes a healthy and active lifestyle - no fanatical
            weight loss or perfect body ideals. Our goal is toteach patient to
            create happiness within.
          </p>
          <button className=" md:p-[24px] border border-[#636363] rounded-[5px] text-[20px] text-[#636363] mt-[64px]">
            Shop Now
          </button>
          <div className="mb-[110px]">
            <div className=" bg-[#FFF] shadow md:flex gap-[109px] md:mt-[66px] md:p-[60px] absolute right-[-1]">
              <div>
                <h1 className="font-bold text-[36px] leading-[72px] text-blue-500">
                  31+{" "}
                </h1>
                <p className="text-[30px] font-[500px] leading-[40px]">
                  States we service
                </p>
              </div>
              <div>
                <h1 className="font-bold text-[36px] leading-[72px] text-[#F95800]">
                  900+{" "}
                </h1>
                <p className="text-[30px] font-[500px] leading-[40px]">
                  Approximately centres
                </p>
              </div>
              <div>
                <h1 className="font-bold text-[36px] leading-[72px] text-[#FE9816]">
                  3k+{" "}
                </h1>
                <p className="text-[30px] font-[500px] leading-[40px]">
                  Highly trained Clinicians
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Need;
