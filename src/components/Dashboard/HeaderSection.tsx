import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

const HeaderSection = () => {
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center">
      <div className="w-full min-h-[245px] flex flex-col items-center justify-center relative overflow-hidden rounded-[6px] px-5 xl:px-10 2xl:px-32 py-5 md:py-0">
        <div className="absolute inset-0 bg-[url('/d1.jpg')] bg-no-repeat bg-cover bg-center z-0" />

        <div className="absolute inset-0 bg-[#262A48]/90 z-10" />

        <div className="relative z-30 flex flex-col md:flex-row items-center justify-center md:justify-between w-full h-full">
          <h1 className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] text-[30px] md:text-start text-center text-[#fff] leading-[1] font-[700]">
            KEEP UP WITH YOUR BUSINESS NEEDS
          </h1>

          <Image
            src="/d2.png"
            alt="hero"
            width={1000}
            height={1000}
            className="w-[150px] md:w-[200px] object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <GoDotFill className="text-[#D4D4D4] size-[18px]" />
        <GoDotFill className="text-[#32385E] size-[18px]" />
        <GoDotFill className="text-[#D4D4D4] size-[18px]" />
      </div>
    </div>
  );
};

export default HeaderSection;
