"use client";
import { ShipmentData } from "@/utilities/DummyData";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineAlarm, MdOutlineKeyboardArrowDown } from "react-icons/md";

const ShipmentDetails = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleOpen = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? [] : [index]
    );
  };

  

  const deliveryStatus = (status: string) => {
    const statusClasses: any = {
      "In-Transit": "text-[#CB854B] bg-[#FFEAD9]",
      "Pending": "text-[#11BB16] bg-[#D0FBD2]",
      "Delivered": "text-white bg-[#06D001]",
      "Delayed": "text-[#003337] bg-[#C0FBFF]",
    };

    return (
        <span className={`${statusClasses[status]} text-nowrap text-[12px] px-[12px] py-[6px] rounded-[8px] font-[400]`}>
        {status}
      </span>
    );
  };


  return (
    <div className="w-full">
      {ShipmentData.map((item, index) => {
         const isOpen = openIndexes.includes(index);

         
        return (
          
          <div key={index} className="w-full group flex flex-col  mt-2 rounded-[8px] bg-[#FFFFFF] px-[24px] py-[20px] border border-[#DBD7D7]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#DBD7D7]/30 pb-4 w-full">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-20">
                <div className="flex flex-col items-start gap-1">
                  <p className="text-[#808080] text-[12px] font-[400]">
                    Tracking ID
                  </p>
                  <h3 className="text-[#5A65AB] text-[16px] font-[400]">
                    {item.trackingId}
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <p className="text-[#808080] text-[12px] font-[400]">
                    Sender
                  </p>
                  <h3 className="text-[#3A3A3A] text-[16px] font-[400]">
                    {item.sender}
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <p className="text-[#808080] text-[12px] font-[400]">
                    Receiver
                  </p>
                  <h3 className="text-[#3A3A3A] text-[16px] font-[400]">
                    {item.receiver}
                  </h3>
                </div>
              </div>

              <MdOutlineKeyboardArrowDown
                onClick={() => toggleOpen(index)}
                className={`text-[#003701] text-[28px] mt-4 md:mt-0 cursor-pointer transition-transform duration-500 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                isOpen ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6 py-6 border-b border-[#DBD7D7]/30">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20">
                  <div className="flex flex-col items-start gap-2">
                    <p className="text-[#808080] text-[12px] font-[400]">
                      Pick Up From
                    </p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/ng.webp"
                        alt="Nigeria Flag"
                        width={1000}
                        height={1000}
                        className="w-[20px] h-[13px] rounded-[2px]"
                      />
                      <h3 className="text-[#171717] text-[14px] font-[400]">
                       {item.pickUp}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <p className="text-[#808080] text-[12px] font-[400]">
                      Delivery To
                    </p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/ng.webp"
                        alt="Nigeria Flag"
                        width={1000}
                        height={1000}
                        className="w-[20px] h-[13px] rounded-[2px]"
                      />
                      <h3 className="text-[#171717] text-[14px] font-[400]">
                        {item.deliveryTo}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-[#808080] text-[12px] font-[400]">
                      Amount
                    </p>
                    <h3 className="text-[#3A3A3A] text-[16px] font-[400]">
                      N{item.amount}
                    </h3>
                  </div>
                </div>
                <div className="w-fit flex flex-col items-start gap-1">
                  <p className="text-[#808080] text-[12px] font-[400] ">
                    Status
                  </p>
                  <span className=" ">
                    {deliveryStatus(item?.deliveryStatus)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-20 pt-3 md:pt-6">
                <div className="flex flex-col items-start gap-1">
                  <p className="text-[#808080] text-[12px] font-[400]">
                    Processing time
                  </p>
                  <div className="flex items-center gap-2">
                    <MdOutlineAlarm className="text-[#3A3A3A]" />
                    <h3 className="text-[#3A3A3A] text-[16px] font-[400]">
                      {item.processingTime} hours
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap items-start  gap-3">
                  <span className="w-[90px] flex items-center justify-center cursor-pointer bg-transparent border border-[#262A48] text-[#262A48] text-nowrap text-[12px] px-[12px] py-[6px] rounded-[8px] font-[400]">
                    View More
                  </span>
                  <span className="w-[90px] flex items-center justify-center cursor-pointer bg-[#262A48] text-[#fff] text-nowrap text-[12px] px-[12px] py-[7px] rounded-[8px] font-[400]">
                   {item.paymentStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShipmentDetails;
