import React from "react";

const Navbar = () => {
  return (
    <div className="w-full fixed h-[96px] flex items-center px-5 bg-[#FFFFFF] border-b border-[#E5E5E5] ">
      <div className="w-full flex flex-col gap-1 sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]">
        <h2 className="text-[#171717] font-[700] text-[20px]">Invite & Earn</h2>
        <p className="text-[#737373] text-left font-[400] text-[12px] tracking-[0.6px] leading-[1.6]">
          Keep track of your addresses, location updates. Edit, Delete, Update
          and see all your saved addresses
        </p>
      </div>
    </div>
  );
};

export default Navbar;
