import React from "react";

const Newsletter = () => {
  return (
    <div className="py-[50px]">
      <div className="bg-blue-500 max-width max-auto  flex justify-center items-center md:py-20 md:px-[50px] rounded-[20px]">
        <div className="text-center">
          <h2 className="text-white md:text-[48px] text-[10px] font-bold mb-4">
            Subscribe to our newsletter.
          </h2>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Write email here"
              className="px-4 py-2 rounded-l-md outline-none w-80 border border-white text-gray-700 md:h-[73px] md:w-[648px]"
            />
            <button className="bg-blue-600 text-white p-[24px] rounded-r-md font-bold hover:bg-red-500 transition">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
