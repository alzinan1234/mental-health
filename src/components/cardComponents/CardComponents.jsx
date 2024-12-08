"use client";
import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";

const CardComponents = ({ data }) => {
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden p-[24px] w-[474px] h-[628px]">
      <div className="relative">
        <Image
          src={data.image}
          alt={data.title}
          className=" object-cover md:w-[428px] md:h-[245px] rounded"
        />
        <span className="absolute top-[175px] left-[15px] bg-white text-gray-800 text-[16px] font-semibold  p-[10px] rounded">
          {data.category}
        </span>
      </div>
      <div className="py-[19px]">
        <div className="flex items-center text-[18px] font-[400px] text-[#B6B6B6] mb-2">
          <span className="material-icons-outlined mr-2">
            <MdOutlineWatchLater className="w-[24px] h-[24px] text-[#B6B6B6]" />
          </span>
          {data.role}
        </div>
        <h2 className="text-2xl font-bold text-[#1F1F1F] leading-[35px]">
          {data.title}
        </h2>
        <p className=" text-[#9C9C9C]  text-[18px] font-[500px] mt-[19px]">
          {data.description}
        </p>

        <div className="flex items-center mt-4">
          <Image
            src={data.author.image}
            alt={data.author.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="ml-2">
            <p className="text-[20px] font-bold text-[#1F1F1F] ">
              {data.author.name}
            </p>
            <p className="text-[18px] font-[400px]">{data.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponents;
