import Image from "next/image";
import bannerImage from "../image/banner/banner-frame.png";
import Ellipse from "../image/banner/Ellipse 7.png";

const Banner = () => {
  return (
    <div className="py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:max-w-[600px] text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative">
              <div className="relative inline-block">
                <span className="relative inline-block text-[#4B71FF] px-4 py-2">
                  Better Advice
                  <Image
                    src={Ellipse}
                    alt="Ellipse Design"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[100%] pointer-events-none"
                  />
                </span>
              </div>{" "}
              for <br />
              Healthy & Happier Relation
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              Unleash the Power of Nature
            </p>
            <button className="bg-[#4B71FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg hover:bg-[#3a5ed7] transition-all duration-300 mx-auto lg:mx-0 md:w-[278px] md:h-[73px]">
              Book an Appointment
            </button>
          </div>

          {/* Image Section */}
          <div className="relative mt-10 lg:mt-0 w-full md:w-[1030px]">
            <Image
              src={bannerImage}
              alt="Meditating Woman Illustration"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
