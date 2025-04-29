"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import BalanceView from "./BalanceView";
import TotalShipment from "./TotalShipment";
import TotalExports from "./TotalExports";
import TotalImport from "./TotalImport";

const Overview = () => {
  const [selected, setSelected] = useState("This Month");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["This Week", "This Month", "This Year"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="w-full flex flex-col gap-8 mt-10">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[#171717] font-[500] text-[24px]">Overview</h2>

        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="w-[125px] h-[34px] flex items-center justify-between gap-3 text-[14px] font-[500] bg-[#FFFFFF] text-[#737373] rounded-[8px] py-[8px] px-[12px] border border-[#E5E5E5] cursor-pointer"
          >
            <p>{selected}</p>
            <IoIosArrowDown />
          </div>

          {isOpen && (
            <div className="absolute mt-2 w-[125px] bg-white border border-[#E5E5E5] rounded-[8px] shadow-md">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-2 text-[14px] text-[#737373] hover:bg-[#F5F5F5] cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row md:items-start items-center justify-between gap-4">
        <BalanceView />
        <div className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-end gap-3">
          <TotalShipment />
          <TotalExports/>
          <TotalImport/>
        </div>
      </div>
    </div>
  );
};

export default Overview;
