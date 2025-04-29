import { Montserrat } from "next/font/google";
import React from "react";
import { GoArrowUp } from "react-icons/go";
import { MdOutlineLocalShipping } from "react-icons/md";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const TotalShipment = () => {
  return (
    <div className=" w-[95%] lg:max-w-[350px] h-[163px] flex flex-col items-start justify-center rounded-[8px] bg-[#fff] px-5">
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <div className="size-[40px] bg-[#F4E3C4] flex items-center justify-center rounded-[800px]">
            <MdOutlineLocalShipping className="text-[#C98810] text-[22px] " />
          </div>
          <p className="text-[12px] font-[400] text-[#525252]">
            Total Shipment
          </p>
        </div>

        <div className="flex items-center gap-2">
          <h3 className={` text-[#353535] text-[24px] font-[500] ${montserrat.className}`}>34</h3>
          <div className="flex items-center text-[#0A7D00]">
            <GoArrowUp className="w-[12px]" />
            <p className="text-[12px] font-[400]">90%</p>
          </div>
        </div>

            <div className={`flex items-center gap-1 ${montserrat.className}`}>
                <p className="text-[#7B7B7B] text-[11px] font-[500]">Vs last month: </p>
                <span className="text-[#3A3A3A] text-[11px] font-[500]">4</span>
            </div>
      </div>
    </div>
  );
};

export default TotalShipment;
