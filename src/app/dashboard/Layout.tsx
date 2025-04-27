import React from "react";
import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-full flex flex-row justify-start">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-auto bg-[#E5E5E5]">
        <Navbar />
        <div className="w-full h-full pt-[96px]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
