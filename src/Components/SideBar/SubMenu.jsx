import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function SubMenu({ data }) {
    let [subNave, setSubNav] = useState(false);
    const showSubNav = () => setSubNav(!subNave);
    return (
        <>

            <div className="sideBar_menu_Dashboards">
                <NavLink
                    className={({ isActive }) => `menu_text_heading  
                    ${subNave ? "sideBar_heading_active_ON" : ""}
                    ${isActive ? "SideBar_Heading_active" : ""}`}
                    onClick={data.subMenu && showSubNav}
                    to={data.path}>{data.title}
                    {data.icon}</NavLink>
                <div className="dashboards_content">
                    {subNave && data.subMenu.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.path}
                                    className={({ isActive }) => isActive ? "active_links_of_sidebar_menu" : ""}
                                >{item.title} {item.icon}</NavLink>
                            </li>
                        )
                    })
                    }
                </div>
            </div>

        </>
    )
}