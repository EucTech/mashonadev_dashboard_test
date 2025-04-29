"use client";

import { useState, useEffect } from "react";
import { sidebarLinks } from "../../utilities/utlis";
import { MdLogout } from "react-icons/md";
import { usePathname} from "next/navigation"; 
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { LuPanelRight } from "react-icons/lu";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const activePath = pathname;
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    setLoading(false); 
  }, [pathname]);

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      setIsCollapsed(!isCollapsed);
    } else {
      setIsCollapsed(true);
    }
  };

  const sidebarWidth = isCollapsed ? "w-16" : "w-60";

  const handleLinkClick = (link: string) => {
    if (window.innerWidth < 1024) {
      setIsCollapsed(true);
    }
    setLoading(true);
  };

  return (
    <div
      className={classNames(
        "flex flex-col h-screen bg-white transition-all duration-300 ease-in-out overflow-hidden border-r border-[#E5E5E5]",
        sidebarWidth
      )}
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="loader border-4 border-t-4 border-gray-200 rounded-full w-10 h-10 animate-spin border-t-[#262A48]" />
        </div>
      )}

      <div className="flex items-center justify-between h-[96px] px-4 border-b border-[#E5E5E5]">
        {!isCollapsed && (
          <div className="text-xl font-bold text-[#262A48]"></div>
        )}
        <button
          onClick={handleToggle}
          className="p-2 bg-[#262A48] rounded-full cursor-pointer transition-transform duration-300"
        >
          <LuPanelRight className="text-[#EBFFE2]" size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden mt-3">
        <div className={`flex flex-col gap-1 transition-transform duration-300 ${isCollapsed ? "px-0" : "px-6"}`}>
          {sidebarLinks.map(({ name, icon, link }) => (
            <Link href={link} key={name} onClick={() => handleLinkClick(link)}>
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
