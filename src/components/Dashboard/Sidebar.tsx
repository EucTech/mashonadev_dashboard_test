"use client";

import { useState, useEffect } from "react";
import { sidebarLinks } from "../../utilities/utlis";
import { MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { LuPanelRight } from "react-icons/lu";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const activePath = pathname;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    // Only toggle if screen width is >= 1024px
    if (window.innerWidth >= 1024) {
      setIsCollapsed(!isCollapsed);
    } else {
      // Always ensure it's collapsed on smaller screens
      setIsCollapsed(true);
    }
  };

  const sidebarWidth = isCollapsed ? "w-16" : "w-60";

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      // We want to collapse the sidebar after navigating
      setIsCollapsed(true);
    }
  };

  return (
    <div
      className={classNames(
        "flex flex-col h-screen bg-white transition-all duration-300 ease-in-out overflow-hidden border-r border-[#E5E5E5]",
        sidebarWidth
      )}
    >
      <div className="flex items-center justify-between h-[96px] px-4 border-b border-[#E5E5E5]">
        {!isCollapsed && (
          <div className="text-xl font-bold text-[#262A48]"></div>
        )}
        <button
          onClick={handleToggle}
          className={classNames(
            "p-2 bg-[#262A48] rounded-full transition-transform duration-300",
            // { "rotate-180": isCollapsed }
          )}
        >
          <LuPanelRight className="text-[#EBFFE2]" size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden mt-3">
        <div className={`flex flex-col gap-1 transition-transform duration-300 ${isCollapsed ? "px-0" : "px-6"}`}>
          {sidebarLinks.map(({ name, icon, link }) => (
            <Link href={link} key={name} onClick={handleLinkClick}>
              <div
                className={classNames(
                  "flex items-center gap-4 p-3 transition-all duration-300 cursor-pointer",
                  {
                    "bg-[#262A48] text-[#EBFFE2] font-[500]": activePath === link,
                    "text-[#525252] hover:bg-[#f3f3f3] font-[400]": activePath !== link,
                    "justify-center rounded-[0px]": isCollapsed,
                    "rounded-[8px]": !isCollapsed,
                  }
                )}
              >
                <span className="text-[24px]">{icon}</span>
                {!isCollapsed && (
                  <span className="whitespace-nowrap text-[16px] ">{name}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className={`flex flex-col gap-6 py-6 ${isCollapsed ? "items-center justify-center" : "px-6"}`}>
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/p1.png"
            alt="Profile"
            width={1000}
            height={1000}
            className="size-[40px] lg:size-[48px] rounded-full object-cover"
          />
          {!isCollapsed && (
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] text-[#525252]">Firstname</p>
              <p className="text-[16px] font-[400] text-[#525252]">Lastname</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-[#525252] cursor-pointer hover:text-[#3f3e3e]">
          <MdLogout size={26} />
          {!isCollapsed && <p className="text-[16px] font-[400]">Logout</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
