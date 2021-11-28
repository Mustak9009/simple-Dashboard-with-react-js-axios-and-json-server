import React from "react";
//Import sideBar data 
import { SidebarData } from './SideBarData';
import SideBarGif from '../../Images/images.png';
import "../../Style/SideBar.css";
import { IoIosArrowDropdown } from 'react-icons/io';
import SubMenu from './SubMenu';
export default function SideBar({toggleSide}) {

    const ScrollOrNot ={
        overflowX:`${toggleSide?"visible":"hidden"}`
    }
    return (
        <>
        {/*                   -:SideBar:-              */}
            
            {/* SideBar heading */}
                <aside  className={`sideBar_main_div ${toggleSide? "activeSideBar_length":""}`}  style={ScrollOrNot}>
                    <div className="sideBar_heading">
                        <div className="sideBar_heading_logo">
                            <img src={SideBarGif} alt="user animation gif" />
                        </div>
                        <div className="sideBar_heading_text">
                            <p>Welcome, to DashBoard</p>
                            <p>UX Designer <IoIosArrowDropdown
                                style={{
                                    fontSize: "20px",
                                    cursor: "pointer"
                                }}
                            /></p>
                        </div>
                    </div>
                    {/* SideBar Menu heading */}
                    <div className="sideBar_menu_heading">
                        <h2>Navigation</h2>
                    </div>
                    {/* SideBar menu */}
                    <div className="sideBar_menu">
                        {SidebarData.map((data, index) => {
                            return (
                                <SubMenu data={data} key={index}/>
                            )
                        })}
                    </div>
                </aside>

        </>
    )
}


//Check this url if package-lock.json => throw error -> 
    // https://stackoverflow.com/questions/65517361/npm-err-object-for-dependency-babel-core-is-empty