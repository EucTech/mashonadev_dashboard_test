import { BsWallet } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuBadgeDollarSign, LuHandHelping, LuShip } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";

interface SidebarLinkType {
  name: string;
  icon: string | React.ReactNode;
  link: string;
}


export const sidebarLinks: SidebarLinkType[] = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
    link: "/dashboard",
  },
  {
    name: "Shipments",
    icon: <LuShip />,
    link: "/dashboard/shipments",
  },
  {
    name: "Our Services",
    icon: <RiGlobalLine />,
    link: "/dashboard/our-services",
  },
  {
    name: "Notifications",
    icon: <IoIosNotificationsOutline />,
    link: "/dashboard/notifications",
  },
  {
    name: "Wallet",
    icon: <BsWallet />,
    link: "/dashboard/wallet",
  },
  {
    name: "My Address",
    icon: <TbCurrentLocation />,
    link: "/dashboard/my-address",
  },
  {
    name: "Invite & Earn",
    icon: <LuBadgeDollarSign />,
    link: "/dashboard/invite-and-earn",
  },
  {
    name: "Help Center",
    icon: <LuHandHelping />,
    link: "/dashboard/help-center",
  },
]
