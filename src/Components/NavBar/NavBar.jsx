import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SideBar from '../SideBar/SideBar';
//Add -> css/Style
import '../../Style/NavBar.css';
//Import -> icon's
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMoon } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoMailOpenOutline, IoSettingsOutline } from 'react-icons/io5';
//Import -> img logo
import NabBarImg from '../../Images/images.png';
function NavBar() {
    //Toggle nav bar
    let [toggleSide, setToggleSide] = useState(false);
    //Get location 
    let location = useLocation();
    //Split url in two part's

    let UrlSplit = location.pathname.split("/");
    //Click Push on -> to address
    let navigate = useNavigate();

    return (
        <>
            <div className={`NavBar_Main_container ${toggleSide && "NavBar_full_Size"}`}>
                <div className="NavBar_content">
                    <div className="NavBar_content_left_side NavBar_content_sameStyle">
                        <GiHamburgerMenu onClick={() => setToggleSide(!toggleSide)} />
                        <NavLink className={({ isActive }) => isActive ? "active_navBar_links" : ""}
                            to="/" >Dashboard</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active_navBar_links" : ""}
                            to="/setting">Setting</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active_navBar_links" : ""}
                            to="/users" >Users</NavLink>
                    </div>
                    <div className="NavBar_content_right_side NavBar_content_sameStyle">
                        <div className="NavBar_right_side_day_night">
                            <BiMoon />
                            <FiSun />
                        </div>

                        <div className="NavBar_right_side_icons">
                            <IoIosNotificationsOutline className="NavBar_right_side_icon" />
                            <IoMailOpenOutline className="NavBar_right_side_icon" />
                            <IoSettingsOutline className="NavBar_right_side_icon" />
                        </div>

                        <div className="NavBar_right_side_image">
                            <div>
                                <img src={NabBarImg} alt="user animated logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="NavBar_show_pageLinks">
                    <div></div>
                    <span onClick={() => navigate(`/${UrlSplit[1]}`)}>{UrlSplit[1]}</span>
                    <div></div>
                    <span>{UrlSplit[2]}</span>
                </div>
            </div>
            {/* Side bar */}
            <SideBar toggleSide={toggleSide} />
        </>
    )
}
export default NavBar;