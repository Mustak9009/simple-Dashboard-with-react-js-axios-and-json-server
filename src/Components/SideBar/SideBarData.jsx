/* [+]Set all SideBar -> Data 
        Like => Title,Path,Icons 
*/

//Dashboard -> icon's
import { MdOutlineFlutterDash, MdOutlineTimeline } from 'react-icons/md';
import { ImHome } from 'react-icons/im';
import { AiOutlineStock } from "react-icons/ai";
//QuickMenu -> icon's
import { MdQuickreply, MdGroupAdd, MdProductionQuantityLimits, MdAttachMoney } from 'react-icons/md';
import { GoReport } from "react-icons/go";
//Notification -> icon's
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdMail } from 'react-icons/io';
import { RiFeedbackFill } from 'react-icons/ri';
import { BiMessageRoundedDots } from 'react-icons/bi';
//Staff -> icon's
import {FaUserTie} from 'react-icons/fa';
import {BsBriefcase} from 'react-icons/bs'
const SidebarData = [
    //Dashboards -> Data
    {
        title: "Dashboards",
        path: "/",
        icon: <MdOutlineFlutterDash className="sideBar_menu_icons"/>,
        subMenu: [
            {
                title: "Home",
                path: "/home",
                icon: <ImHome />
            },
            {
                title: "Analytics",
                path: "/analytics",
                icon: <MdOutlineTimeline />
            },
            {
                title: "Sales",
                path: "/sales",
                icon: <AiOutlineStock />

            }
        ]
    },
    //Quick menu -> Data
    {
        title: "QuickMenu",
        path: "/quickMenu",
        icon: <MdQuickreply className="sideBar_menu_icons"/>,
        subMenu: [
            {
                title: "Users",
                path: "/quickMenu/users",
                icon: <MdGroupAdd />
            },
            {
                title: "Products",
                path: "/quickMenu/products",
                icon: <MdProductionQuantityLimits />
            },
            {
                title: "Transactions",
                path: "/quickMenu/transactions",
                icon: <MdAttachMoney />
            },
            {
                title: "Reports",
                path: "/quickMenu/reports",
                icon: <GoReport />
            }
        ]
    },
    //Notification -> Data
    {
        title: "Notification",
        path: "/notification",
        icon: <IoNotificationsOutline className="sideBar_menu_icons"/>,
        subMenu: [
            {
                title: "Mail",
                path: "/notification/mail",
                icon: <IoMdMail />
            },
            {
                title: "Feedback",
                path: "/notification/feedback",
                icon: <RiFeedbackFill />
            },
            {
                title: "Messages",
                path: "/notification/messages",
                icon: <BiMessageRoundedDots />
            }

        ]
    },
    //Staff -> icon's
    {
        title: "Staff",
        path: "/staff",
        icon: <FaUserTie className="sideBar_menu_icons"/>,
        subMenu: [
            {
                title: "Manages",
                path: "/staff/manages",
                icon: <BsBriefcase />
            },
            {
                title: "Analytics",
                path: "/staff/analytics",
                icon: <MdOutlineTimeline />
            },
            {
                title: "Reports",
                path: "/staff/reports",
                icon: <GoReport />
            }

        ]
    }


];
export { SidebarData };