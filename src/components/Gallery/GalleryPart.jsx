import Image from "next/image";
import React from "react";
import Rectangle1 from "../image/gallery/Rectangle 1.png";
import Rectangle2 from "../image/gallery/Rectangle 2.png";
import Rectangle3 from "../image/gallery/Rectangle 3.png";
import Rectangle4 from "../image/gallery/Rectangle 4.png";
import Rectangle5 from "../image/gallery/Rectangle 5.png";
import Rectangle6 from "../image/gallery/Rectangle 6.png";
import Rectangle7 from "../image/gallery/Rectangle 7.png";
import Rectangle8 from "../image/gallery/Rectangle 8.png";
import Rectangle9 from "../image/gallery/Rectangle 9.png";
import Rectangle10 from "../image/gallery/Rectangle 10.png";

const GalleryPart = () => {
  return (
    <>
      <div className="py-12">
        <h1 className="md:text-[72px] text-[30px] font-semibold text-black text-center">
          Gallery
        </h1>
        <p className="text-[24px] text-center font-light">
          Mindware Promotes a healthy and active lifestyle - no fanatical weight
          loss or perfect body ideals. Our goal is toteach patient to create
          happiness within.
        </p>
      </div>

      <div className="max-width mx-auto grid md:grid-cols-2 gap-[37px]">
        <div>
          <div>
            <Image
              className="md:w-[728px] md:h-[670px]"
              src={Rectangle1}
              alt=""
            />
          </div>
          <div className="md:flex gap-[19px]">
            <Image
              className="md:w-[356px] md:h-[329px]"
              src={Rectangle2}
              alt=""
            />
            <Image
              className="md:w-[356px] md:h-[329px]"
              src={Rectangle3}
              alt=""
            />
            <Image
              className="md:w-[356px] md:h-[329px]"
              src={Rectangle4}
              alt=""
            />
            <Image
              className="md:w-[356px] md:h-[329px]"
              src={Rectangle5}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="md:flex gap-[19px]">
            <Image
              className="md:w-[356px] md:h-[329px]"
              src={Rectangle6}
              alt=""
            />
            <Image
              className="md:w-[356px] md:h-[329px]"
              src={Rectangle7}
              alt=""
            />
            <Image
              className="md:w-[356px] md:h-[329px]"
              src={Rectangle8}
              alt=""
            />
            <Image
              className="md:w-[356px] md:h-[329px]"
              src={Rectangle9}
              alt=""
            />
          </div>
          <div>
            <Image
              className="md:w-[728px] md:h-[670px]"
              src={Rectangle10}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPart;
