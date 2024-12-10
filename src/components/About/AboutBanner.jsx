import AboutBannerImage from "../image/about/health.png";

const AboutBanner = () => {
  return (
    <div className="py-20">
      <div
        className="relative max-width mx-auto md:h-[654px] bg-center rounded-[23px]"
        style={{ backgroundImage: `url(${AboutBannerImage.src})` }}
      >
        <div className="border-[5px] border-[#fff] md:top-[250px] md:left-12  md:w-[668px] md:h-[344px] absolute">
          <div className=" p-20  flex flex-col  gap-8">
            <h1 className="text-white text-4xl md:text-6xl font-semibold">
              About Us
            </h1>
            <p className="text-white w-[577px]">
              Mindware Promotes a healthy and active lifestyle - no fanatical
              weight loss or perfect body ideals. Our goal is toteach patient to
              Mindware Promotes a healthy and active lifestyle - no fanatical
              weight loss or perfect body ideals. Our goal is toteach patient to
              create happiness within.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
